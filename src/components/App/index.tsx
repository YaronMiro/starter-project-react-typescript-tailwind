import React from 'react'
import AddUser from '@components/Users/AddUser'

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Demo Project</h1>
            </header>
            <main>
                <AddUser />
            </main>
        </div>
    )
}

export default App
