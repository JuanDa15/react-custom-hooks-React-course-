import { useState } from 'react'

export default function UseCounter(
  initialValue: number = 0, 
  changeRate: number = 1
) {
  const [state, setState] = useState(initialValue)

  const handleIncrement = () => {
    setState((curr) => curr + changeRate)
  }
  const handleDecrement = () => {
    setState((curr) => curr - changeRate)
  }
  const handleReset = () => {
    setState(initialValue)
  }

  return {
    state,
    handleIncrement,
    handleDecrement,
    handleReset
  }
}