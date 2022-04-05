import React, { KeyboardEvent, useEffect, useState } from 'react'
import { ItemsType } from '../../App'
import s from './CustomSelect.module.css'

type CustomSelectPropsType = {
   value?: any
   onChange: (value: any) => void
   cities: Array<ItemsType>
}

export function CustomSelect(props: CustomSelectPropsType) {

   const [active, setActive] = useState(false)
   const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

   const selectedCity = props.cities.find(c => c.value === props.value)
   const hoveredCity = props.cities.find(c => c.value === hoveredElementValue)

   useEffect(() => {
      setHoveredElementValue(props.value)
   }, [props.value])

   const toggleCities = () => {
      setActive(!active)
   }

   const onCityClick = (value: any) => {
      props.onChange(value)
      toggleCities()
   }

   const onBlurHandler = () => {
      setActive(false)
   }

   const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
         for (let i = 0; i < props.cities.length; i++) {
            if (props.cities[i].value === hoveredElementValue) {
               const pretendentElement = e.key === 'ArrowDown' ? props.cities[i + 1] : props.cities[i - 1]
               if (pretendentElement) {
                  props.onChange(pretendentElement.value)
                  return
               }
            }
         }
         if (!selectedCity) {
            props.onChange(props.cities[0].value)
         }
      }
      if (e.key === 'Enter' || e.key === 'Escape') {
         setActive(false)
      }
   }

   return (
      <>
         <div onBlur={onBlurHandler} className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={s.main} onClick={toggleCities} >{selectedCity && selectedCity.title}</span>
            {active && <div className={s.items}>
               {props.cities.map((i) => {
                  return (
                     <div
                        onMouseEnter={() => setHoveredElementValue(i.value)}
                        className={s.item + ' ' + (hoveredCity === i ? s.selected : '')}
                        key={i.value}
                        onClick={() => onCityClick(i.value)}>
                        {i.title}
                     </div>
                  )
               })}
            </div>}
         </div>
      </>
   )
}