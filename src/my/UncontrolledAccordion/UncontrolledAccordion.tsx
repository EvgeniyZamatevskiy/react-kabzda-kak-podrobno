import React, { FC, useState } from 'react'
import { UncontrolledAccordionBody } from './UncontrolledAccordionBody'
import { UncontrolledAccordionTitle } from './UncontrolledAccordionTitle'

type UncontrolledAccordionPropsType = {
   title: string
}

export const UncontrolledAccordion: FC<UncontrolledAccordionPropsType> = ({ title }) => {

   const [collapsed, setCollapsed] = useState(false)

   const toggleCollapsed = () => {
      setCollapsed(!collapsed)
   }

   return (
      <div>
         <UncontrolledAccordionTitle title={title} toggleCollapsed={toggleCollapsed} />
         {!collapsed && <UncontrolledAccordionBody />}
      </div>
   )
}