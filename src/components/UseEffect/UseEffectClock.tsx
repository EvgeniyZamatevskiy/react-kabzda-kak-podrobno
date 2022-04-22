import React, { useState, useEffect } from 'react'

const get2digitsString = (num: number) => num < 10 ? `0${num}` : num

export const UseEffectClock = () => {

   const [date, setDate] = useState(new Date())

   useEffect(() => {
      const id = setInterval(() => {
         setDate(new Date())
      }, 1000)

      return () => {
         clearInterval(id)
      }
   }, [])

   return (
      <div style={{ fontSize: '150px' }}>
         <span>{get2digitsString(date.getHours())}</span>
         :
         <span>{get2digitsString(date.getMinutes())}</span>
         :
         <span>{get2digitsString(date.getSeconds())}</span>
      </div>
   )
}