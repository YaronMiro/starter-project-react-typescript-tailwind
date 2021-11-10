import React, { useState, useRef } from 'react'
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
    const [userAge, setUserAge] = useState<string>('')

    const inputUserName = useRef<HTMLInputElement>(null)
    const inputUserAge = useRef<HTMLInputElement>(null)

    const onUserNameChange = (name: string) => {
        setUserName(name.trim())
    }

    const onUserAgeChange = (age: string) => {
        setUserAge(age)
    }

    const getFormErrors = () => {
        const errors = []
        // debugger
        if (!!userName === false || !!userAge === false) {
            errors.push('Please Fill all fields')
        }

        if (+userAge < 1) {
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
        // Reset input fields, by using ref instead of resting the state
        console.log('Before', inputUserName.current!.value)
        console.log('Before', inputUserAge.current!.value)

        inputUserName.current!.value = ''
        inputUserAge.current!.value = ''
        console.log('after', inputUserName.current!.value)
        console.log('after', inputUserAge.current!.value)
    }

    return (
        <form onSubmit={onSubmitHandler} className="main-form">
            <InputField
                ref={inputUserName}
                type="text"
                placeholder="Add user name"
                label="Username"
                id="user-name"
                onChange={onUserNameChange}
                // value={userName}
            />
            <InputField
                ref={inputUserAge}
                type="number"
                placeholder="Add user age"
                label="Age (Years)"
                id="user-age"
                onChange={onUserAgeChange}
                // value={userAge}
            />
            <Button text="Add User" type="submit" />
        </form>
    )
}

export default AddUser
