import React, { ChangeEvent, useRef, useState } from 'react'

export default {
   title: 'input',
   // component: UnControlledOnOff
}

export const UnControlledInput = () => <input />

export const TrackValueOfUnControlledInput = () => {
   const [value, setValue] = useState('')

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const actualValue = e.currentTarget.value
      setValue(actualValue)
   }

   return <><input onChange={onChange} /> {value} </>
}

export const GetValueOfUnControlledInputByButtonPress = () => {
   const [value, setValue] = useState('')
   const inputRef = useRef<HTMLInputElement>(null)

   const save = () => {
      const el = inputRef.current as HTMLInputElement
      setValue(el.value)
   }

   return <><input ref={inputRef} /> <button onClick={save} >save</button> - actual value: {value} </>
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator'} />