import { createClient } from "@supabase/supabase-js";

const url =
  import.meta.env.VITE_SUPABASE_URL;

const key =
  import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured =
  Boolean(url && key);

if (!isSupabaseConfigured) {
  console.warn(
    "Supabase belum dikonfigurasi. " +
      "Tambahkan VITE_SUPABASE_URL dan " +
      "VITE_SUPABASE_ANON_KEY jika fitur database ingin digunakan."
  );
}

export const supabase =
  isSupabaseConfigured
    ? createClient(url, key)
    : null;