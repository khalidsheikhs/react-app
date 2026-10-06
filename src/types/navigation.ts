import type { LucideIcon } from "lucide-react"

export type BaseMenuItem = {
  item: string
  path: string
  icon?: LucideIcon
}

export type MenuItem = BaseMenuItem & {
  children?: BaseMenuItem[]
}