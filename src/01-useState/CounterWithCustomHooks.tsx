import Button from "../components/Button"
import Card from "../components/Card"
import Subtitle from "../components/Subtitle"
import UseCounter from "../hooks/useCounter"

export default function CounterWithCustomHook() {
  const { state, handleDecrement, handleIncrement, handleReset } = UseCounter(0, 1)
  return (
    <Card>
      <Subtitle>Counter with custom hook: {state}</Subtitle>
      <hr className="my-3"/>
      <div className="flex flex-row gap-3">
        <Button onClick={handleIncrement} >+ 1</Button>
        <Button onClick={handleReset} >Reset</Button>
        <Button onClick={handleDecrement} >- 1</Button>
      </div>
    </Card>
  )
}