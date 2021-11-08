import React, { useState } from 'react'
import InputField from '@components/UI/InputField'
import Button from '@components/UI/Button'
import User from '@models/User'
import UserFormError from '@models/UserFormError'

type AddUserProps = {
    onAddUser: (user: User) => void
    onError: (user: UserFormError) => void
}

const AddUser: React.FC<AddUserProps> = (props) => {
    const { onAddUser, onError } = props

    const [userName, setUserName] = useState<string>('')
    const [userAge, setUserAge] = useState<number>(0)

    const onUserNameChange = (name: string) => {
        setUserName(name.trim())
    }

    const onUserAgeChange = (age: string) => {
        setUserAge(+age)
    }

    const getFormErrors = () => {
        const errors = []

        if (!!userName === false || userAge === 0) {
            errors.push('Please Fill all fields')
        }

        if (userAge < 1) {
            errors.push('Age must be greater than zero')
        }

        return errors
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const errors = getFormErrors()

        if (errors.length) {
            onError(new UserFormError('Invalid input', errors[0]))
            return
        }

        const user = new User(userName, userAge)
        onAddUser(user)
        //Reset input fields
        setUserName('')
        setUserAge(0)
    }

    return (
        <form onSubmit={onSubmitHandler} className="main-form">
            <InputField
                type="text"
                placeholder="Add user name"
                label="Username"
                id="user-name"
                onChange={onUserNameChange}
                value={userName}
            />
            <InputField
                type="number"
                placeholder="Add user age"
                label="Age (Years)"
                id="user-age"
                onChange={onUserAgeChange}
                value={userAge === 0 ? '' : userAge}
            />
            <Button text="Add User" type="submit" />
        </form>
    )
}

export default AddUser
