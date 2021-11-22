import React from 'react'

type LabelProps = {
    text: string
    className?: string
    htmlFor: string
}

const Label: React.FC<LabelProps> = ({ text, htmlFor, className = '' }) => {
    let classes = 'label-control'

    if (!!className.trim()) {
        classes += ` ${className}`
    }

    return (
        <label htmlFor={htmlFor} className={classes}>
            {text}
        </label>
    )
}

export default Label
