import './App.css'
import { useAppContext } from "./app/providers/AppContext"
import UsersPage from "./pages/UsersPage"

function App() {
  const { appName, setAppName } = useAppContext()
  return (
    <div>
      {appName && (
        <h1>{appName}</h1>
      )}
      <button onClick={() => setAppName("Admin Dashboard")}>
        Change App Name
      </button>
      <UsersPage />
    </div>
  )
}

export default App
