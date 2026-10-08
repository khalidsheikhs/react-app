import { UserList } from "@/features/users"
import { SelectedUser } from "@/features/users"

function UsersPage() {
  return (
    <>
      <h2>Users Page</h2>

      <UserList />
      <SelectedUser />
    </>
  )
}

export default UsersPage
