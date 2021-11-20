import React, { useState, useRef } from 'react'
import Field from '@components/UI/Field'
import FormGroup from '@components/UI/FormGroup'
import Label from '@components/UI/Label'
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
        inputUserName.current!.value = ''
        inputUserAge.current!.value = ''
    }

    const userNameId = 'user-name'
    const userAgeId = 'user-name'

    return (
        <form onSubmit={onSubmitHandler} className="main-form">
            <FormGroup className="user-name-field">
                <Label htmlFor={userNameId} text="User Name:"></Label>
                <Field
                    ref={inputUserName}
                    type="text"
                    placeholder="Add user name"
                    id={userNameId}
                    onChange={onUserNameChange}
                />
            </FormGroup>

            <FormGroup className="user-age-field">
                <Label htmlFor={userAgeId} text="User Age:"></Label>
                <Field
                    ref={inputUserAge}
                    type="number"
                    placeholder="Add user age"
                    id={userAgeId}
                    onChange={onUserAgeChange}
                />
            </FormGroup>

            <FormGroup className="submit-button-field">
                <Button text="Add User" type="submit" />
            </FormGroup>
        </form>
    )
}

export default AddUser
