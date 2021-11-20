import React from 'react'

type ButtonProps = {
    type: 'submit' | 'reset' | 'button'
    text: string
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
    const { text, disabled, type } = props

    return (
        <button disabled={disabled} type={type}>
            {text}
        </button>
    )
}

export default Button
