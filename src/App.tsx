import React from 'react'

function App() {
  return (
    <div>
      <AppTitle />
      This is APP component
      <Rating />
      <Accordion />
      <Rating />
    </div>
  )
}

function AppTitle() {
  return (
    <>
      This is APP component
    </>
  )
}

function Rating() {
  return (
    <>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </>
  )
}

function Star() {
  return (
    <div>star</div>
  )
}

function Accordion() {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export default App