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

    const [formData, setFormData] = useState<FormData>(initialFormData)

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault()
        console.log('from submitted')
    }

    return (
        <form onSubmit={onSubmit} className="main-form">
            <TextField
                label="Username"
                id="user-name"
                onChange={(value) => console.log({ value })}
            />
            <TextField
                label="Age (Years)"
                id="user-age"
                onChange={(value) => console.log({ value })}
            />
            <SubmitButton text="Add User" />
        </form>
    )
}

export default AddUser
