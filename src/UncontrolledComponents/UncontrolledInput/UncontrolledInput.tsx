import React, { FC, useRef, useState } from 'react'

type UncontrolledInputPropsType = {

}

export const UncontrolledInput: FC<UncontrolledInputPropsType> = ({ }) => {

   const [value, setValue] = useState('')
   const inputRef = useRef<HTMLInputElement>(null)

   const save = () => {
      const el = inputRef.current as HTMLInputElement
      setValue(el.value)
   }

   return (
      <>
         <h1>UncontrolledInput:</h1>
         <input ref={inputRef} />
         <button onClick={save}>save</button> --- {value}
      </>
   )
}