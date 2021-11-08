import React, { useState } from 'react'
import AddUser from '@components/Users/AddUser'
import UsersList from '@components/Users/UsersList'
import Card from '@components/UI/Card'
import ErrorModal from '@components/UI/ErrorModal'
import User from '@models/User'
import UserFormError from '@models/UserFormError'

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([])

    const [formError, setFormError] = useState<UserFormError | null>(null)

    const AddUserHandler = (user: User) => {
        setUsers((previousUsers) => [...previousUsers, user])
    }

    const ErrorHandler = (error: UserFormError) => {
        setFormError(error)
    }

    const closeErrorModalHandler = () => setFormError(null)

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
                {users.length && (
                    <Card>
                        <UsersList users={users} />
                    </Card>
                )}
                {formError && (
                    <ErrorModal
                        error={formError}
                        onConfirm={closeErrorModalHandler}
                    />
                )}
            </main>
        </div>
    )
}

export default App
