const API = "http://localhost:4000";

export async function getFrontAnalytics(systemId, token) {

  const res = await fetch(`${API}/analytics/front-time/${systemId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
}