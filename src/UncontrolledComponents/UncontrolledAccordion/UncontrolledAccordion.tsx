import React, { FC, useReducer, useState } from 'react'
import { reducer } from './reducer'
import { UncontrolledAccordionBody } from './UncontrolledAccordionBody'
import { UncontrolledAccordionTitle } from './UncontrolledAccordionTitle'

type UncontrolledAccordionPropsType = {
   title: string
}

export const UncontrolledAccordion: FC<UncontrolledAccordionPropsType> = ({ title }) => {
   //const [collapsed, setCollapsed] = useState(false)
   const [state, dispatch] = useReducer(reducer, { collapsed: false })

   const toggleCollapsed = () => {
      dispatch({ type: 'TOGGLE-COLLAPSED' })
   }

   return (
      <div>
         <UncontrolledAccordionTitle title={title} toggleCollapsed={toggleCollapsed} />
         {!state.collapsed && <UncontrolledAccordionBody />}
      </div>
   )
}