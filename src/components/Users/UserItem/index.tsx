import React from 'react'
import User from '@models/User'

type UserItemProps = {
    user: User
}

const UserItem: React.FC<UserItemProps> = (props) => {

    const {
        user: { age, fullName },
    } = props
    return <div>{`${fullName} and Age is ${age}`}</div>
}

export default UserItem
