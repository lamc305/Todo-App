import moon from '../../assets/icon-sun.svg'
import './headerStyles.css'
function Header() {
  return (
    <header className="header">
      <h1>TODO</h1>
      <img src={moon} className='moon' alt="luna" />
    </header>
  )
}

export default Header