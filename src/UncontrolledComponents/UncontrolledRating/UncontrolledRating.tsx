import React, { FC, useState } from 'react'
import { UncontrolledRatingStar } from './UncontrolledRatingStar'

type UncontrolledRatingPropsType = {

}

export const UncontrolledRating: FC<UncontrolledRatingPropsType> = ({ }) => {

   const [ratingValue, setRatingValue] = useState(0)

   return (
      <div>
         <UncontrolledRatingStar selected={ratingValue > 0} setValue={setRatingValue} value={1} />
         <UncontrolledRatingStar selected={ratingValue > 1} setValue={setRatingValue} value={2} />
         <UncontrolledRatingStar selected={ratingValue > 2} setValue={setRatingValue} value={3} />
         <UncontrolledRatingStar selected={ratingValue > 3} setValue={setRatingValue} value={4} />
         <UncontrolledRatingStar selected={ratingValue > 4} setValue={setRatingValue} value={5} />
      </div>
   )
}