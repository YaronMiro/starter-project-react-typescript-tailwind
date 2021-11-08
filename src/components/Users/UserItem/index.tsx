import React from 'react'
import User from '@models/User'

type UserItemProps = {
    user: User
}

const UserItem: React.FC<UserItemProps> = (props) => {

    const {
        user: { age, fullName },
    } = props

    const yearText = age < 2 ? 'year' : 'years'
    return <div>{`${fullName} (${age} ${yearText} old)`}</div>
}

export default UserItem
