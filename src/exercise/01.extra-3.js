// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {

  const countReducer = (state, action) => {
    console.log("state ", state)
    console.log("new state ", action)
    return ({
      ...state,
      ...((typeof newState === 'function' && action instanceof Function) ? action(state) : action)
    })
  }

  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state
  const increment = () => 
    setState(currentState => ({count: currentState.count + step}))
  // const increment = () => setState({count: state.count + step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
