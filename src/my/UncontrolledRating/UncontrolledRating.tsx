import React, { FC, useState } from 'react'
import { UncontrolledRatingStar } from './UncontrolledRatingStar'

type UncontrolledRatingPropsType = {

}

export const UncontrolledRating: FC<UncontrolledRatingPropsType> = ({ }) => {

   const [value, setValue] = useState(0)

   return (
      <div>
         <UncontrolledRatingStar selected={value > 0} setValue={setValue} value={1} />
         <UncontrolledRatingStar selected={value > 1} setValue={setValue} value={2} />
         <UncontrolledRatingStar selected={value > 2} setValue={setValue} value={3} />
         <UncontrolledRatingStar selected={value > 3} setValue={setValue} value={4} />
         <UncontrolledRatingStar selected={value > 4} setValue={setValue} value={5} />
      </div>
   )
}