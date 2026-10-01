import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <>
      <h1>
        Auth Layout
      </h1>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AuthLayout;