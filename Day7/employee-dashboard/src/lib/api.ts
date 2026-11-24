const API_BASE_URL = "http://localhost:5000/api";

export async function apiRequest(
  endpoint: string,
  options: RequestInit = {},
) {
  const token = localStorage.getItem("access_token");

  const headers = new Headers(options.headers);

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_role");
    
    window.location.assign("/login");

    throw new Error("Session expired. Please log in again.");
  }

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}