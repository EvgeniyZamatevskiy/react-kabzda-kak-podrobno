import React, { useState } from 'react'
import { PointerClock } from '../PointerClock/PointerClock'
import { DigitalClock } from '../DigitalClock/DigitalClock'
import './Clocks.css'

export const Clocks = () => {

   const [toggleClock, setToggleClock] = useState(false)

   const toggleClockHandler = () => setToggleClock(!toggleClock)

   return (
      <div className='clock-block '>
         <button className='btn' onClick={toggleClockHandler}>Toggle clock</button>
         <div className='clock-container'>
            {!toggleClock
               ? <PointerClock />
               : <DigitalClock />}
         </div>
      </div>
   )
}