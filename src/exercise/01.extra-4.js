// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {

  const countReducer = (state, action) => {
    console.log("action ", action)
    let newState
    switch (action.type) {
      case 'INCREMENT':
        newState = {
          ...state,
          count: state.count + action.step
        }
        break;
    
      default:
        newState = { ...state }
        break;
    }
    console.log("state ", state)
    console.log("new state ", newState)
    return newState;
  }

  const [state, dispatch] = React.useReducer(countReducer, { 
    count: initialCount,
  })

  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
