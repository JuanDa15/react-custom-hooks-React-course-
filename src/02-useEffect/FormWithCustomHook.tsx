import { useEffect } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Subtitle from "../components/Subtitle";
import useForm from "../hooks/useForm";
import Button from "../components/Button";

interface FormType {
  name: string;
  email: string;
  password: string;
}
export default function FormWithCustomHook() {
  const { formState, onInputChange, name, email, password, onReset } = useForm<FormType>({
    name: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    console.log(formState)
  }, [formState])

  return (
    <Card>
      <Subtitle>Form With Custom hook</Subtitle>
      <hr className="my-3" />
      <form>
        <Input 
          label="Name"
          type="text"
          name="name"
          placeholder="Joe Doe"
          data-name='name'
          value={name}
          onChange={onInputChange}
        />
        <Input 
          className="mt-2"
          label="Email"
          type="email"
          name="email"
          placeholder="joe@doe.com"
          data-name='email'
          value={email}
          onChange={onInputChange}
        />
        <Input
          className="mt-2"
          label="Password"
          type="password"
          name="password"
          placeholder="********"
          data-name='password'
          value={password}
          onChange={onInputChange}
          autoComplete='off'
        />
        <Button
          onClick={onReset}
        >
          Reset
        </Button>
      </form>
    </Card>
  )
}