import Footer from '@/components/Footer'
import React from 'react'

const page = () => {
  return (
    <div className='py-28'>
    <div className="max-w-sm bg-white rounded-lg shadow-xl overflow-hidden ">
    <div className="p-6 flex flex-col items-center ">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
        <i className="fas fa-paint-brush text-3xl text-indigo-500"></i>
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Innovative Web Design</h3>
      <p className="text-gray-600 mb-4 text-center">
        Explore creative and innovative web design principles that make user interfaces intuitive and engaging.
      </p>
      <button className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 focus:outline-none transition-all duration-300">
        Explore Now
      </button>
    </div>
  </div>
  </div>

  )
}

export default page
