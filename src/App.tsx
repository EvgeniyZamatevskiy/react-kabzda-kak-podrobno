import React, { useState } from 'react'
import { Accordion } from './ControlledComponents/Accordion/Accordion'
import { Rating } from './ControlledComponents/Rating/Rating'
import { OnOff } from './ControlledComponents/OnOff/OnOff'
import { UncontrolledAccordion } from './UncontrolledComponents/UncontrolledAccordion/UncontrolledAccordion'
import { UncontrolledRating } from './UncontrolledComponents/UncontrolledRating/UncontrolledRating'
import { UncontrolledOnOff } from './UncontrolledComponents/UncontrolledOnOff/UncontrolledOnOff'
import { UncontrolledInput } from './UncontrolledComponents/UncontrolledInput/UncontrolledInput'
import { Input } from './ControlledComponents/Input/Input'
import { Checkbox } from './ControlledComponents/Checkbox/Checkbox'
import { Select } from './ControlledComponents/Select/Select'
import { CustomSelect } from './components/CustomSelect/CustomSelect'
import { ReactMemo } from './components/ReactMemo/ReactMemo'
import './App.css'
import { UseMemoExample } from './components/UseMemo/UseMemoExample'
import { UseMemo } from './components/UseMemo/UseMemo'
import { UseCallback } from './components/UseCallback/UseCallback'

export type ItemsType = {
  title: string
  value: any
}

export const App = () => {

  const [ratingValue, setRatingValue] = useState(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState(false)
  const [switchOn, setSwitchOn] = useState(false)
  const [customSelectValue, setCustomSelectValue] = useState('1')
  const [items, setItems] = useState<Array<ItemsType>>([
    { title: 'Dymych', value: 1 },
    { title: 'Valera', value: 2 },
    { title: 'Artem', value: 3 },
    { title: 'Viktor', value: 4 },
  ])
  const [cities, setCities] = useState<Array<ItemsType>>([
    { value: '1', title: 'Minsk' },
    { value: '2', title: 'Moscow' },
    { value: '3', title: 'Kiev' },
  ])

  const showValueItem = (value: any) => {
    console.log(value)
  }

  return (
    <div className='App'>
      {/* <ReactMemo /> */}
      {/* <UseMemoExample /> */}
      {/* <UseMemo /> */}
      <UseCallback />

      {/* <CustomSelect cities={cities} onChange={(customSelectValue) => { setCustomSelectValue(customSelectValue) }} value={customSelectValue} /> */}

      {/* <UncontrolledInput /> */}

      {/* <Input />
      <div>
        <Checkbox />
      </div>
      <Select /> */}

      {/* <UncontrolledAccordion title='UncontrolledAccordion' /> */}
      {/* <UncontrolledRating /> */}
      {/* <UncontrolledOnOff /> */}

      {/* <Accordion items={items} showValueItem={showValueItem} title={'Accordion'} setCollapsed={setAccordionCollapsed} collapsed={accordionCollapsed} /> */}
      {/* <Rating ratingValue={ratingValue} setRatingValue={setRatingValue} /> */}
      {/* <OnOff on={switchOn} setOn={setSwitchOn} /> */}
    </div>
  )
}