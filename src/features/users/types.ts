export type User = {
  id: number
  name: string
  email: string
}

export type UsersState = {
  users: User[]
  selectedUser: number | null
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}