import React, { FC, useState, useEffect } from 'react'

type UseEffectAsyncPropsType = {

}

export const UseEffectAsync: FC<UseEffectAsyncPropsType> = ({ }) => {

   const [fake, setFake] = useState(1)
   const [counter, setCounter] = useState(1)

   // useEffect(() => {
   //    setTimeout(() => {
   //       document.title = counter.toString()
   //    }, 2000)
   // }, [counter])

   useEffect(() => {
      setInterval(() => {
         setCounter(prev => prev + 1)
      }, 1000)
   }, [])

   return (
      <div>
         Hello, {counter} {fake}
         <button onClick={() => setCounter(counter + 1)}>Counter</button>
         <button onClick={() => setFake(fake + 1)}>FAKE</button>
      </div>
   )
}