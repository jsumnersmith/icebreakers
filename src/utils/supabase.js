import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.GATSBY_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseAnonKey = process.env.GATSBY_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY

export default createClient(supabaseUrl, supabaseAnonKey)