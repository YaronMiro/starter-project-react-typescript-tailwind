import React from 'react'

type ButtonProps = {
    type: 'submit' | 'reset' | 'button'
    text: string
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
    const { text, disabled, type } = props

    return (
        <div className="form-group">
            <button disabled={disabled} type={type}>
                {text}
            </button>
        </div>
    )
}

export default Button
