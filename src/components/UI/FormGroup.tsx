import React from 'react'

type FormGroupProps = {
    className?: string
}

const FormGroup: React.FC<FormGroupProps> = ({ className = '', children }) => {
    let classes = 'form-group'

    if (!!className.trim()) {
        classes += ` ${className}`
    }

    return <div className={classes}>{children}</div>
}

export default FormGroup
