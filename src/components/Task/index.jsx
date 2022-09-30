import './stylesTask.css'
import { useContext } from 'react'
import { StateContext } from '../../context/stateContext'
import { Reorder } from "framer-motion";
import iconCross from '../../assets/icon-cross.svg'
import iconCheck from '../../assets/icon-check.svg'

function Task({ items }) {
  const { task, id, isComplete } = items
  const { state, setState, darkMode } = useContext(StateContext)
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
    <Reorder.Item value={items} id={items} className={`task__container ${darkMode ? '' : 'taskContainerlight'} `}>
      <div className='task__check'>
        <div className={`circle ${darkMode ? '' : 'circleLight'} ${isComplete && 'task__checked'}`} onClick={() => handleComplete(id)}>
          {isComplete && <img src={iconCheck} alt='checked' />}
        </div>
      </div>
      <div
        className={`task__text ${darkMode ? '' : 'task__textLight'} 
      ${isComplete && `task__textCheck ${darkMode ? '' : 'task__textCheckLight'} `}`}
      >
        <p onClick={() => handleComplete(id)}>{task}</p>
      </div>
      <div onClick={() => deleteTask(id)} className='task__delete'>
        <img src={iconCross} alt='icon-delete' />
      </div>
    </Reorder.Item >
  )
  // <Reorder.Item value={item} id={item} style={{ boxShadow, y }}>
  //     <span>{item}</span>
  //   </Reorder.Item>
}
export default Task