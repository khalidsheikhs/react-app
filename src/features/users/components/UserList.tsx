import type { User } from "../types"
import Button from "@/components/ui/Button"
// import { useState } from "react"

type UserListProps = {
  users: User[]
  selectedUserId?: number | null
  onSelectUser?: (id: number) => void
}

function UserList({ users, selectedUserId, onSelectUser}: UserListProps) {
  // const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          {users.map((user) => (
          <tr key={user.id} className={user.id === selectedUserId ? 'active' : '' }>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Button onClick={() => onSelectUser(user.id)}>
                View User
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserList