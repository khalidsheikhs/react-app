import { NavLink } from "react-router-dom"

function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found.</p>
      <NavLink to={'/login'}>
        Back to Login
      </NavLink>
    </div>
  )
}

export default NotFoundPage