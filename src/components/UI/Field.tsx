import React from 'react'

interface FieldDynamicAttributes {
    placeholder?: string
    defaultValue?: string
}

interface FieldProps extends FieldDynamicAttributes {
    type: 'text' | 'number'
    id: string
    name?: string
    onChange?: (value: string) => void
}

const Field = React.forwardRef<HTMLInputElement, FieldProps>((props, ref) => {
    const {
        type,
        id,
        name,
        placeholder,
        defaultValue,
        onChange: onChangeCallback = null,
    } = props

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        if (!onChangeCallback || typeof onChangeCallback !== 'function') {
            return
        }

        const newInputValue = event.currentTarget.value
        onChangeCallback(newInputValue)
    }

    const dynamicAttributes: FieldDynamicAttributes = {}

    if (placeholder) {
        dynamicAttributes.placeholder = placeholder
    }

    if (defaultValue) {
        dynamicAttributes.defaultValue = defaultValue
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
