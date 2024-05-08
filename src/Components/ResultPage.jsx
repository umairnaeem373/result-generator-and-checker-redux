import React from 'react'
import { useSelector } from 'react-redux'

function ResultPage() {
    const State = useSelector(state => state.result)
    const total=100

    console.log(State);
  return (
    <div className='w-full border'>
        <h1 className='font-bold text-center text-3xl'>Result Page</h1>
    <div className='border w-3/4 text-blue-300 mx-auto my-5' >
        {
            State.loading===true?
            <h1>Loading...</h1>:
            State.loading===false && State.result.length>0?(
                State.result.map((ele,i)=>{
                console.log(Object.entries(ele.marks),'ppppp')
                return(
                    <div key={i}>
                        <h1 className='py-1 px-2'>Roll no. <span className='font-bold text-black'>{ele.id}</span></h1>
                        <h1 className='py-1 px-2'>Name: <span className='font-bold text-black'>{ele.Name}</span></h1>
                        <h1 className='py-1 px-2'>Last Name: <span className='font-bold text-black'>{ele.Last}</span></h1>
                        
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Subject
                </th>
                <th scope="col" class="px-6 py-3">
                    Obtained Marks
                </th>
                <th scope="col" class="px-6 py-3">
                    Total
                </th>
                <th scope="col" class="px-6 py-3">
                    Grade
                </th>
            </tr>
        </thead>
        <tbody>
            {Object.entries(ele.marks).map(([key,values])=>{
                console.log(values,'val');
            return(
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {key}
                </th>
                <td class="px-6 py-4">
                    {values}
                </td>
                <td class="px-6 py-4">
                    100
                </td>
                <td class="px-6 py-4">
                    { values > 33 ?'Pass':'Fail'}
                </td>
            </tr>
            )
            })}
        </tbody>
    </table>
</div>

                    </div>
                )
            })
            ):<h1 className='font-bold text-center py-4'>No Result Found</h1>
            
        }
    </div>
</div>
  )
}

export default ResultPage