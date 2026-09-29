export type AppState = {
  appName: string
  setAppName: (name: string) => void
}

/** Use Reducer Example Types **/
export type AppAction = {
  type: "SET_APP_NAME"
  payload: string
}
/** Use Reducer Example Types **/