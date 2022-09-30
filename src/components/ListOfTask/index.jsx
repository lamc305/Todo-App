import { useContext } from "react"
import { StateContext } from "../../context/stateContext"
import Task from "../Task"
import { Reorder } from 'framer-motion'
import './stylesListOfTask.css'
function ListOfTask({ estado, name = '' }) {

  const { darkMode, setState } = useContext(StateContext)

  return (
    <Reorder.Group axis="y" values={estado} onReorder={setState} className='listContainer'>
      {
        estado.length > 0 ?
          estado.map((items) => (
            <Task
              items={items}
              key={items.id}
            />
          ))
          : <><div className={`listOfTask__withoutTask ${darkMode ? '' : 'listOfTask__withoutTaskLight'}`}>There is not tasks {name}</div></>}
    </Reorder.Group>
  )
}

export default ListOfTask