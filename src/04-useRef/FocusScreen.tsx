import { useRef } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import Subtitle from "../components/Subtitle";

export default function FocusScreen() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleClick = () => {
    inputRef.current?.select();
  }
  return (
    <Card>
      <Subtitle>Use ref</Subtitle>
      <hr className="my-3" />
      <div className="flex flex-row gap-4">
        <Input reference={inputRef} />
        <Button onClick={handleClick}>Set focus</Button>
      </div>
    </Card>
  )
}