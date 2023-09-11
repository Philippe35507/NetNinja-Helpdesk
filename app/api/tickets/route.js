import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const ticket = await request.json();

  // Get Supabase instance
  const supabase = createRouteHandlerClient({ cookies });

  // Get the current user session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Insert the data
  const { data, error } = await supabase
    .from("Tickets")
    .insert({
      ...ticket,
      user_email: session.user.email,
    })
    .select()
    .single();

  return NextResponse.json({ data, error });
}
