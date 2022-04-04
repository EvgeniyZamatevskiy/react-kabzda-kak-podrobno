import React, { useState } from 'react'
import { Accordion } from './my/Accordion/Accordion'
import { Rating } from './my/Rating/Rating'
import { OnOff } from './my/OnOff/OnOff'
import { UncontrolledAccordion } from './my/UncontrolledAccordion/UncontrolledAccordion'
import { UncontrolledRating } from './my/UncontrolledRating/UncontrolledRating'
import { UncontrolledOnOff } from './my/UncontrolledOnOff/UncontrolledOnOff'
import './App.css'

export const App = () => {

  const [ratingValue, setRatingValue] = useState(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState(false)
  const [switchOn, setSwitchOn] = useState(false)

  return (
    <div className='App'>
      {/* <UncontrolledAccordion title='UncontrolledAccordion' />
      <UncontrolledRating />
      <UncontrolledOnOff /> */}
      <Accordion title={'Accordion'} setCollapsed={setAccordionCollapsed} collapsed={accordionCollapsed} />
      <Rating ratingValue={ratingValue} setRatingValue={setRatingValue} />
      <OnOff on={switchOn} setOn={setSwitchOn} />
    </div>
  )
}