import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui'


const UserAvatar = ({ className, imageOnly, user }) => {
    const displayName = `${user.firstName} ${user.lastName}`
    return (
        <div className='flex flex-row items-center gap-2'>
            <Avatar className={className}>
                <AvatarImage src={user.avatarUrl} alt={displayName} />
                <AvatarFallback className='h-10 w-10 bg-secondary'>
                    {user.initials}
                </AvatarFallback>
            </Avatar>
            {!imageOnly && (
                <div>
                    <span>{displayName}</span>
                </div>
            )}
        </div>
    )
}

export default UserAvatar
