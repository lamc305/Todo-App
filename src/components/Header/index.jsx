import { useContext } from 'react'
import moon from '../../assets/icon-moon.svg'
import sun from '../../assets/icon-sun.svg'
import { StateContext } from '../../context/stateContext'
import './headerStyles.css'
function Header() {

  const { darkMode, setDarkMode } = useContext(StateContext)

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <header className="header">
      <h1>TODO</h1>
      <img src={darkMode ? sun : moon} onClick={handleDarkMode} className='moon' alt="luna" />
    </header>
  )
}

export default Header