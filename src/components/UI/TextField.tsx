import React, { useState } from 'react'

type TextFieldProps = {
    id: string
    label: string
    name?: string
    onChange: (value: string) => void
}

const TextField: React.FC<TextFieldProps> = (props) => {
    const [value, setValue] = useState<string>('')

    const { id, label, name, onChange: onChangeCallback } = props

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value
        setValue(newValue)
        onChangeCallback(newValue)
    }

    return (
        <div className="form-group">
            <label htmlFor={id} className="label-control">
                {label}{' '}
            </label>
            <input
                className="input-control"
                type="text"
                id={id}
                name={name ?? id}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default TextField
