import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col md:flex-row  items-center gap-5 h-[calc(100vh-14vh)] overflow-y-scroll'>
        <div className='flex flex-col md:flex-row justify-between items-center px-5 py-1 w-full gap-5 h-full md:p-5'>
               <div className='  flex flex-col h-[calc(100vh-20vh)]  bg-gray-300 rounded-md  w-full  '>
                    <div className='flex justify-center items-center w-full h-1/2 border-b-2 rounded-3xl  overflow-hidden'>
                       <Image src="/images/makeup.png" alt="Tina Belay" width={200} height={200}  className='  object-cover w-full h-full rounded-md' />
                    </div>
                    
                    <div className='flex flex-col items-center justify-between  h-1/2 border-gray-400 p-5 overflow-hidden'>
                       <div className='flex flex-col items-center gap-2'>
                        <h1 className='text-2xl  lg:text-3xl  font-bold text-orange-400'>Makeup Services</h1>
                        <p className='text-lg p-2 text-blue-300'> Mikal makeup,Nail & lash</p>
                        <p className='text-md p-2'> Full Makeup for Bride</p>
                        </div> 
                        <p className='text-xs md:text-md  p-2 rounded-md bg-blue-300 hover:bg-blue-500 cursor-pointer mt-5'> <Link href="/MyWork">Explore my work </Link></p>
                    </div>
                </div>
                
                <div className='  flex flex-col h-[calc(100vh-20vh)] bg-gray-300 rounded-md w-full  '>
                    <div className='flex justify-center items-center w-full h-1/2 rounded-b-3xl border-b-2  overflow-hidden'>
                       <Image src="/images/cake.png" alt="Tina Belay" width={200} height={200}  className=' object-cover w-full h-full rounded-md' />
                    </div>
                    
                    <div className='flex flex-col items-center  justify-between   h-1/2 border-gray-400 p-5 overflow-hidden'>
                       <div className='flex flex-col items-center justify-center gap-2'>
                        <h1 className='text-2xl  lg:text-3xl  font-bold text-orange-400'>Bake any cake</h1>
                        <p className='text-lg p-2 text-blue-300'> Kab cake and Sweets</p>
                        <p className='text-md p-2'> I deliver sweet cakes for fair price</p>
                        </div> 
                        <p className='text-xs md:text-md  p-2 rounded-md bg-blue-300 hover:bg-blue-400 cursor-pointer mt-5'> <Link href="/MyWork">Explore my work </Link></p>
                    </div>
                </div>
                <div className='  flex flex-col h-[calc(100vh-20vh)] bg-gray-300 rounded-md w-full  '>
                    <div className='flex justify-center items-center w-full h-1/2 rounded-b-3xl border-b-2 p-1 border-gray-400 overflow-hidden'>
                       <Image src="/images/tiktok1.jpg" alt="Tina Belay" width={200} height={200}  className=' object-cover w-full h-full rounded-md' />
                    </div>
                    
                    <div className='flex flex-col items-center  justify-between   h-1/2 border-gray-400 p-5 overflow-hidden'>
                       <div className='flex flex-col items-center justify-center gap-2'>
                        <h1 className='text-2xl  lg:text-3xl  font-bold text-orange-400'>Tiktok Promotion</h1>
                        <p className='text-lg p-2 text-blue-300'> Tg N Wayne</p>
                        <p className='text-md p-2'>Morethan 30,000 followers and in million views. Contact me for promotion</p>
                        </div> 
                        <p className='text-xs md:text-md  p-2 rounded-md bg-blue-300 hover:bg-blue-400 cursor-pointer mt-5'> <Link href="/MyWork">Explore my work </Link></p>
                    </div>
                </div>
        
        </div>
        
    </div>
  )
}

export default page