import React, { useState } from 'react'

const generateData = () => {
   console.log('generateData')
   return 23243241234
}

export const UseState = () => {
   console.log('UseState')

   const [counter, setCounter] = useState(generateData)

   return (
      <div>
         <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
         {counter}
      </div>
   )
}