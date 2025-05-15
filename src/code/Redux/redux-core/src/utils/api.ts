/** @format */

export const loginUser = async (credentials: Record<string, unknown>) => {
  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
  return response.json();
};
