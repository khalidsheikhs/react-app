import type { AppState, AppAction } from './types'

export default function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "SET_APP_NAME":
      return {
        ...state,
        appName: action.payload,
      }

    default:
      return state
  }
}