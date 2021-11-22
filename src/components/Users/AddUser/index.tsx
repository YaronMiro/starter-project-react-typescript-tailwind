import React, { useRef } from 'react'
import { Field, FormGroup, Label, Button } from '../../UI'
import User from '../../../models/User'
import UserFormError from '../../../models/UserFormError'

type AddUserProps = {
    onAddUser: (user: User) => void
    onError: (user: UserFormError) => void
}

const AddUser: React.FC<AddUserProps> = (props) => {
    const { onAddUser, onError } = props

    const inputUserName = useRef<HTMLInputElement>(null)
    const inputUserAge = useRef<HTMLInputElement>(null)

    const getFormErrors = () => {
        const errors = []

        const name = inputUserName.current!.value.trim()
        const age = inputUserAge.current!.value.trim()

        if (!!name === false || !!age === false) {
            errors.push('Please Fill all fields')
        }

        if (+age < 1) {
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

        const name = inputUserName.current!.value.trim()
        const age = inputUserAge.current!.value.trim()

        const user = new User(name, age)
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
                />
            </FormGroup>
            <FormGroup className="user-age-field">
                <Label htmlFor={userAgeId} text="User Age:"></Label>
                <Field
                    ref={inputUserAge}
                    type="number"
                    placeholder="Add user age"
                    id={userAgeId}
                />
            </FormGroup>
            <FormGroup className="submit-button-field">
                <Button text="Add User" type="submit" />
            </FormGroup>
        </form>
    )
}

export default AddUser
