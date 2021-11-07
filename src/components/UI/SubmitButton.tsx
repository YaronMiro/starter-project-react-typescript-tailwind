import React from 'react'

type SubmitButtonProps = {
    text: string
}

const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
    return (
        <div className="form-group">
            <button type="submit">{props.text}</button>
        </div>
    )
}

export default SubmitButton
