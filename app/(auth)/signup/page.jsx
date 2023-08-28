"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import AuthForm from "../AuthForm";

export default function Signup() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    const supabase = createClientComponentClient();
    await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${location.origin}/api/auth/callback` },
    });
  };
  return (
    <main>
      <h2 className="text-center">Sign Up</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
