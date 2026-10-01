import {
  useAppDispatch,
  useAppSelector,
} from "@/app/store/hooks"

import {
  toggleSidebar,
  closeMobileSidebar,
} from "@/app/store/slices/sidebar"

function Sidebar() {
  const dispatch = useAppDispatch()
  const { sidebarCollapsed, mobileSidebarOpen } = useAppSelector(
    (state) => state.sidebar
  );

  return (
    <aside
      className={`
        fixed inset-0 z-50 bg-white
        md:relative md:z-auto md:block
        ${mobileSidebarOpen ? "block" : "hidden md:block"}
        ${sidebarCollapsed ? "md:w-16" : "md:w-64"}
      `}
    >
      <div className="flex h-full flex-col">
        {/* Sidebar header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
          <h2 className="text-xl font-bold text-gray-800">
            Side UI
          </h2>

          {/* Mobile close button */}
          <button
            type="button"
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
            onClick={() => dispatch(closeMobileSidebar())}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        {/* Desktop collapse button */}
        <div className="p-4">
          <button
            className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            onClick={() => dispatch(toggleSidebar())}
          >
            Toggle Sidebar
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar