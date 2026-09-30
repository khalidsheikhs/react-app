import { useAppContext } from "./app/Providers/app/AppProvider"
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
