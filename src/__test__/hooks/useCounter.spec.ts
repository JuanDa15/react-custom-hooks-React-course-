import { renderHook } from "@testing-library/react"
import UseCounter from "../../hooks/useCounter"
import { act } from "react-dom/test-utils"

describe('Test in useCounter', () => {

  test('should return the default value', () => {
    const { result } = renderHook(() => UseCounter(0,1))
    const { state, handleIncrement, handleDecrement, handleReset } 
      = result.current;
    expect(state).toBe(0)
    expect(typeof handleIncrement).toBe('function')
    expect(typeof handleDecrement).toBe('function')
    expect(typeof handleReset).toBe('function')
  })

  test('should set initial value 100', () => {
    const { result } = renderHook(() => UseCounter(100,1))
    const { state } 
      = result.current;
    expect(state).toBe(100)
  })

  test('should increment the state by 1', () => {
    const { result } = renderHook(() => UseCounter(0,1))
    const { handleIncrement } 
      = result.current;
    act(() => {
      handleIncrement()
      handleIncrement()
      handleIncrement()
    })

    expect(result.current.state).toBe(3)
  })

  test('should decrement the state by 1', () => {
    const { result } = renderHook(() => UseCounter(5,1))
    const { handleDecrement, handleIncrement } 
      = result.current;

    act(() => {
      handleIncrement()
      handleIncrement()
      handleIncrement()
      handleIncrement()
      handleIncrement()
      handleIncrement()
      handleDecrement()
      handleDecrement()
      handleDecrement()
    })

    expect(result.current.state).toBe(8)
  })

  test('should reset the state to initial value', () => {
    const { result } = renderHook(() => UseCounter(0,1))
    const { handleDecrement, handleIncrement, handleReset } 
      = result.current;

    act(() => {
      handleIncrement()
      handleIncrement()
      handleIncrement()
      handleIncrement()
      handleIncrement()
      handleIncrement()
      handleDecrement()
      handleDecrement()
      handleDecrement()
      handleReset()
    })

    expect(result.current.state).toBe(0)
  })
})