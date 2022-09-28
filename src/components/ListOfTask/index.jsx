import { useContext } from 'react'
import { StateContext } from '../../context/stateContext'
import Task from '../Task'
import './stylesListOfTask.css'

function ListOfTasks() {

  const { state, setState } = useContext(StateContext)

  const taskLeft = state.filter(res => res.isComplete !== true).length

  const clearTaskCompleted = () => {
    let taskCompleted = state.filter(res => (
      res.isComplete !== true
    ))
    setState(taskCompleted)
  }


  return (
    <>
      <section className="listOfTasks__container">
        {state.length === 0 ? <div className='listOfTask__withoutTask'>There is not tasks</div> :
          state.map(({ task, isComplete, id },) => (
            <Task
              task={task}
              key={id}
              id={id}
              isComplete={isComplete}
            />
          ))}
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
        <p className='actions__text'>All</p>
        <p className='actions__text'>Active</p>
        <p className='actions__text'>Completed</p>
      </div>
    </>
  )
}

export default ListOfTasks