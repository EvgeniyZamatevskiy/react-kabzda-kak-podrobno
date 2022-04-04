import React, { FC } from 'react'
import { AccordionBody } from './AccordionBody'
import { AccordionTitle } from './AccordionTitle'

type AccordionPropsType = {
   title: string
   setCollapsed: (collapsed: boolean) => void
   collapsed: boolean
}

export const Accordion: FC<AccordionPropsType> = ({ title, setCollapsed, collapsed }) => {
   return (
      <div>
         <AccordionTitle title={title} setCollapsed={setCollapsed} collapsed={collapsed} />
         {!collapsed && <AccordionBody />}
      </div>
   )
}