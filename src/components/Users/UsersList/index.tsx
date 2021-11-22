import React from 'react'
import User from '../../../models/User'
import UserItem from '../../../components/Users/UserItem'

type UsersProps = {
    users: User[]
}

const UsersList: React.FC<UsersProps> = (props) => {
    const { users } = props
    return (
        <ul>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </ul>
    )
}

export default UsersList
