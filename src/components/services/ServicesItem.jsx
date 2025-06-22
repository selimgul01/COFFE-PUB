import React from 'react'

const ServicesItem = ({data}) => {
  return (
    <div className=' bg-white rounded-2xl group hover:bg-light relative shadow-lg max-w-80 max-h-[400px]'>
      
        <img className='mx-auto transform -translate-y-10 group-hover:scale-110 transition-all duration-300 ' src={data.img} alt="" width={200} height={200} />
      
      <div className="p-4  text-center transform -translate-y-10">
        <h1 className='text-xl lg:text-2xl font-semibold'>{data.name}</h1>
        <p className='text-gray-500'>{data.description}</p>
      </div>
    </div>
  )
}

export default ServicesItem
