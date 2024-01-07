import React, { useState } from 'react'
import '../index.css'

const ButtonGen = () => {
  // start with number = 0
  // then setNumber to update number
  const [number, setNumber] = useState(0)

  const numberHandler = () => {
    setNumber(Math.round(Math.random() * 1000 + 1))
  }

  return (
    <>
      <div>
        <h2>Number Generator</h2>
        <p> {number}</p>
        <button onClick={numberHandler}>
          Generate a number up to 1000!
        </button>
      </div>
    </>
  )
}

export default ButtonGen
