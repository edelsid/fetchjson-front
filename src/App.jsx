import './App.css'
import { Data } from './components/Data'
import { Error } from './components/Error'
import { Loading } from './components/Loading'

function App() {
  return (
    <div className='container'>
      <Data></Data>
      <Error></Error>
      <Loading></Loading>
    </div>
  )
}

export default App
