import './App.css'
import { useReducer } from 'react'

import Viewer from './components/Viewer'
import Controller from './components/Controller'

const countReducer = (count, action) => {
  switch(action.type) {
    case "DECREASE" : { return count + action.value };
    case "INCREASE" : { return count + action.value };
    default : return count;
  }
}

function App() {
  const [count, dispatch] = useReducer(countReducer, 0);
  return (
    <>
    <div className='App'>
      <h1>useReducer 연습</h1>
      <Viewer count={count}/>
      <Controller dispatch={dispatch}/>
    </div>
    </>
  )
}

export default App
