const API = "http://localhost:4000";
import { useIdStore } from "../store/idStore";

// ----------------------
// Members
// ----------------------

export async function getMembers() {

  const systemId = useIdStore.getState().systemId;

  const res = await fetch(`${API}/members?systemId=${systemId}`);

  return res.json();
}

export async function createMember(member) {

  const systemId = useIdStore.getState().systemId;

  const res = await fetch(`${API}/members`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...member,
      systemId
    }),
  });

  return res.json();
}

export async function searchMembers(query) {

  const systemId = useIdStore.getState().systemId;

  const res = await fetch(
    `${API}/members/search?q=${encodeURIComponent(query)}&systemId=${systemId}`
  );

  return res.json();
}


// ----------------------
// Folders
// ----------------------

export async function getFolders() {

  const systemId = useIdStore.getState().systemId;

  const res = await fetch(`${API}/folders?systemId=${systemId}`);

  return res.json();
}

export async function createFolder(folder) {

  const systemId = useIdStore.getState().systemId;

  const res = await fetch(`${API}/folders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...folder,
      systemId
    }),
  });

  return res.json();
}

export async function deleteFolder(folderId) {

  const res = await fetch(`${API}/folders/${folderId}`, {
    method: "DELETE",
  });

  return res.json();
}

export async function getMembersInFolder(folderId) {

  const res = await fetch(`${API}/folders/${folderId}/members`);

  return res.json();
}

export async function addMemberToFolder(folderId, memberId) {

  const res = await fetch(`${API}/folders/${folderId}/members`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ memberId }),
  });

  return res.json();
}

export async function removeMemberFromFolder(folderId, memberId) {

  const res = await fetch(`${API}/folders/${folderId}/members/${memberId}`, {
    method: "DELETE",
  });

  return res.json();
}