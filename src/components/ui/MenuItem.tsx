import { useState } from "react"
import { NavLink } from "react-router-dom"
import type { MenuItem as Item } from "@/types/navigation"

function MenuItem({
  item,
  path,
  icon: Icon,
  children,
  collapsed = false,
  onNavigate,
}: Item & {
  collapsed?: boolean
  onNavigate?: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  const hasChildren = Boolean(children?.length)

  if (!hasChildren) {
    return (
      <NavLink
        to={path}
        onClick={onNavigate}
        className={({ isActive }) =>
          `
            block rounded-lg px-3 py-2
            text-sm font-medium
            ${
              isActive
                ? "bg-gray-100 text-primary"
                : "text-gray-700 hover:bg-gray-100"
            }
          `
        }
      >
        <Icon size={20} />
        {!collapsed && <span>{item}</span>}
      </NavLink>
    )
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="
          flex w-full items-center justify-between
          rounded-lg px-3 py-2
          text-sm font-medium text-gray-700
          hover:bg-gray-100
        "
      >
        <Icon size={20} />
        {!collapsed && <span>{item}</span>}

        {!collapsed && (
          <span
            className={`transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        )}
      </button>

      {isOpen && !collapsed && (
        <div className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-2">
          {children?.map((child) => (
            <NavLink
              key={child.item}
              to={child.path}
              onClick={onNavigate}
              className={({ isActive }) =>
                `
                  block rounded-lg px-3 py-2
                  text-sm
                  ${
                    isActive
                      ? "bg-gray-100 font-medium text-primary"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `
              }
            >
              {child.item}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default MenuItem