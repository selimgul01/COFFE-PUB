import React from 'react'

const PlayStore = () => {
  return (
    <div className=' bg-[url("public/beans2.jpg")] bg-center bg-no-repeat bg-cover h-full w-full p-28'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl pl-3 text-light'>
                    Coffe cafe is avaible for Andorid and Ios
                </h1>
                <div className="flex items-center justify-center mt-12">
                    <img width={150} height={120} src="/app_store.png" alt="" />
                    <img width={150} height={120} src="/play_store.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlayStore
