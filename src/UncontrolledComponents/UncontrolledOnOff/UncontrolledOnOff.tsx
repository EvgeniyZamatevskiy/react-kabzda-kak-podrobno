import React, { FC, useState } from 'react'

type UncontrolledOnOffPropsType = {

}

export const UncontrolledOnOff: FC<UncontrolledOnOffPropsType> = ({ }) => {

   const [on, setOn] = useState(false)

   const onHandler = () => {
      setOn(true)
   }

   const offHandler = () => {
      setOn(false)
   }

   const onStyle = {
      width: '30px',
      height: '20px',
      border: '1px solid black',
      display: 'inline-block',
      padding: '2px',
      backgroundColor: on ? 'green' : 'white'
   }

   const offStyle = {
      width: '30px',
      height: '20px',
      border: '1px solid black',
      display: 'inline-block',
      marginLeft: '2px',
      padding: '2px',
      backgroundColor: on ? 'white' : 'red'
   }

   const indicatorStyle = {
      width: '10px',
      height: '10px',
      borderRadius: '5px',
      border: '1px solid black',
      display: 'inline-block',
      marginLeft: '5px',
      backgroundColor: on ? 'green' : 'red'
   }

   return (
      <div>
         <div style={onStyle} onClick={onHandler}>On</div>
         <div style={offStyle} onClick={offHandler}>Off</div>
         <div style={indicatorStyle}></div>
      </div>
   )
}