import supabase from "@/supabase";

export default function useEvent() {
  const create = async (name: string, description: string, date: string) => {
    if (!name || !description || !date) {
      throw Error();
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (!user?.id) {
      throw Error();
    }

    const { data } = await supabase
    .from('events')
    .insert([
      {  
        name,
        description,
        date,
        user_id: user.id,
        created: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString(),
      },
    ])
    .select();
    return data;
  }

  return {
    create,
  }
}