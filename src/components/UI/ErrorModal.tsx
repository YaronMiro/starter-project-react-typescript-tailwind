import React from 'react'
import ReactDom from 'react-dom'

import Card from '@components/UI/Card'
import UserFormError from '../../models/UserFormError'


type BackdropProps = {
    onConfirm: () => void
}

type ModalProps = {
    error: UserFormError
    onConfirm: () => void
}

const Backdrop: React.FC<BackdropProps> = (props) => {
    const { onConfirm } = props
    return <div className="backdrop" onClick={onConfirm}></div>
}

const ModalOverlay: React.FC<ModalProps> = (props) => {
    const { error, onConfirm } = props

    return (
        <div className="modal">
            <Card>
                <h3>{error.title}</h3>
                <p>{error.description}</p>
                <button onClick={onConfirm}>Close</button>
            </Card>
        </div>
    )
}

const ErrorModal: React.FC<ModalProps> = (props) => {
    const { error, onConfirm } = props

    return (
        <>
            {ReactDom.createPortal(
                <Backdrop onConfirm={onConfirm} />,
                document.body // document.getElementById()
            )}
            {ReactDom.createPortal(
                <ModalOverlay onConfirm={onConfirm} error={error} />,
                document.body // document.getElementById()
            )}
        </>
    )
}

export default ErrorModal
