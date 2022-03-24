import React, { useState } from 'react'

type AccordionPropsType = {
   titleValue: string
}

function UnControlledAccordion(props: AccordionPropsType) {

   const [collapsed, setCollapsed] = useState(false)

   return (
      <div>
         <AccordionTitle title={props.titleValue} /> <button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>
         {!collapsed && <AccordionBody />}
      </div>
   )
}

type AccordionTitle = {
   title: string
}

function AccordionTitle(props: AccordionTitle) {
   return (
      <h3>{props.title}</h3>
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

export default UnControlledAccordion