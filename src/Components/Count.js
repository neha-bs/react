import React, { useEffect, useState } from 'react'

function Count() {

  const [state, setState] = useState(0)

  const Add = () => {
    setState(state + 1)

  }
  const Sub = () => {
    setState(state - 1)

  }

  const [number, setNumber] = useState(0)

  const inc = () => {
    setNumber(number + 1)

  }
  const dec = () => {
    setNumber(number - 1)

  }

  console.log('loading');

  useEffect(() => {

    console.log('mounting');

  }, [])
  useEffect(() => {

    console.log('updating');

  }, [number])


  return (
    <div>
      <h2>{state}</h2>
      <button onClick={Add}>ADD +</button>
      <button onClick={Sub}>SUB -</button>

      <h2>{number}</h2>
      <button onClick={inc}>ADD +</button>
      <button onClick={dec}>SUB -</button>



    </div>
  )
}

export default Count