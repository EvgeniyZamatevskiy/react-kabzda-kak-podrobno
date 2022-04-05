import React, { FC } from 'react'

type UncontrolledRatingStarPropsType = {
   selected: boolean
   setValue: (value: number) => void
   value: number
}

export const UncontrolledRatingStar: FC<UncontrolledRatingStarPropsType> = ({ selected, setValue, value }) => {

   const changeValueHandler = () => {
      setValue(value)
   }

   return (
      <span onClick={changeValueHandler}>
         {selected
            ? <b>star </b>
            : 'star '}
      </span>
   )
}