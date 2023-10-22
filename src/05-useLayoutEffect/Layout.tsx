import { useLayoutEffect, useRef } from "react"
import Button from "../components/Button"
import Card from "../components/Card"
import Subtitle from "../components/Subtitle"
import UseCounter from "../hooks/useCounter"
import useFetch from "../hooks/useFetch"

export default function Layout() {
  const { state, handleDecrement, handleIncrement } = UseCounter(1,1)
  const {data, loading } = useFetch<any>(`https://fakestoreapi.com/products/${state}`)

  const pRef = useRef<HTMLParagraphElement | null>(null)
  useLayoutEffect(() => {
    console.log(pRef.current?.getBoundingClientRect())
  }, [data])
  
  return (
    <Card>
      <Subtitle>Use fetch component</Subtitle>
      <hr className="my-3" />
      <div className="my-4">
      {
        loading
          ? <p className="p-2 bg-sky-800 text-white rounded-md">Loading...</p>
          : (
            <article>
              <h3 ref={pRef} className="inline-block">{data?.title}</h3>
            </article>
          )
      }
      </div>
      <div className="flex flex-row gap-2">
        <Button onClick={handleDecrement} disabled={(state === 1 || loading) ? true : false} >Prev Product</Button>
        <Button onClick={handleIncrement} disabled={loading} >Next Product</Button>
      </div>
    </Card>
  )
}