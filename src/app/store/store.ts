import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from "./slices/sidebar"
import usersReducer from "@/features/users/usersSlice"

 const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    users: usersReducer,
  },
})

export default store