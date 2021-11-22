import { render, screen } from '@testing-library/react'
import Button from '.'

describe('My button', () => {
    it('outputs the correct text value from props', () => {
        render(<Button type="submit" text="My button" />)
        const buttonElement = screen.getByText(/My button/i)

        expect(buttonElement).toBeInTheDocument()
    })

    it('outputs the correct type attribute value from props', () => {
        const buttonType = 'reset'
        render(<Button type={buttonType} text="My button" />)
        const buttonElement = screen.getByText(/My button/i)
        expect(buttonElement.getAttribute('type')!).toEqual(buttonType)
    })
})
