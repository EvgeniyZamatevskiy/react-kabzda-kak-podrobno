import React, { FC, useCallback, useMemo, useState } from 'react'
import { BooksMemo } from './Books'

type UseMemoPropsType = {

}

export const UseCallback: FC<UseMemoPropsType> = ({ }) => {

   console.log('UseCallback render')

   const [counter, setCounter] = useState(0)
   const [books, setBooks] = useState<Array<string>>(['React', 'HTML', 'CSS'])

   const memoizedAddBook = useCallback(() => {
      setBooks([...books, 'JS'])
   }, [books])

   return (
      <div>
         <button onClick={() => setCounter(counter + 1)}>+</button>
         {counter}
         <BooksMemo addBook={memoizedAddBook} />
      </div>
   )
}