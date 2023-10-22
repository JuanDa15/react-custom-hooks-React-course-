import { Action, Todo, TodoReducer, actionTypes } from "../../09-useReducer/TodoReducer"

describe('Test Reducer', () => {
  const initialState: Todo[] = [];

  test('Should return the initial state', () => {
    const newState = TodoReducer(initialState, {} as Action);
    expect(newState).toBe(initialState);
  })
  test('Should add a new todo', () => {
    const action: Action = {
      type: actionTypes.add,
      payload: {
        id: crypto.randomUUID(),
        text: 'New Todo'
      }
    };

    const newState = TodoReducer(initialState, action)
    expect(newState.length).toBe(1)
    expect(newState[0]).toStrictEqual(action.payload)
  })
  test('Should delete a todo', () => {
    const id = crypto.randomUUID()
    initialState.push({ id: crypto.randomUUID(), text: 'New Todo1'})
    initialState.push({ id: id, text: 'New Todo2'})

    const action: Action = {
      type: actionTypes.delete,
      payload: id
    };
    expect(initialState.length).toBe(2)
    const newState = TodoReducer(initialState, action)
    expect(newState.length).toBe(1)    
  })
})