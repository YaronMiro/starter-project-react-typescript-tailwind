import React, { useState } from 'react'
import AddUser from '@components/Users/AddUser'
import Users from '@components/Users/Users'
import Card from '@components/UI/Card'
import Modal from '@components/UI/Modal'
import User from '@models/User'
import UserFormError from '@models/User'

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([])

    const [formErrors, setFormErrors] = useState<UserFormError[]>([])

    const AddUserHandler = (user: User) => {
        console.log('AddUserHandler', user)
        setUsers((previousUsers) => previousUsers.concat([user]))
    }

    return (
        <div className="App">
            <header className="App-header"></header>
            <main>
                <Card>
                    <AddUser onAddUser={AddUserHandler} />
                </Card>
                <Card>
                    <Users users={users} />
                </Card>
                <Modal title="Some Title" description="some description" />
            </main>
        </div>
    )
}

export default App
