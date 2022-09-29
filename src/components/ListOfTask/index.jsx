import { useContext, useState } from 'react'
import { StateContext } from '../../context/stateContext'
import Task from '../Task'
import './stylesListOfTask.css'

function ListOfTasks() {

  const { state, setState } = useContext(StateContext)
  const [filter, setFilter] = useState([...state])
  const taskLeft = state.filter(res => res.isComplete !== true).length
  const active = state.filter(res => res.isComplete === false)
  const completed = state.filter(res => res.isComplete === true)

  const clearTaskCompleted = () => {
    let taskCompleted = state.filter(res => (
      res.isComplete !== true
    ))
    setState(taskCompleted)
  }

  const handleFilter = event => {
    console.log(event.target.value)
  }

  return (
    <>
      <section className="listOfTasks__container">
        {state.length === 0 ? <div className='listOfTask__withoutTask'>There is not tasks</div> :
          state.map(({ task, isComplete, id }) => (
            <Task
              id={id}
              isComplete={isComplete}
              key={id}
              task={task}
            />
          ))
        }
        <div className='taskFooter'>
          <p>{taskLeft} items left</p>
          <div className='filters'>
            <label>
              <input type="radio" name="filter" id="all" />
              <span>All</span>
            </label>
            <label>
              <input type="radio" name="filter" id="active" />
              <span>Active</span>
            </label>
            <label>
              <input type="radio" name="filter" id="completed" />
              <span>Completed</span>
            </label>
          </div>
          <p onClick={clearTaskCompleted} >Clear Completed</p>
        </div>
      </section>
      <div className='actions'>
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
    </>
  )
}

export default ListOfTasks