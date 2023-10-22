
export interface Action {
  type: string;
  payload: any;
}

export interface Todo {
  id: string;
  text: string;
}

export const actionTypes = {
  add: 'ADD',
  delete: 'DELETE'
}

const REDUCER_ACTIONS: Record<string, any> = {
  [actionTypes.add]: (state: Todo[], payload: any) => {
    return [...state, payload]
  },
  [actionTypes.delete]: (state: Todo[], payload: any) => {
    const stateCopy = [...state];
    const exist = stateCopy.findIndex(item => item.id === payload)

    if (exist !== -1 ) {
      stateCopy.splice(exist, 1)
    } 
    return stateCopy;
  }
}

export const TodoReducer = (state: Todo[] = [], action: Action): Todo[] => {
  return (action.type in REDUCER_ACTIONS) 
    ? REDUCER_ACTIONS[action.type](state, action.payload) 
    : state
}
