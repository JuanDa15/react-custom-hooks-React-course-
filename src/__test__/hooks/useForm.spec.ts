import { renderHook } from "@testing-library/react"
import useForm from "../../hooks/useForm"
import { act } from "react-dom/test-utils"
import { ChangeEvent } from "react"

describe('Test for useForm', () => {
  const initialState = {
    name: 'Juan',
    email: 'Jdoo@cosa.co',
    phone: 3233443
  }

  test('Should return the initial value', () => {
    const { result } = renderHook(() => useForm(initialState))
    expect(result.current).toEqual({
      ...initialState,
      formState: initialState,
      onInputChange: expect.any(Function),
      onReset: expect.any(Function)
    })
  })

  test('Should change the value of the input', () => {
    const { result } = renderHook(() => useForm(initialState))
    const event = {
      target: {
        value: 'Juan Perez',
        dataset: {
          name: 'name'
        }
      },
    } as unknown as ChangeEvent
    act(() => {
      result.current.onInputChange(event)
    })
    expect(result.current.formState.name).toBe('Juan Perez')
    expect(result.current.name).toBe('Juan Perez')
  })

  test('should reset the form', () => {
    const { result } = renderHook(() => useForm(initialState))
    const event = {
      target: {
        value: 'Juan Perez',
        dataset: {
          name: 'name'
        }
      },
    } as unknown as ChangeEvent
    act(() => {
      result.current.onInputChange(event)
      result.current.onReset()
    })
    expect(result.current.formState.name).toBe('Juan')
    expect(result.current.name).toBe('Juan')
  })
})