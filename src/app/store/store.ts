import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from "./slices/sidebar"

 const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
})

export default store