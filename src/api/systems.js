import { supabase } from "../lib/supabase";

export async function getSystems() {

  const { data, error } = await supabase
    .from("systems")
    .select("*");

  if (error) throw error;

  return data;
}


export async function createSystem(name) {

  const { data: userData } = await supabase.auth.getUser();

  const userId = userData.user.id;

  const { data, error } = await supabase
    .from("systems")
    .insert([{ name, user_id: userId }])
    .select()
    .single();

  if (error) throw error;

  return data;

}