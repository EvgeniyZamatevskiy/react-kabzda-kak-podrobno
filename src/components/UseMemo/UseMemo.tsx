import React, { FC, useMemo, useState } from 'react'
import { UsersMemo } from './Users'

type UseMemoPropsType = {

}

export const UseMemo: FC<UseMemoPropsType> = ({ }) => {

   console.log('UseMemo render')

   const [counter, setCounter] = useState(0)
   const [users, setUsers] = useState<Array<string>>(['Dimych', 'Valera', 'Artem'])

   const newUsers = useMemo(() => {
      return users.filter(u => u.toLowerCase().startsWith('s'))
   }, [users])

   const addUser = () => {
      setUsers([...users, 'Sveta'])
   }

   return (
      <div>
         <button onClick={addUser}>Add user</button>
         <button onClick={() => setCounter(counter + 1)}>+</button>
         {counter}
         <UsersMemo users={newUsers} />
      </div>
   )
}