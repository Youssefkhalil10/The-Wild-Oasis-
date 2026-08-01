import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rlrqinvcvmfqiedgfxrh.supabase.co";
const supabaseKey = "sb_publishable_K5sRIIpIlBChWtIRPIBxsg_C2nBIeVi"; //api key form supabase
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

//npm i --save @supabase/supabase-js
