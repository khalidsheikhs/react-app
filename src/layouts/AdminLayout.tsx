import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Footer from "./components/Footer"

function AdminLayout() {
  return (
    <>
      <h1>
        Admin Layout
      </h1>
      <Sidebar />

      <div>
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AdminLayout;