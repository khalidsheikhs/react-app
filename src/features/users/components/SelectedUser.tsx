function SelectedUser({ selectedUserId }: {selectedUserId: number | null}) {
  return (
    <>
      {selectedUserId && (
        <p>Selected user ID: {selectedUserId}</p>
      )}
    </>
  )
}

export default SelectedUser