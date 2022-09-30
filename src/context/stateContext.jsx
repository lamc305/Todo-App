import { useState } from "react";
import { createContext } from "react";

export const StateContext = createContext()

export function StateContextProvider({ children }) {

  const [state, setState] = useState(JSON.parse(localStorage.getItem('task')) || [])
  const [filter, setFilter] = useState('all')
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('theme')) || false)
  const data = { state, setState, filter, setFilter, darkMode, setDarkMode }

  return (
    <StateContext.Provider value={data}>
      {children}
    </StateContext.Provider>
  )
}