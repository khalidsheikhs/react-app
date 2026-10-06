import UserList from "@/features/users/components/UserList"
import SelectedUser from "@/features/users/components/SelectedUser"

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
