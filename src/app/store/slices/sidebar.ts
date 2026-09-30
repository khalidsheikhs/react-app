import { createSlice } from "@reduxjs/toolkit"

export type SidebarState = {
  sidebarCollapsed: boolean
}

const initialState: SidebarState = {
  sidebarCollapsed: false,
}

const sidebarSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarCollapsed = !state.sidebarCollapsed
    },
  },
})

export const { toggleSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer