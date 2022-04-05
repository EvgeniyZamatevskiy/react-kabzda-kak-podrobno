import React, { FC } from 'react'

type ReactMemoPropsType = {
   count: number
   setCounter: (counter: number) => void
}

export const Counter: FC<ReactMemoPropsType> = ({ count, setCounter }) => {

   const onClickHandler = () => {
      setCounter(count + 1)
   }

   return (
      <div>
         <button onClick={onClickHandler}>+</button>
         {count}
      </div>
   )
}