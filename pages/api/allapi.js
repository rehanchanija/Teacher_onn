// api/items.js
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getAuthToken = () => localStorage.getItem("token");

export const getItems = async () => {
  const response = await fetch(`${API_BASE_URL}`, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });
  if (!response.ok) throw new Error("Failed to fetch items");
  return response.json();
};

export const createItem = async (data) => {
  const response = await fetch(`${API_BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAuthToken()}`,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to create item");
  return response.json();
};

export const updateItem = async (id, data) => {
  const response = await fetch(`${API_BASE_URL}${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAuthToken()}`,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to update item");
  return response.json();
};

export const deleteItem = async (id) => {
  const response = await fetch(`${API_BASE_URL}${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });
  if (!response.ok) throw new Error("Failed to delete item");
  return response.json();
};
