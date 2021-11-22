import React from 'react'
import User from '../../../models/User'

type UserItemProps = {
    user: User
}

const UserItem: React.FC<UserItemProps> = (props) => {

    const {
        user: { age, fullName },
    } = props

    const yearText = +age < 2 ? 'year' : 'years'
    return <li>{`${fullName} (${age} ${yearText} old)`}</li>
}

export default UserItem
