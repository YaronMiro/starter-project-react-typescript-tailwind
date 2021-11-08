import React from 'react'

type ModalProps = {
    title: string
    description: string
}

const Modal: React.FC<ModalProps> = (props) => {
    const { title, description } = props

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Modal
