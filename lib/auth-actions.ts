// lib/auth-actions.ts

import { supabase } from "./supabase";

export async function getCurrentUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error("Error getting current user:", error.message);
    return null;
  }

  return user;
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error.message);
    return false;
  }
  return true;
}
