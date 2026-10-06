import useSelectedUser from "./../hooks/useSelectedUser"

function SelectedUser() {
  const { selectedUser } = useSelectedUser()
  return (
    <>
      {selectedUser && (
        <p>Selected user ID: {selectedUser}</p>
      )}
    </>
  )
}

export default SelectedUser