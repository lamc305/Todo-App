import { useContext, useEffect } from 'react'
import { StateContext } from '../../context/stateContext'
import './formStyles.css'
function Form() {

  const { state, setState } = useContext(StateContext)

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(state))
  }, [state])

  const handleSubmit = (event) => {
    event.preventDefault()
    setState(
      [...state,
      {
        task: event.target.todo.value,
        isComplete: false,
        id: Date.now()
      }])
    event.target.todo.value = ''
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className='form__circle'></div>
      <input type="text" name="todo" id="todo" placeholder="Create a new todo..." required />
    </form>
  )
}

export default Form