import { createContext, useContext, useReducer } from "react" // useState
import type { AppState } from './types'
import appReducer from './appReducer'

const AppContext = createContext<AppState | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  // const [appName, setAppName] = useState("My Dashboard")

  /* const value = {
    appName,
    setAppName,
  } */

  /** Use Reducer Example **/
  const [state, dispatch] = useReducer(appReducer, {
    appName: "My Dashboard",
    setAppName: (String) => String
  })
  /** Use Reducer Example **/

  const value = {
    appName: state.appName,
    setAppName: (name: string) =>
      dispatch({
        type: "SET_APP_NAME",
        payload: name,
      }),
  }
  /** Use Reducer Example **/

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider")
  }

  return context
}