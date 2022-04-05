import React, { ChangeEvent, FC, useState } from 'react'

type CheckboxPropsType = {

}

export const Checkbox: FC<CheckboxPropsType> = ({ }) => {

   const [value, setValue] = useState(false)

   const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.checked)
   }

   return (
      <input type='checkbox' checked={value} onChange={onChangeCheckbox} />
   )
}