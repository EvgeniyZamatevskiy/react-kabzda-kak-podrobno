import React, { ChangeEvent, FC, useState } from 'react'

type InputPropsType = {

}

export const Input: FC<InputPropsType> = ({ }) => {

   const [value, setValue] = useState('')

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value)
   }

   return (
      <>
         <input value={value} onChange={onChangeHandler} />
      </>
   )
}