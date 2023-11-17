import React from 'react'
import {useParams} from "react-router-dom";

const User = () => {
    const {prajwal} = useParams()
  return (
    <div className='bg-gray-500 text-white text-3xl p-4 flex justify-center'>Dynamic User: {prajwal}</div>
  )
}

export default User