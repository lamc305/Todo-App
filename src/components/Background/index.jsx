import { useContext } from 'react'
import { StateContext } from '../../context/stateContext'
import './backgroundStyles.css'

function Background() {

  const { darkMode } = useContext(StateContext)

  return (
    <div className="backgroundApp">
      <div className={`backgroundTop ${darkMode ? '' : 'backgroundTopLight'}`}></div>
      <div className={`backgroundBottom ${darkMode ? '' : 'backgroundBottomLight'}`}></div>
    </div>
  )
}

export default Background