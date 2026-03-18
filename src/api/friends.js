const API = "http://localhost:4000";

export async function sendFriendRequest(data, token) {

  const res = await fetch(`${API}/friends/request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  return res.json();
}


export async function getFriends(userId, token) {

  const res = await fetch(`${API}/friends/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
}


export async function getRequests(userId, token) {

  const res = await fetch(`${API}/friends/requests/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
}