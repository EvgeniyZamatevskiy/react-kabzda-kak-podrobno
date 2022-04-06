import React, { FC, useState } from 'react'
import { Counter } from './Counter'
import { UsersMemo } from './Users'

type ReactMemoPropsType = {

}

export const ReactMemo: FC<ReactMemoPropsType> = ({ }) => {

   const [counter, setCounter] = useState(0)
   const [users, setUsers] = useState<Array<string>>(['Dimych', 'Valera', 'Artem'])

   const addUser = () => {
      setUsers([...users, 'Sveta'])
   }

   return (
      <div>
         <button onClick={addUser}>Add user</button>
         <Counter count={counter} setCounter={setCounter} />
         <UsersMemo users={users} />
      </div>
   )
}