import React, { useState } from 'react'
import AddUser from '@components/Users/AddUser'
import UsersList from '@components/Users/UsersList'
import Card from '@components/UI/Card'
import Modal from '@components/UI/Modal'
import User from '@models/User'
import UserFormError from '@models/UserFormError'

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([])

    const [formError, setFormError] = useState<UserFormError>(
        new UserFormError()
    )

    const AddUserHandler = (user: User) => {
        console.log('AddUserHandler', user)
        setUsers((previousUsers) => [...previousUsers, user])
    }

    const ErrorHandler = (error: UserFormError) => {
        console.log('ErrorHandler', error)
        setFormError(error)
    }

    return (
        <div className="App">
            <header className="App-header"></header>
            <main>
                <Card>
                    <AddUser
                        onAddUser={AddUserHandler}
                        onError={ErrorHandler}
                    />
                </Card>
                <Card>
                    <UsersList users={users} />
                </Card>
                <Modal title="Some Title" description="some description" />
            </main>
        </div>
    )
}

export default App
