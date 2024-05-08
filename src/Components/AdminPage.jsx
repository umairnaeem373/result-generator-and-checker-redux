import React from 'react'

import { useNavigate } from 'react-router-dom'

function AdminPage() {
    const nav=useNavigate()

    
    
  return (
    <div>
        <h1 className='text-4xl py-4 text-center font-bold w-full'>Welcome Admin!</h1>
        <button type="button" onClick={()=>nav('/')} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Log out</button>
    <section className="text-gray-600 body-font">
  <div className="container border px-5 py-12 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="mx-auto p-4 lg:w-1/3">
        <div className="bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">ADD RESULT</h1>
          <p className="leading-relaxed mb-3">To create a new student result click the button below</p>
          <button onClick={()=>nav('/addResult')} className="text-indigo-500 inline-flex items-center border px-2 py-2">ADD RESULT
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="mx-auto p-4 lg:w-1/3">
        <div className="bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">EDIT RESULT</h1>
          <p className="leading-relaxed mb-3">To edit an existed student result click the button below</p>
          <button onClick={()=>nav('/editResult')} className="text-indigo-500 inline-flex items-center border px-2 py-2">EDIT RESULT
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="mx-auto p-4 lg:w-1/3">
        <div className="bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">VIEW RESULT</h1>
          <p className="leading-relaxed mb-3">To see a student's result click the button below</p>
          <button onClick={()=>nav('/studentLogin')} className="text-indigo-500 inline-flex items-center border px-2 py-2">SEE RESULT
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
        
    </div>
  </div>
</section>
    </div>
  )
}

export default AdminPage