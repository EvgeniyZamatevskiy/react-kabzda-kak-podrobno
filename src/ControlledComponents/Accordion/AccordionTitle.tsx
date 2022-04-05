import React, { FC } from 'react'

type AccordionTitlePropsType = {
   title: string
   setCollapsed: (collapsed: boolean) => void
   collapsed: boolean
}

export const AccordionTitle: FC<AccordionTitlePropsType> = ({ title, setCollapsed, collapsed }) => {

   const collapsedHandler = () => {
      setCollapsed(!collapsed)
   }

   return (
      <h3 onClick={collapsedHandler}>{title}</h3>
   )
}