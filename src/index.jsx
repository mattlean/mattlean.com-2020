import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

const root = document.createElement('div')
root.setAttribute('id', 'root')
document.body.appendChild(root)

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

ReactDOM.render(
  <>
    <h1>Lorem Ipsum</h1>
    <Counter />
  </>,
  root
)

console.log('Hello, world!')
