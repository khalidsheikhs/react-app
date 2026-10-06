import { useUsers } from "@/features/users/hooks/useUsers"
import UserList from "@/features/users/components/UserList"
import SelectedUser from "@/features/users/components/SelectedUser"
import { useState } from "react"

function UsersPage() {
  let [ selectedUserId, setSelectedUserId ] = useState<number | null>(null)
  const { users, loading, error } = useUsers()

  if (loading) {
    return <p>Loading users...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  const selectUser = (id: number | null):void => {
    setSelectedUserId(id)
  }

  return (
    <div>
      <h2>Users Page</h2>

      <UserList users={users} selectedUserId={selectedUserId} onSelectUser={selectUser} />
      <SelectedUser selectedUserId={selectedUserId} />
    </div>
  )
}

export default UsersPage
