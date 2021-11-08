import React from 'react'
import User from '@models/User'
import UserItem from '@components/Users/UserItem'

type UsersProps = {
    users: User[]
}

const Users: React.FC<UsersProps> = (props) => {
    const { users } = props
    return (
        <div>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
}

export default Users
