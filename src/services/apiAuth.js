import supabase from "./Supabase";
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

//After user login, we need the session that have the data.
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  //if the session is exists, we send a request to the server,so we use getUser function.
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  //after return this data, we need to save it in React Query, so use useQuery().
  return data?.user;
}

export async function LogOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
