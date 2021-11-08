import React, { useState } from 'react'
import InputField from '@components/UI/InputField'
import Button from '@components/UI/Button'
import User from '@models/User'

type AddUserProps = {
    onAddUser: (user: User) => void
}

const AddUser: React.FC<AddUserProps> = (props) => {
    const { onAddUser } = props

    const [userName, setUserName] = useState<string>('')
    const [userAge, setUserAge] = useState<number>(0)

    const onUserNameChange = (name: string) => {
        setUserName(name.trim())
    }

    const onUserAgeChange = (age: string) => {
        setUserAge(+age)
    }

    const onSubmitHandler = (
        event: React.FormEvent<HTMLFormElement>
    ): boolean => {
        event.preventDefault()

        if (userName === '' && userAge === 0) {
            console.log('[ERROR] Please Fill all fields')
            return false
        }

        if (userAge < 1) {
            console.log('[ERROR] Age must be greater than zero')
            return false
        }

        const user = new User(userName, userAge)
        onAddUser(user)
        return true
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
