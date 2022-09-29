import './stylesTask.css'
import { useContext } from 'react'
import { StateContext } from '../../context/stateContext'
import iconCross from '../../assets/icon-cross.svg'
import iconCheck from '../../assets/icon-check.svg'

function Task({ task, id, isComplete }) {

  const { state, setState } = useContext(StateContext)

  const deleteTask = (id) => {
    let taskToDelete = state.filter(res => res.id !== id)
    setState(taskToDelete)
  }

  const handleComplete = (id) => {
    let taskComplete = state.find(res => res.id === id)
    setState(state.map(res => res.id === taskComplete.id ?
      { ...res, isComplete: !res.isComplete } : res
    ))
  }

  return (
    <div className="task__container">
      <div className='task__check'>
        <div className={`${isComplete && 'task__checked'}`} onClick={() => handleComplete(id)}>
          {isComplete && <img src={iconCheck} alt='checked' />}
        </div>
      </div>
      <div className={`task__text ${isComplete && 'task__textCheck'}`}>
        <p onClick={() => handleComplete(id)}>{task}</p>
      </div>
      <div onClick={() => deleteTask(id)} className='task__delete'>
        <img src={iconCross} alt='icon-delete' />
      </div>
    </div>
  )
}
export default Task