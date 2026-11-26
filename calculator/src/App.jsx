import { useState } from "react"
import './App.css'

function App() {

  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [result, setResult] = useState(null)

  function add() {
    setResult(Number(num1) + Number(num2))
  }

  function subtract() {
    setResult(Number(num1) - Number(num2))
  }

  function multiply() {
    setResult(Number(num1) * Number(num2))
  }

  function divide() {
    if (Number(num2) === 0) {
      setResult("Cannot divide by zero")
      return
    }
    setResult(Number(num1) / Number(num2))
  }

  return (
    <div className="calculator">

      <h1>React Calculator</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />

      <div className="buttons">
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={divide}>Divide</button>
      </div>

      {result !== null && (
        <h2 className="result">Result: {result}</h2>
      )}

    </div>
  )
}

export default App