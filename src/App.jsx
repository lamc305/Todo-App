import Attribution from "./components/Attribution"
import Background from "./components/Background"
import ContainerTasks from "./components/ContainerTasks"
import Form from "./components/Form"
import Header from "./components/Header"
import { StateContextProvider } from "./context/stateContext"

function App() {


  return (
    <div className="App">
      <StateContextProvider>
        <Background />
        <Header />
        <Form />
        <ContainerTasks />
        <Attribution />
      </StateContextProvider>
    </div>
  )
}

export default App
