import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className='flex flex-col md:flex-row  items-center gap-5 h-[calc(100vh-7vh)] overflow-hidden'>
        

        <div className='md:w-1/3 w-full'>
            <Image src="/images/main.png" alt="Tina Belay"  width={500} height={500} className=' object-contain rounded-full' />
        </div>
        <div className='flex flex-col justify-center items-center   md:w-2/3'>
            <h1 className='md:mb-10 mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
            text-orange-500 
               inline-block 
               overflow-hidden 
               border-r-4 border-orange-500 
               whitespace-nowrap 
               max-w-[21ch]
               animate-[typing_5s_steps(19)_forwards] 
               animate-typing-cursor'
              
                  > Welcome to my website</h1>
                  <div className='mb-5'>
                      <div className='w-fit  font-bold rounded-lg p-2 bg-gray-400'>Hello👋 I'm </div> 
                      <div className='text-left font-sans md:text-6xl text-4xl font-bold m-5 text-blue-400'>Tigist Belay</div>
                  </div>
            
           
            <ul className="list-none space-y-3 text-sm sm:text-xl ">
                  <li className="flex items-center">
                    <span className="mr-3 text-green-500">✓</span>
                    Certified Makeup Artist
                  </li>
                 
                  <li className="flex items-center">
                    <span className="mr-3 text-yellow-500">✓</span>
                    Professional Cake Maker
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 text-red-500">✓</span>
                    Tiktoker
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3  text-blue-500 ">✓</span>
                    Epoxy Resin Artist
                  </li>
          </ul>
            
        </div>
    </div>
  )
}

export default HomePage