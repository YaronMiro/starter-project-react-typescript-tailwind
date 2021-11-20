import React from 'react'

type FieldProps = {
    type: 'text' | 'number'
    id: string
    name?: string
    disabled?: boolean
    placeholder?: string
    onChange: (value: string) => void
}

type DynamicInputAttributes = { placeholder?: string }

const Field = React.forwardRef<HTMLInputElement, FieldProps>((props, ref) => {
    const { type, id, name, placeholder, onChange: onChangeCallback } = props

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const newInputValue = event.currentTarget.value
        onChangeCallback(newInputValue)
    }

    const dynamicAttributes: DynamicInputAttributes = {}

    if (placeholder) {
        dynamicAttributes.placeholder = placeholder
    }

    return (
        <input
            {...dynamicAttributes}
            ref={ref}
            className="input-control"
            type={type}
            id={id}
            name={name ?? id}
            onChange={onChange}
        />
    )
})

export default Field
