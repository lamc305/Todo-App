import { useContext } from 'react'
import { StateContext } from '../../context/stateContext'
import TaskFooterResponsive from '../TaskFooterResponsive'
import ListOfTask from '../ListOfTask'
import TaskFooter from '../TaskFooter'
import './stylesContainer.css'

function ContainerTasks() {


  const { state, filter, darkMode } = useContext(StateContext)
  const active = state.filter(res => res.isComplete === false)
  const completed = state.filter(res => res.isComplete === true)
  return (
    <>
      <section className={`listOfTasks__container ${darkMode ? '' : 'listOfTasks__containerLight'}`}>
        {state.length === 0 ? <div className={`listOfTask__withoutTask ${darkMode ? '' : 'listOfTask__withoutTaskLight'}`}>There is not tasks</div> :
          <>
            {filter === 'all' && <ListOfTask estado={state} />}
            {filter === 'active' && <ListOfTask estado={active} name='active' />}
            {filter === 'completed' && <ListOfTask estado={completed} name='completed' />}
          </>
        }
        <TaskFooter />
      </section>
      <TaskFooterResponsive />
      <p className={`footerText ${darkMode ? '': 'footerTextLight'}`}>Drag and Drop to reorder list</p>
    </>
  )
}

export default ContainerTasks