import { useState, ChangeEventHandler, useEffect } from "react"
import Card from "../components/Card"
import Input from "../components/Input"
import Subtitle from "../components/Subtitle"

export default function SimpleForm() {
  const [showEmailError, setShowEmailError] = useState(false)
  const [state, setState] = useState({
    name: '',
    email: ''
  })
  const { name, email } = state

  useEffect(() => {
    if (email === 'jdoo1115@gmail.com') {
      setShowEmailError(true);
      return;
    }
    setShowEmailError(false);
  }, [email])


  const handleChange: ChangeEventHandler = (e) => {
    const { target } = e 
    const { value } = target as HTMLInputElement;
    const { name = '' } = (target as HTMLInputElement).dataset
    setState({
      ...state,
      [name]: value
    })
  }

  return (
    <Card>
      <Subtitle>Simple Form</Subtitle>
      <hr className="my-3" />
      <form>
        <Input 
          label="Name"
          type="text"
          name="name"
          placeholder="Joe Doe"
          value={name}
          data-name='name'
          onChange={handleChange}
        />
        <Input 
          className="mt-2"
          label="Email"
          type="email"
          name="email"
          placeholder="joe@doe.com"
          value={email}
          data-name='email'
          onChange={handleChange}
        >
        {
          showEmailError && <p className="p-1 bg-red-900 rounded-md">El correo ya existe</p>
        }
        </Input>
      </form>
    </Card>
  )
}