import type { LucideIcon } from "lucide-react"

export type BaseMenuItem = {
  item: string
  path: string
}

export type MenuItem = BaseMenuItem & {
  icon: LucideIcon
  children?: BaseMenuItem[]
}