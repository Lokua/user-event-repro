import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('jest fake timers issue', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('should pass', () => {
    expect(true).toBe(true)
  })

  it('should call handler when button is clicked', async () => {
    const fn = jest.fn()
    const Foo = () => <button onClick={fn}>Hello</button>
    render(<Foo />)
    await userEvent.click(screen.getByText('Hello'))
    expect(fn).toHaveBeenCalledTimes(1)
  })
})
