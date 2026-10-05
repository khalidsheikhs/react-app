export type MenuItem = {
  item: string
  path: string
  children?: {
    item: string
    path: string
  }[]
}

export const SIDEBAR_ITEMS: MenuItem[] = [
  {
    item: "Dashboard",
    path: "/dashboard",
  },
  {
    item: "Content",
    path: "#",
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
  },
  {
    item: "Media",
    path: "#",
    children: [
      { item: "Library", path: "/media/library" },
      { item: "Add Media", path: "/media/add" },
    ],
  },
  {
    item: "Pages",
    path: "#",
    children: [
      { item: "All", path: "/pages" },
      { item: "Add", path: "/pages/add" },
    ],
  },
  {
    item: "Users",
    path: "#",
    children: [
      { item: "All", path: "/users" },
      { item: "Add", path: "/users/add" },
      { item: "Profile", path: "/users/profile" },
    ],
  },
  {
    item: "Settings",
    path: "#",
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