import { useAuth } from "@clerk/clerk-react";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = async (supabaseAccessToken) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY,
    {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    }
  );
  // set Supabase JWT on the client object,
  // so it is sent up with all Supabase requests
  return supabase;
};

function App() {
  const { getToken } = useAuth();

  const fetchData = async () => {
    const supabaseAccessToken = await getToken({
      template: "supabaseIndieHackerKit",
    });

    const supabase = await supabaseClient(supabaseAccessToken);

    const { data, error } = await supabase.from("Pricing").select();
  };

  return (
    <div className="app">
      <button onClick={fetchData}>Fetch data</button>
    </div>
  );
}
