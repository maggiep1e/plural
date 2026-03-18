const API = "http://localhost:4000";

export async function createSystemJournal(data, token) {

  const res = await fetch(`${API}/journals/system`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  return res.json();
}


export async function createMemberJournal(data, token) {

  const res = await fetch(`${API}/journals/member`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  return res.json();
}

export async function searchMemberJournal(memberId, token) {

  const res = await fetch(
    `http://localhost:4000/journals/member/search/${memberId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return res.json();
}