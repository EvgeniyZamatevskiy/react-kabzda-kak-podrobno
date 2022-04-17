import React, { FC, useEffect, useState } from 'react'

type UseEffectPropsType = {

}

export const UseEffect: FC<UseEffectPropsType> = ({ }) => {
   // Side effects:
   // api.getUsers().then('') - запрос на сервер
   // setInterval - установка интервалов
   // indexedDB - работа с базой данной локальной, в браузере
   // document.getElementId - обращение напрямую к DOM элементам
   // document.title = 'User' - изменение title

   const [fake, setFake] = useState(1)
   const [counter, setCounter] = useState(1)

   // componentDidMount
   useEffect(() => {
      console.log('КОМПОНЕНТ БЫЛ ВМОНТИРОВАН')
   }, [])

   // componentDidMount и componentDidUpdate:
   useEffect(() => {
      console.log('КОМПОНЕНТ БЫЛ ВМОНТИРОВАН И БУДЕТ ОБНОВЛЯТСЯ ПРИ КАЖДОМ ИЗМЕНЕНИИ')
   })

   // componentDidUpdate (Только для counter)
   useEffect(() => {
      console.log('КОМПОНЕНТ БЫЛ ВМОНТИРОВАН И БУДЕТ ОБНОВЛЯТСЯ ПРИ КАЖДОИ ИЗМЕНЕНИИ "counter"')
   }, [counter]) // Если мы хотим следить за обновлением только одной переменной, либо несколькими переменными

   // componentDidMount и componentWillUnmount
   useEffect(() => {
      console.log('КОМПОНЕНТ БЫЛ ВМОНТИРОВАН')
      return () => {
         console.log('КОМПОНЕНТ БУДЕТ ДЕМОНТИРОВАН')
      }
   }, [])

   return (
      <div>
         Hello, {counter} {fake}
         <button onClick={() => setCounter(counter + 1)}>Counter</button>
         <button onClick={() => setFake(fake + 1)}>FAKE</button>
      </div>
   )
}