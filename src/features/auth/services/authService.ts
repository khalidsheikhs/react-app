import type { LoginRequest, LoginResponse } from "../types"

export const login = async (
  credentials: LoginRequest
): Promise<LoginResponse> => {
  const response = await fetch("https://be-cms.dev.foochia.io/api/Auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);

    throw new Error(error?.message || "Invalid email or password");
  }

  return response.json()
};