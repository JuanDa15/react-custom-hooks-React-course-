import { useState } from 'react'
import Card from '../components/Card'
import Subtitle from '../components/Subtitle'
import Button from '../components/Button'

export default function CounterApp () {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })

  const { counter1, counter2, counter3 } = state

  const handleClick = () => {
    setState((prev) => ({
      ...prev,
      counter1: prev.counter1++
    }))
  }

  return (
    <Card>
      <Subtitle>Counter 1: {counter1}</Subtitle>
      <Subtitle>Counter 2: {counter2}</Subtitle>
      <Subtitle>Counter 3: {counter3}</Subtitle>
      <hr className="my-3" />

      <Button onClick={handleClick} >+ 1</Button>
    </Card>
  )
}