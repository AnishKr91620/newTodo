import './App.css'
import CompletedTodos from './components/CompletedTodos'
import Field from './components/Field'
import Todos from './components/Todos'
import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
      <Field />
      <Todos />
      <CompletedTodos />
      
    </>
  )
}

export default App