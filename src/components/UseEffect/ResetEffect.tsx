import React, { FC, useEffect, useState } from 'react'

type ResetEffectPropsType = {

}

export const ResetEffect: FC<ResetEffectPropsType> = ({ }) => {

   const [counter, setCounter] = useState(0)

   console.log('ResetEffect ' + counter)

   useEffect(() => {
      console.log('Effect occured ' + counter)

      return () => {
         console.log('reset Effect occured ' + counter)
      }
   }, [counter])

   const increase = () => {
      setCounter(counter + 1)
   }

   return (
      <div>
         Hello, counter: {counter}
         <button onClick={increase}>+</button>
      </div>
   )
}