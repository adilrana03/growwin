import React from 'react'
import crypto from '../assets/refer.png';
import five from '../assets/five2.png';


const Award = () => {
  return (
<>
      <h1 className='md:text-5xl text-4xl text-center font-sans font-bold  pt-5 mb-10 text-gray-600 my-10'>Affiliate Program</h1>
    <div className='bg-gray-200 w-[85%] mx-auto py-12 rounded-2xl mt-5'>
      <div className='md:flex justify-between px-10  mx-auto'>
        <div className='md:w-[55%] mb-5 md:mb-0'>
          <h1 className='text-2xl text-gray-500'><span className='text-4xl ml-4  font-sans font-semibold'>Refer Bonus</span>  </h1>
          <img src={five} alt="" className='md:w-[60%] md:h-[350px] w-[50%]' />
        </div>

        <div className='md:w-[45%] '>
          <img src={crypto} alt="" className='md:h-[500px] md:w-[600px] ' />
        </div>
        {/* <img src={five} alt="" className=' w-40' />    */}
      </div>
    </div>
</>
  )
}

export default Award