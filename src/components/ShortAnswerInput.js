import React from 'react'

import { useShortAnswerInput } from 'react-google-forms-hooks'

const ShortAnswerInput = ({ id }) => {
  const { register } = useShortAnswerInput(id)

  return (
    <div>
     <input style={{ border: "2px solid black" }} type='text' {...register()} />
    </div>
  )
}

export { ShortAnswerInput }
