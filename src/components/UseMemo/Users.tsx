import React, { FC } from 'react'

export type UsersPropsType = {
   users: Array<string>
}

export const Users: FC<UsersPropsType> = ({ users }) => {

   console.log('users render')

   const mappedUsers = users.map((u, i) => {
      return (
         <div key={i}>{u}</div>
      )
   })

   return (
      <div> {mappedUsers}</div>
   )
}

export const UsersMemo = React.memo(Users)