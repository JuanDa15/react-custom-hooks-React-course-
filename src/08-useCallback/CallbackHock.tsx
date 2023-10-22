import { useCallback, useState } from "react";
import Card from "../components/Card";
import Subtitle from "../components/Subtitle";
import ShowIncrement from "./ShowIncrement";

export default function CallbackHook() {
  const [state, setState ] = useState(0)

  const memoFn = useCallback(() => {
    setState(state => state + 1)
  }, [])

  return (
    <Card>
      <Subtitle>useCallback: {state}</Subtitle>
      <hr  className="my-3"/>
      <ShowIncrement increment={memoFn} />
    </Card>
  )
}