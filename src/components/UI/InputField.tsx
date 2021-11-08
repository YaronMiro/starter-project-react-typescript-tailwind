import React, { useState } from 'react'

type InputFieldProps = {
    type: 'text' | 'number'
    id: string
    label: string
    name?: string
    disabled?: boolean
    onChange: (value: string) => void
}

const TextField: React.FC<InputFieldProps> = (props) => {
    const [value, setValue] = useState<string>('')

    const { type, id, label, name, onChange: onChangeCallback } = props

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value
        setValue(newValue)
        onChangeCallback(newValue)
    }

    return (
        <div className="form-group">
            <label htmlFor={id} className="label-control">
                {label}
            </label>
            <input
                className="input-control"
                type={type}
                id={id}
                name={name ?? id}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default TextField
