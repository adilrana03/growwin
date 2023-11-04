import React from 'react'

const Award = () => {
  return (

      <div className='bg-gradient-to-r from-white to-red-100 w-[85%] mx-auto py-12 rounded-2xl mt-20'>
        <h1 className='text-5xl text-center font-sans font-bold p-10 pt-5 mb-10 text-gray-600'>Awards</h1>
        <div className='flex justify-around '>

          <img className='w-[20%]' src="https://deriv.com/static/b09bef32680841081a7a41ec129287bb/3569a/best-forex-spreads.avif" alt="" />
          <img className='w-[20%]' src="https://deriv.com/static/6d590ff977b0bd5afc5cf7f7c3e2cdc3/3569a/broker-of-the-year.avif" alt="" />
          <img className='w-[20%]' src="https://deriv.com/static/193fd1701111c5e096bae6501e3db505/3569a/most-trusted.avif" alt="" />
        </div>
    </div>
  )
}

export default Award