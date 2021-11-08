import React, { useState } from 'react'
import AddUser from '@components/Users/AddUser'
import Users from '@components/Users/Users'
import User from '@models/User'

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([])

    const AddUserHandler = (user: User) => {
        console.log('AddUserHandler', user)
        setUsers((previousUsers) => previousUsers.concat([user]))
    }

    return (
        <div className="App">
            <header className="App-header"></header>
            <main>
                <section>
                    <AddUser onAddUser={AddUserHandler} />
                </section>
                <section>
                    <Users users={users} />
                </section>
            </main>
        </div>
    )
}

export default App
