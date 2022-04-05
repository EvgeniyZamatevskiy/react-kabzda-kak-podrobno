import React, { ChangeEvent, FC, useState } from 'react'

type SelectPropsType = {

}

export const Select: FC<SelectPropsType> = ({ }) => {

   const [value, setValue] = useState('')

   const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      setValue(e.currentTarget.value)
   }

   return (
      <select value={value} onChange={onChangeHandler}>
         <option>none</option>
         <option value='1'>Minsk</option>
         <option value='2'>Moscow</option>
         <option value='3'>Kiev</option>
      </select>
   )
}