import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getResult } from '../Actioms/Actions';
import { useNavigate } from 'react-router-dom';

function StudentLogin() {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [Inp, setInp]=useState(0)
  return (
    <div className='w-full border'>
        <h1 className='text-4xl py-4 text-center font-bold w-full'>Enter your roll number.</h1>
        <div className='w-6/12 my-5 block mx-auto'>
        <input onChange={(e)=>{
            if(e.target.value>-1)
            setInp(e.target.value)
        }} value={Inp} className='h-12 w-3/4 border px-1' type="number" placeholder='Enter Roll Number' />
        <button onClick={()=>{
            navigate('/resultPage')
            dispatch(getResult(Inp))
        }} type="button" class="py-2.5 px-2 mx-1 my-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">GET RESULT</button>
        </div>
    </div>
  )
}

export default StudentLogin