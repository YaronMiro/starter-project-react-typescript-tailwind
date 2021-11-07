import React, { useState } from 'react'
import TextField from '@components/UI/TextField'
import SubmitButton from '@components/UI/SubmitButton'

type FormData = {
    isValid: boolean
    fullName?: string
    age?: number
}

const AddUser: React.FC = () => {

    const initialFormData: FormData = {
        isValid: false,
    }

    // const updateFormData = (previousFormData) => {

    //     return {
    //         ...previousFormData,

    //     }

    // }

    const [formData, setFormData] = useState<FormData>(initialFormData)

    const onUserNameChange = (fullName: string) => {
        console.log('onUserNameChange', fullName)

        setFormData((previousFormData) => {
            return {
                ...previousFormData,
                fullName,
            }
        })
    }

    const onUserAgeChange = (age: string) => {
        console.log('onUserAgeChange', age)

        setFormData((previousFormData) => {
            return {
                ...previousFormData,
                age: +age,
            }
        })
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('from submitted')
    }

    console.log(formData)
    console.log(!formData.isValid)

    return (
        <form onSubmit={onSubmitHandler} className="main-form">
            <TextField
                label="Username"
                id="user-name"
                onChange={onUserNameChange}
            />
            <TextField
                label="Age (Years)"
                id="user-age"
                onChange={onUserAgeChange}
            />
            <SubmitButton text="Add User" disabled={!formData.isValid} />
        </form>
    )
}

export default AddUser
