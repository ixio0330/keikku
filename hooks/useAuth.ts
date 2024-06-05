import supabase from "@/supabase";
import { AuthChangeEvent, Session, Provider } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

interface AuthUser {
  id: string;
  provider: Provider;
  nickname: string;
  uri: string;
}

const useAuth = () => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);

  const signInWithKakao = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'kakao',
    });
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const authStateChange = async (event: AuthChangeEvent, session: Session | null) => {
    // 로그아웃
    if (event === 'SIGNED_OUT') {
      setAuthUser(null);
      return;
    }

    // session 체크
    if (!session?.user) {
      return;
    }

    // 사용자 정보
    const { data } = await supabase.from('users').select().eq('id', session.user.id);

    // 자동 로그인
    if (event === 'INITIAL_SESSION' && data?.length) {
      setAuthUser({ 
        id: data[0].id, 
        nickname: data[0].nickname, 
        provider: session.user?.app_metadata?.provider as Provider,
        uri: data[0].uri,
      });
    }

    // 로그인
    if (event === 'SIGNED_IN') {
      if (data?.length) {
        setAuthUser({ 
          id: data[0].id, 
          nickname: data[0].nickname, 
          provider: session.user?.app_metadata?.provider as Provider,
          uri: data[0].uri,
        });
        return;
      }
      
      // 회원가입
      if (session.user.identities) {
        const { data } = await supabase.from('users').insert({ id: session?.user.id, nickname: session.user.identities[0].identity_data?.name }).select("*");
        if (data === null) return;
        setAuthUser({ 
          id: session?.user.id, 
          nickname: session.user.identities[0].identity_data?.name, 
          provider: session.user?.app_metadata?.provider as Provider,
          uri: data[0].uri,
        });
      }
    }
  };

  const initAuth = () => {
    supabase.auth.onAuthStateChange(authStateChange);
  };

  useEffect(() => {
    initAuth();
  }, []);

  return {
    authUser,
    signInWithGoogle,
    signInWithKakao,
    signOut,
    initAuth,
  }
};

export default useAuth;
