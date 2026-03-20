import { supabase } from "../lib/supabase";

const API = "http://localhost:4000";

// helper
async function getAuthHeaders() {
  const {
    data: { session }
  } = await supabase.auth.getSession();

  return {
    Authorization: `Bearer ${session?.access_token}`,
  };
}

// ----------------------
// Members
// ----------------------

export async function getMembers() {

  const headers = await getAuthHeaders();

  const res = await fetch(`${API}/members`, {
    headers,
  });

  return res.json();
}

export async function createMember(member) {

  const headers = await getAuthHeaders();

  const res = await fetch(`${API}/members`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(member),
  });

  return res.json();
}

export async function updateMember(memberId, updates) {

  const headers = await getAuthHeaders();

  const res = await fetch(`${API}/members/${memberId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(updates),
  });

  return res.json();
}