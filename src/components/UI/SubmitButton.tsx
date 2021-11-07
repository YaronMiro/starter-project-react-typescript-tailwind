import React from 'react'

type SubmitButtonProps = {
    text: string
    disabled?: boolean
}

const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
    const { text, disabled } = props

    return (
        <div className="form-group">
            <button disabled={disabled} type="submit">
                {text}
            </button>
        </div>
    )
}

export default SubmitButton
