import React, { FC, useEffect, useRef } from 'react'

type PointerClockPropsType = {

}

export const PointerClock: FC<PointerClockPropsType> = () => {

   const hourHandler = useRef<HTMLDivElement>(null)
   const minuteHandler = useRef<HTMLDivElement>(null)
   const secondHandler = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const idIntervar = setInterval(() => {
         let date = new Date()
         let ss = date.getSeconds()
         let mm = date.getMinutes()
         let hh = date.getHours()

         hourHandler.current!.style.transform = `rotateZ(${hh * 30}deg)`
         minuteHandler.current!.style.transform = `rotateZ(${mm * 6}deg)`
         secondHandler.current!.style.transform = `rotateZ(${ss * 6}deg)`
      }, 1000)

      return () => {
         clearInterval(idIntervar)
      }
   }, [])

   return (
      <div className='clock'>
         <div ref={hourHandler} className='hor'>
            <div className='hr'></div>
         </div>
         <div ref={minuteHandler} className='min'>
            <div className='mn'></div>
         </div>
         <div ref={secondHandler} className='sec'>
            <div className='sc'></div>
         </div>
      </div>
   )
}