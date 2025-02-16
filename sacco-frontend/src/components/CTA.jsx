import React from 'react'

const CTA = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center px-3 py-8 gap-5 md:px-16 bg-blue-400' style={{height: '200px'}}>
        <div className='w-full md:w-1/2 flex justify-center items-center' >
            <p className='text-lg'>We offer a wide range of financial products and services to help you achieve your goals</p>
        </div>
        <div className='flex gap-6 w-full md:w-1/2 justify-center items-center'>
            <a className='py-4 px-8 text-white font-semibold rounded-lg bg-green-500' href="">Join Us</a>
            <a className='py-4 px-8 text-white font-semibold rounded-lg bg-green-500' href="">Contact Us</a>
        </div>
    </div>
  )
}

export default CTA