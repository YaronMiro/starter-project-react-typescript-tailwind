import { render, screen } from '@testing-library/react'
import App from '@components/App'

test('renders learn react link', () => {
    render(<App name="Starter Project APP" />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})
