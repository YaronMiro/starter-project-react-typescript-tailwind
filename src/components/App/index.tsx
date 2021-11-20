import React from 'react'
import reactLogo from './images/react-logo.svg'
import tailwindLogo from './images/tailwind-logo.svg'
import './styles/index.scss'

type AppProps = {
    name: string
}

const App: React.FC<AppProps> = (props) => {
    const { name } = props

    return (
        <div className="App">
            <header className="App-header">
                <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                    {name}
                </h2>
                <img src={reactLogo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/components/App/index.tsx</code> and save to
                    reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
