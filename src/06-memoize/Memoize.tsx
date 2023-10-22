import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Subtitle from "../components/Subtitle";
import UseCounter from "../hooks/useCounter";
import Small from "./Small";

export default function Memoize() {
  const { state, handleIncrement } = UseCounter(0, 1)
  const [ show, setShow ] = useState(false)
  return (
    <Card>
      <Subtitle>React.memo: <Small>{state}</Small></Subtitle>
      <hr className="my-3" />
      <div className="flex flex-row gap-3">
        <Button onClick={handleIncrement}>+ 1</Button>
        <Button onClick={() => setShow(!show)}>Show / Hide: {JSON.stringify(show)}</Button>
      </div>
    </Card>
  )
}