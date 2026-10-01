import {
  useAppDispatch,
  useAppSelector,
} from "../../app/store/hooks"

import { toggleSidebar } from "../../app/store/slices/sidebar"

function Sidebar() {
  const dispatch = useAppDispatch()
  const sidebarCollapsed = useAppSelector(
    (state) => state.sidebar.sidebarCollapsed
  )

  return (
    <div className={sidebarCollapsed ? "Collapsed" : "Expanded"}>
      <h2>Side UI</h2>
      <button onClick={() => dispatch(toggleSidebar())}>
        Toggle Sidebar
      </button>
    </div>
  )
}

export default Sidebar