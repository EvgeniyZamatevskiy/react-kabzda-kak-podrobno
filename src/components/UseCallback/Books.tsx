import React, { FC } from 'react'

export type BooksPropsType = {
   addBook: () => void
}

export const Books: FC<BooksPropsType> = ({ addBook }) => {

   console.log('Books render')

   return (
      <div>
         <button onClick={addBook}>Add book</button>
      </div>
   )
}

export const BooksMemo = React.memo(Books)