import React, { FC } from 'react'

type RatingStarPropsType = {
   selected: boolean
   setRatingValue: (ratingValue: number) => void
   value: number
}

export const RatingStar: FC<RatingStarPropsType> = ({ selected, setRatingValue, value }) => {

   const changeValueHandler = () => {
      setRatingValue(value)
   }

   return (
      <span onClick={changeValueHandler}>
         {selected
            ? <b>star </b>
            : 'star '}
      </span>
   )
}