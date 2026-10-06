export type User = {
  id: number
  name: string
  email: string
}

export type UsersState = {
  users: User[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}