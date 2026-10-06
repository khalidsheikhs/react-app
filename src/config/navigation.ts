import type { MenuItem } from "@/types/navigation"

import {
  LayoutDashboard,
  FileText,
  Image,
  Folder,
  Tags,
  Layers,
  Users,
  Settings,
} from "lucide-react"

export const SIDEBAR_ITEMS: MenuItem[] = [
  {
    item: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    item: "Content",
    path: "/posts",
    icon: FileText,
    children: [
      { item: "Posts", path: "/content/posts" },
      { item: "Add Post", path: "/content/add" },
      { item: "Categories", path: "/content/categories" },
      { item: "Tags", path: "/content/tags" },
    ],
  },
  {
    item: "Sections",
    path: "/sections",
    icon: Folder,
  },
  {
    item: "Media",
    path: "/media",
    icon: Image,
    children: [
      { item: "Library", path: "/media/library" },
      { item: "Add Media", path: "/media/add" },
    ],
  },
  {
    item: "Pages",
    path: "/pages",
    icon: FileText,
    children: [
      { item: "All", path: "/pages" },
      { item: "Add", path: "/pages/add" },
    ],
  },
  {
    item: "Users",
    path: "/users",
    icon: Users,
    children: [
      { item: "All", path: "/users" },
      { item: "Add", path: "/users/add" },
      { item: "Profile", path: "/users/profile" },
    ],
  },
  {
    item: "Settings",
    path: "/settings",
    icon: Settings,
    children: [
      { item: "General", path: "/settings/general" },
      { item: "Writing", path: "/settings/writing" },
      { item: "Reading", path: "/settings/reading" },
      { item: "Discussion", path: "/settings/discussion" },
      { item: "Media", path: "/settings/media" },
      { item: "Permalinks", path: "/settings/permalinks" },
      { item: "Privacy", path: "/settings/privacy" },
    ],
  },
]