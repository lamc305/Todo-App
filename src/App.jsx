import Background from "./components/Background"
import Form from "./components/Form"
import Header from "./components/Header"
import ListOfTasks from "./components/ListOfTask"
import { StateContextProvider } from "./context/stateContext"

function App() {


  return (
    <div className="App">
      <StateContextProvider>
        <Background />
        <Header />
        <Form />
        <ListOfTasks />
      </StateContextProvider>
    </div>
  )
}

export default App
