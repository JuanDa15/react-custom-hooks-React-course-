import { useMemo, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Subtitle from "../components/Subtitle";
import UseCounter from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('ahi vamos')
  }

  return `${iterationNumber} iteraciones realizads`
}

export default function UseMemoComponent() {
  const { state, handleIncrement } = UseCounter(5000, 1)
  const [ show, setShow ] = useState(false)
  
  const memoizedValue = useMemo(() => heavyStuff(state), [state])
  return (
    <Card>
      <Subtitle>Use Memo: <small>{state}</small></Subtitle>
      <hr className="my-3" />
      <h4>{memoizedValue}</h4>
      <div className="flex flex-row gap-3">
        <Button onClick={handleIncrement}>+ 1</Button>
        <Button onClick={() => setShow(!show)}>Show / Hide: {JSON.stringify(show)}</Button>
      </div>
    </Card>
  )
}