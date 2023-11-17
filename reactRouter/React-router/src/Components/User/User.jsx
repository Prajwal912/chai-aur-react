import React from 'react'
import {useParams} from "react-router-dom";

const User = () => {
    const {prajwalID} = useParams()
  return (
    <div className='bg-gray-500 text-white text-3xl p-4 flex justify-center'>Dynamic User: {prajwalID}</div>
  )
}

export default User