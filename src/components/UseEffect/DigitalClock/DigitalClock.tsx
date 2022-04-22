import React, { FC, useEffect, useState } from 'react'
import '../Clocks/Clocks.css'

type DigitalClockPropsType = {

}

export const DigitalClock: FC<DigitalClockPropsType> = ({ }) => {

   const [date, setDate] = useState(new Date())

   useEffect(() => {
      const idIntervar = setInterval(() => {
         setDate(new Date())
      }, 1000)

      return () => {
         clearInterval(idIntervar)
      }
   }, [])

   return (
      <div className='bookacket'>
         <div className='uncomenkad'>
            <div className='vemekunys'>
               {date.toLocaleTimeString()}
            </div>
         </div>
         <span></span>
      </div>
   )
}