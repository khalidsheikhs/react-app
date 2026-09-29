import UserList from '../features/users/components/UserList'
import SelectedUser from '../features/users/components/SelectedUser';
import { useUsers } from '../features/users/hooks/useUsers'
import { useState } from "react"

function UsersPage() {
  // const { users } = useUsers();
  const { users, loading, error } = useUsers();
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Users Page</h2>
      <UserList users={users} selectedUserId={selectedUserId} onSelectUser={setSelectedUserId} />
      <SelectedUser selectedUserId={selectedUserId} />
    </div>
  )
}

export default UsersPage