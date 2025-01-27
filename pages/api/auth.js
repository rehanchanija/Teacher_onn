// api/auth.js
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const login = async (credentials) => {
  const response = await fetch(
    `${API_BASE_URL}login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    },
    console.log(response)
  );
  console.log("response ", response);
  if (!response.ok) throw new Error("Failed to log in");
  return response.json();
};

export const signup = async (userData) => {
  const response = await fetch(`${API_BASE_URL}signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error("Failed to sign up");
  return response.json();
};
