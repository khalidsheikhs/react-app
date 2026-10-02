export type LoginRequest = {
  email: string;
  password: string;
}

export type LoginResponse = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  image: string;
}