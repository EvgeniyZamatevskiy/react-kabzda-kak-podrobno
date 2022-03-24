import React, { useState } from 'react'
import Accordion from './components/Accordion/Accordion'
import UnControlledAccordion from './components/UnControlledAccordion/UnControlledAccordion'
import { Rating, RatingValueType } from './components/Rating/Rating'
import './App.css'

function App() {

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

  return (
    <div className='App'>
      <Rating value={ratingValue} onClick={setRatingValue} />
      <UnControlledAccordion titleValue={'Menu'} />
      <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} />
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