import supabase from "@/supabase";
import { AuthChangeEvent, Session, Provider } from "@supabase/supabase-js";
import { useState } from "react";

interface AuthUser {
  provider: Provider;
  nickname: string;
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
      setAuthUser({ nickname: data[0].nickname, provider: session.user?.app_metadata?.provider as Provider });
    }

    // 로그인
    if (event === 'SIGNED_IN') {
      if (data?.length) {
        setAuthUser({ nickname: data[0].nickname, provider: session.user?.app_metadata?.provider as Provider });
        return;
      }
      
      // 회원가입
      if (session.user.identities) {
        await supabase.from('users').insert({ id: session?.user.id, nickname: session.user.identities[0].identity_data?.name });
        setAuthUser({ nickname: session.user.identities[0].identity_data?.name, provider: session.user?.app_metadata?.provider as Provider });
      }
    }
  };

  const initAuth = () => {
    supabase.auth.onAuthStateChange(authStateChange);
  };

  return {
    authUser,
    signInWithGoogle,
    signInWithKakao,
    signOut,
    initAuth,
  }
};

export default useAuth;
