import React, { useState } from 'react'

type AccordionPropsType = {
   titleValue: string
}

export function UnControlledAccordion(props: AccordionPropsType) {

   const [collapsed, setCollapsed] = useState(false)

   return (
      <div>
         <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)} />
         {!collapsed && <AccordionBody />}
      </div>
   )
}

type AccordionTitle = {
   title: string
   onClick: () => void
}

function AccordionTitle(props: AccordionTitle) {
   return (
      <h3 onClick={() => props.onClick()}>{props.title}</h3>
   )
}

function AccordionBody() {
   return (
      <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   )
}