import React from 'react'
import Accordion from './components/Accordion/Accordion'
import UnControlledAccordion from './components/UnControlledAccordion/UnControlledAccordion'
import OnOff from './components/OnOff/OnOff'
import { Rating } from './components/Rating/Rating'
import UnControlledRating from './components/UnControlledRating/UnControlledRating'
import './App.css'

function App() {
  return (
    <div className='App'>
      <OnOff />

      <UnControlledAccordion titleValue={'Menu'} />
      <Accordion collapsed={false} titleValue={'Menu'} />

      <UnControlledRating />
      <Rating value={3} />

      {/* <Accordion titleValue={'Menu'} collapsed={true} />
      <Accordion titleValue={'Users'} collapsed={false} />

      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} /> */}
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