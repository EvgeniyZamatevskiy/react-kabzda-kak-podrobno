import React, { useState } from 'react'
import { Accordion } from './components/Accordion/Accordion'
import { UnControlledAccordion } from './components/UnControlledAccordion/UnControlledAccordion'
import { Rating, RatingValueType } from './components/Rating/Rating'
import { OnOff } from './components/OnOff/OnOff'
import { UnControlledOnOff } from './components/UnControlledOnOff/UnControlledOnOff'
import './App.css'

function App() {

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  const [switchOn, setSwitchOn] = useState<boolean>(false)

  return (
    <div className='App'>
      <Rating value={ratingValue} onClick={setRatingValue} />
      <UnControlledAccordion titleValue={'Menu'} />
      <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)} />

      {/* <OnOff on={switchOn} onChange={setSwitchOn} /> */}
      <UnControlledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
    </div>
  )
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return (
    <h1>{props.title}</h1>
  )
}

export default App