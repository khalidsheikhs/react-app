import { useAppSelector } from "@/app/store/hooks"

export default function useSelectedUsers() {
  const { selectedUser } = useAppSelector(
    (state) => state.users
  )

  return {
    selectedUser
  }
}