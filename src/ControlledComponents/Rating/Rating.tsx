import React, { FC } from 'react'
import { RatingStar } from './RatingStar'

type RatingPropsType = {
   ratingValue: number
   setRatingValue: (ratingValue: number) => void
}

export const Rating: FC<RatingPropsType> = ({ ratingValue, setRatingValue }) => {
   return (
      <div>
         <RatingStar selected={ratingValue > 0} setRatingValue={setRatingValue} value={1} />
         <RatingStar selected={ratingValue > 1} setRatingValue={setRatingValue} value={2} />
         <RatingStar selected={ratingValue > 2} setRatingValue={setRatingValue} value={3} />
         <RatingStar selected={ratingValue > 3} setRatingValue={setRatingValue} value={4} />
         <RatingStar selected={ratingValue > 4} setRatingValue={setRatingValue} value={5} />
      </div>
   )
}