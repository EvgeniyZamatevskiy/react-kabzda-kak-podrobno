import React, { FC } from 'react'
import { ItemsType } from '../../App'

type AccordionBodyPropsType = {
   items: Array<ItemsType>
   showValueItem: (value: any) => void
}

export const AccordionBody: FC<AccordionBodyPropsType> = ({ items, showValueItem }) => {

   const mappedItems = items.map(i => {

      const showValueItemHandler = () => {
         showValueItem(i.value)
      }

      return (
         <li onClick={showValueItemHandler} key={i.value}>{i.title}</li>
      )
   })

   return (
      <ul>{mappedItems}</ul>
   )
}