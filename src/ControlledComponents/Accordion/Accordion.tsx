import React, { FC } from 'react'
import { ItemsType } from '../../App'
import { AccordionBody } from './AccordionBody'
import { AccordionTitle } from './AccordionTitle'

type AccordionPropsType = {
   title: string
   setCollapsed: (collapsed: boolean) => void
   collapsed: boolean
   items: Array<ItemsType>
   showValueItem: (value: any) => void
}

export const Accordion: FC<AccordionPropsType> = ({ title, setCollapsed, collapsed, items, showValueItem }) => {
   return (
      <div>
         <AccordionTitle title={title} setCollapsed={setCollapsed} collapsed={collapsed} />
         {!collapsed && <AccordionBody items={items} showValueItem={showValueItem} />}
      </div>
   )
}