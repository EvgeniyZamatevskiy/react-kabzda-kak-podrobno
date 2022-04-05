import React, { FC } from 'react'

type UncontrolledAccordionTitlePropsType = {
   title: string
   toggleCollapsed: () => void
}

export const UncontrolledAccordionTitle: FC<UncontrolledAccordionTitlePropsType> = ({ title, toggleCollapsed }) => {

   const toggleCollapsedHandler = () => {
      toggleCollapsed()
   }

   return (
      <h3 onClick={toggleCollapsedHandler}>{title}</h3>
   )
}