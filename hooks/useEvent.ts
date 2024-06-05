"use client"

import supabase from "@/supabase";
import { useState } from "react";

import { isOverDate } from "@/utils/date";

export default function useEvent() {
  const [event, setEvent] = useState<{
    created: string;
    date: string;
    description: string;
    id: string;
    name: string;
    status: "public" | "delete" | "private";
    user_id: string;
  } | null>(null);

  const create = async (name: string, description: string, date: string) => {
    if (!name || !description || !date) {
      throw Error("[useEvent] create");
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (!user?.id) {
      throw Error("[useEvent] create");
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

  const getActiveEvent = async (uri?: string) => {
    if (uri) {
      let { data: user } = await supabase
      .from('users')
      .select("*")
      .eq('uri', uri);

      if (user === null) {
        throw Error("[useEvent] getActiveEvent");
      }
      
      let { data: event } = await supabase
      .from('events')
      .select("*")
      .eq('user_id', user[0].id);

      if (event === null) return null;
      return isOverDate(event[0].date) ? event[0] : null;
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (user === null) {
      throw Error("[useEvent] getActiveEvent");
    }

    let { data: event } = await supabase
      .from('events')
      .select("*")
      .eq('user_id', user.id);

    if (event === null) return null;
    return isOverDate(event[0].date) ? event[0] : null;
  };

  return {
    create,
    event,
    setEvent,
    getActiveEvent,
  }
}
