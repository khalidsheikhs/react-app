import type { Category } from "../types"

export function getCategories(): Promise<Category[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Technology" },
        { id: 2, name: "Business" },
        { id: 3, name: "Sports" },
      ])
    }, 1000)
  })
}