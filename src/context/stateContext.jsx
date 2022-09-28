import { useState } from "react";
import { createContext } from "react";

export const StateContext = createContext()

export function StateContextProvider({ children }) {

  const [state, setState] = useState(JSON.parse(localStorage.getItem('task')) || [])

  const data = { state, setState }

  return (
    <StateContext.Provider value={data}>
      {children}
    </StateContext.Provider>
  )
}