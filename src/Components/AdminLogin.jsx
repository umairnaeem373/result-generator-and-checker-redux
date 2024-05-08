import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function AdminLogin() {

    const nav=useNavigate()
    const pass='605615'
    const [Inp, setInp]=useState(0)

  return (
    <div className='w-full'>
        <button type="button" onClick={()=>nav('/')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back</button>
    <div>
        <h1 className='text-4xl py-4 text-center font-bold w-full'>Admin Login Page</h1>
        <div className='w-4/12 block mx-auto'>
        <input onChange={(e)=>{
            setInp(e.target.value)
        }} className='h-12 w-3/4 border px-1' type="password" placeholder='Enter Password' />
        <button onClick={()=>{
            Inp===pass?nav('/admin'):alert('Password Incorrect')
        }} type="button" className="py-2.5 px-2 mx-1 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">LOGIN</button>
        </div>
    </div>
</div>
  )
}

export default AdminLogin