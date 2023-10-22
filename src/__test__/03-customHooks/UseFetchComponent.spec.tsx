import { fireEvent, render, screen } from "@testing-library/react"
import UseFetchComponent from "../../03-customHooks/UseFetchComponent"
import useFetch from "../../hooks/useFetch"
import useCounter from "../../hooks/useCounter"

jest.mock('../../hooks/useFetch.ts')
jest.mock('../../hooks/useCounter.ts')

describe('test in useFetchComponent', () => {
  const mockIncrement = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should render the component', () => {
    (useCounter as any).mockReturnValue({
      state: 1,
      handleDecrement: () => {},
      handleIncrement: () => {}
    });
    (useFetch as any).mockReturnValue({
      data: [],
      isLoading: true,
      hasError: null
    })
    render(<UseFetchComponent />)
    expect(true).toBe(true)
  })
  test('Should render a product', () => {
    (useFetch as any).mockReturnValue({
      data: {
        title: 'Product 1',
      },
      isLoading: false,
      hasError: null
    })
    render(<UseFetchComponent />)
    expect(screen.getByText('Product 1')).toBeTruthy()
  })
  test('Should call the handle increment', () => {
    (useCounter as any).mockReturnValue({
      state: 1,
      handleDecrement: () => {},
      handleIncrement: mockIncrement
    });
    (useFetch as any).mockReturnValue({
      data: {
        title: 'Product 1',
      },
      isLoading: false,
      hasError: null
    })
    render(<UseFetchComponent />)
    const btn = screen.getByTestId('next-btn')
    fireEvent.click(btn)
    expect(mockIncrement).toHaveBeenCalled()
  })
})