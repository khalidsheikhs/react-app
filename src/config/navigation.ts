import type { MenuItem } from "@/types/navigation"

import {
  LayoutDashboard,
  FileText,
  Image,
  Folder,
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
    path: "/",
    icon: FileText,
    children: [
      { item: "Posts", path: "/posts" },
      { item: "Add Post", path: "/posts/add" },
      { item: "Categories", path: "/categories" },
      { item: "Tags", path: "/tags" },
    ],
  },
  {
    item: "Sections",
    path: "/sections",
    icon: Folder,
  },
  {
    item: "Media",
    path: "",
    icon: Image,
    children: [
      { item: "Library", path: "/media" },
      { item: "Add Media", path: "/media/add" },
    ],
  },
  {
    item: "Pages",
    path: "",
    icon: FileText,
    children: [
      { item: "All", path: "/pages" },
      { item: "Add", path: "/pages/add" },
    ],
  },
  {
    item: "Users",
    path: "",
    icon: Users,
    children: [
      { item: "All", path: "/users" },
      { item: "Add", path: "/users/add" },
      { item: "Profile", path: "/profile" },
    ],
  },
  {
    item: "Settings",
    path: "",
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