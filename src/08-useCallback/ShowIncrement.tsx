import Button from "../components/Button"

interface Props {
  increment: () => void
}

export default function ShowIncrement({ increment }: Props) {
  console.log('me estoy generando xd')
  return (
    <Button onClick={() => increment()}>
      +1
    </Button>
  )
}