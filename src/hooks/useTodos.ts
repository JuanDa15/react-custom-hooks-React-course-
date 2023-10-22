import { useReducer } from "react";
import { Todo, TodoReducer, actionTypes } from "../09-useReducer/TodoReducer";

export default function useTodo() {
  const [state, dispatch] = useReducer(TodoReducer, [])

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text
    }
    dispatch({type: actionTypes.add, payload: newTodo});
  }

  const handleDeleteTodo = (id: string) => {
    dispatch({type: actionTypes.delete, payload: id })
  }

  return {
    todos: state,
    handleAddTodo,
    handleDeleteTodo
  }
}