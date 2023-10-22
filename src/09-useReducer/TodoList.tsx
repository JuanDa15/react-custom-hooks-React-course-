import { FormEventHandler,  useRef } from "react"
import Button from "../components/Button";
import Card from "../components/Card";
import Subtitle from "../components/Subtitle";
import Input from "../components/Input";
import useForm from "../hooks/useForm";
import useTodo from "../hooks/useTodos";


export default function TodoList() {
  const { todos, handleAddTodo, handleDeleteTodo } = useTodo()
  const inputRef = useRef<HTMLInputElement>(null)
  const { text, onInputChange, onReset } = useForm({
    text: ''
  })

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault()
    if (!text) return;
    handleAddTodo(text)
    onReset();
    inputRef.current!.value = '';
    inputRef.current?.focus()
  }

  return (
    <Card>
      <Subtitle>Todo List</Subtitle>
      <hr className="my-3" />
      <form 
        className="my-3 flex flex-row gap-1 items-end"
        onSubmit={submitHandler}
        >
        <Input 
          reference={inputRef}
          className="w-full"
          placeholder="Write your task"
          type="search"
          label="Task*"
          data-name='text'
          onChange={onInputChange}
        />
        <Button 
          className="w-[150px]"
          type="submit"
        >
          Add TODO
        </Button>
      </form>
      <ul className="flex flex-col gap-4">
        {
          todos?.map((item) => (
            <li className="flex flex-row gap-1 items-center border-y-2 py-1" key={item.id}>
              <p className="w-full">{item.text}</p>
              <Button  
                className="w-[150px]"
                onClick={() => handleDeleteTodo(item.id)}>
                Delete TODO
              </Button>
            </li>
          ))
        }
      </ul>
    </Card>
  )
}