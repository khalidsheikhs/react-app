import { useQuery } from "@tanstack/react-query"
import { getCategories } from "../services/categoriesService"

export default function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  })
}