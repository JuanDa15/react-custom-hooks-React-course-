import { ChangeEventHandler, useState } from "react"

export default function useForm<T>(initialState: T) {
  const [formState, setFormState] = useState(initialState)

  const onInputChange: ChangeEventHandler = (e) => {
    const { target } = e;
    const { value } = target as HTMLInputElement;
    const { name = '' } = (target as HTMLInputElement).dataset
    
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onReset = () => {
    setFormState(initialState)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onReset
  }
}