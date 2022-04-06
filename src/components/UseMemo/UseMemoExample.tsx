import React, { FC, useMemo, useState } from 'react'

type UseMemoExamplePropsType = {

}

export const UseMemoExample: FC<UseMemoExamplePropsType> = ({ }) => {

   let [a, setA] = useState<number>(5)
   let [b, setB] = useState<number>(5)

   let resultA = 1
   let resultB = 1

   useMemo(() => {
      for (let i = 1; i <= a; i++) {
         let fake = 0
         while (fake < 1000000000) {
            fake++
         }
         resultA = resultA * i
      }
   }, [a])

   for (let i = 1; i <= b; i++) {
      resultB = resultB * i
   }

   return (
      <div>
         <input type='number' value={a} onChange={(e) => setA(+e.currentTarget.value)} />
         <input type='number' value={b} onChange={(e) => setB(+e.currentTarget.value)} />
         <hr />
         Result for a: {resultA}
         Result for b: {resultB}
      </div>
   )
}