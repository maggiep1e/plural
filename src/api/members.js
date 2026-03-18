const API = "http://localhost:4000";
import { useIdStore } from "../store/idStore";

// ----------------------
// Members
// ----------------------

export async function getMembers(token) {

  const systemId = useIdStore.getState().systemId;

  const res = await fetch(`${API}/members?systemId=${systemId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
}

export async function createMember(member, token) {

  const systemId = useIdStore.getState().systemId;

  const res = await fetch(`${API}/members`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },

    body: JSON.stringify({
      ...member,
      systemId
    }),
  });

  return res.json();
}

export async function searchMembers(query, token) {

  const systemId = useIdStore.getState().systemId;

  const res = await fetch(
    `${API}/members/search?q=${encodeURIComponent(query)}&systemId=${systemId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return res.json();
}


// ----------------------
// Folders
// ----------------------

export async function getFolders(token) {

  const systemId = useIdStore.getState().systemId;

  const res = await fetch(`${API}/folders?systemId=${systemId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
}

export async function createFolder(folder, token) {

  const systemId = useIdStore.getState().systemId;

  const res = await fetch(`${API}/folders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...folder,
      systemId
    }),
  });

  return res.json();
}

export async function deleteFolder(folderId, token) {

  const res = await fetch(`${API}/folders/${folderId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
}

export async function getMembersInFolder(folderId, token) {

  const res = await fetch(`${API}/folders/${folderId}/members`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
}

export async function addMemberToFolder(folderId, memberId, token) {

  const res = await fetch(`${API}/folders/${folderId}/members`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ memberId }),
  });

  return res.json();
}

export async function removeMemberFromFolder(folderId, memberId, token  ) {

  const res = await fetch(`${API}/folders/${folderId}/members/${memberId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
}