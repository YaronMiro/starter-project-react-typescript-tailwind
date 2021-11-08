import React, { useState } from 'react'
import InputField from '@components/UI/InputField'
import SubmitButton from '@components/UI/SubmitButton'
import User from '@models/User'

type UserForm = {
    isValid: boolean
    fullName: string
    age: number
}

const AddUser: React.FC = () => {
    const initialFormData: UserForm = {
        isValid: false,
        fullName: '',
        age: 0,
    }

    // const updateFormData = (previousFormData) => {

    //     return {
    //         ...previousFormData,

    //     }

    // }

    const [formData, setFormData] = useState<UserForm>(initialFormData)

    const onUserNameChange = (fullName: string) => {
        setFormData((previousFormData) => {
            return {
                ...previousFormData,
                fullName: fullName.trim(),
            }
        })
    }

    const onUserAgeChange = (age: string) => {
        setFormData((previousFormData) => {
            return {
                ...previousFormData,
                age: +age,
            }
        })
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const { fullName, age } = formData

        if (fullName) {
        }

        const user = new User(fullName, age)
        console.log('from submitted', user)
    }

    console.log(formData)
    console.log(!formData.isValid)

    return (
        <form onSubmit={onSubmitHandler} className="main-form">
            <InputField
                type="text"
                label="Username"
                id="user-name"
                onChange={onUserNameChange}
            />
            <InputField
                type="number"
                label="Age (Years)"
                id="user-age"
                onChange={onUserAgeChange}
            />
            <SubmitButton text="Add User" />
        </form>
    )
}

export default AddUser
