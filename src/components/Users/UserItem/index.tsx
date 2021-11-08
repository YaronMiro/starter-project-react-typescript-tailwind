import React from 'react'
import User from '@models/User'

type UserItemProps = {
    user: User
}

const UserItem: React.FC<UserItemProps> = (props) => {
    const {
        user: { age, id, fullName },
    } = props
    return <div key={id}>{`${fullName} and Age is ${age}`}</div>
}

export default UserItem
