import { useContext } from "react"
import { StateContext } from "../../context/stateContext"
import './styleFooter.css'

function TaskFooterResponsive() {

  const { setFilter, darkMode } = useContext(StateContext)

  const handleFilter = event => {
    setFilter(event.target.value)
  }

  return (
    <div className={`actions ${darkMode ? '' : 'actionsLight'}`}>
      <label >
        <input onClick={handleFilter} type="radio" name="filter" id="all" value='all' />
        <span>All</span>
      </label>
      <label>
        <input onClick={handleFilter} type="radio" name="filter" id="active" value='active' />
        <span>Active</span>
      </label>
      <label>
        <input onClick={handleFilter} type="radio" name="filter" id="completed" value='completed' />
        <span>Completed</span>
      </label>
    </div>
  )
}

export default TaskFooterResponsive