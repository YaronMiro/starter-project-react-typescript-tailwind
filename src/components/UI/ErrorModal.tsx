import React, { useState } from 'react'

import Card from '@components/UI/Card'
import UserFormError from '@models/UserFormError'

type ModalProps = {
    error: UserFormError
    onConfirm: () => void
}

const ErrorModal: React.FC<ModalProps> = (props) => {
    const { error, onConfirm } = props

    return (
        <div onClick={onConfirm}>
            <Card>
                <h3>{error.title}</h3>
                <p>{error.description}</p>
                <button onClick={onConfirm}>Close</button>
            </Card>
        </div>
    )
}

export default ErrorModal
