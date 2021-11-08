import React, { useState } from 'react'

type InputFieldProps = {
    type: 'text' | 'number'
    id: string
    label: string
    name?: string
    disabled?: boolean
    placeholder?: string
    value: string | number
    onChange: (value: string) => void
}

const TextField: React.FC<InputFieldProps> = (props) => {
    const {
        type,
        id,
        label,
        name,
        placeholder,
        value,
        onChange: onChangeCallback,
    } = props

    const [inputValue, setInputValue] = useState<string | number>(value)

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const newInputValue = event.currentTarget.value
        setInputValue(newInputValue)
        onChangeCallback(newInputValue)
    }

    const dynamicAttributes: { placeholder?: string; value?: string } = {}

    if (placeholder) {
        dynamicAttributes.placeholder = placeholder
    }

    return (
        <div className="form-group">
            <label htmlFor={id} className="label-control">
                {label}
            </label>
            <input
                {...dynamicAttributes}
                value={inputValue}
                className="input-control"
                type={type}
                id={id}
                name={name ?? id}
                onChange={onChange}
            />
        </div>
    )
}

export default TextField
