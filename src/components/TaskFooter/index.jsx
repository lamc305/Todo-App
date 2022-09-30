import { useContext } from "react"
import { StateContext } from "../../context/stateContext"

function TaskFooter() {

  const { state, setState, setFilter, darkMode } = useContext(StateContext)

  const taskLeft = state.filter(res => res.isComplete !== true).length

  const clearTaskCompleted = () => {
    let taskCompleted = state.filter(res => (
      res.isComplete !== true
    ))
    setState(taskCompleted)
  }

  const handleFilter = event => {
    setFilter(event.target.value)
  }

  return (
    <div className={`taskFooter  ${darkMode ? '' : 'taskFooterLight'}`}>
      <p>{taskLeft} items left</p>
      <div className={`filters  ${darkMode ? '' : 'filterLight'}`}>
        <label>
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
      <p className={`taskFooter__clear ${darkMode ? '' : 'taskFooter__clearLight'} `} onClick={clearTaskCompleted} >Clear Completed</p>
    </div>
  )
}

export default TaskFooter