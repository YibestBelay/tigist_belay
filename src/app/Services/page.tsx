
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    
  return (
    <div className='flex flex-col items-center gap-5 h-[calc(100vh-14vh)] overflow-y-scroll'>
        <Link href="/Services" className='text-xl  pt-3 underline'>Services</Link>
    <div className='flex flex-col md:flex-row  items-center gap-5'>
        
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 py-1 w-full gap-5 h-full md:p-5'>
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
                        <p className='text-xs md:text-md  p-2 rounded-md bg-blue-300 hover:bg-blue-400 cursor-pointer mt-5'> <Link href="https://www.tiktok.com/@tgwondefamily?_t=ZM-8zyLKQg0Gnw&_r=1">DM for promo </Link></p>
                    </div>
                </div>
                <div className='  flex flex-col h-[calc(100vh-20vh)] bg-gray-300 rounded-md w-full  '>
                    <div className='flex justify-center items-center w-full h-1/2 rounded-b-3xl border-b-2 p-1 border-gray-400 overflow-hidden'>
                       <Image src="/images/epoxy.jpg" alt="Tina Belay" width={200} height={200}  className=' object-cover w-full h-full rounded-md' />
                    </div>
                    
                    <div className='flex flex-col items-center  justify-between   h-1/2 border-gray-400 p-5 overflow-hidden'>
                       <div className='flex flex-col items-center justify-center gap-2'>
                        <h1 className='text-2xl  lg:text-3xl  font-bold text-orange-400'>Epoxy Crafts</h1>
                        <p className='text-lg p-2 text-blue-300'> Wayne Epoxy</p>
                        <p className='text-md p-2'>I deliver epoxy coated Coffee tables, pictures, icons, wall art...</p>
                        </div> 
                        <p className='text-xs md:text-md  p-2 rounded-md bg-blue-300 hover:bg-blue-400 cursor-pointer mt-5'> <Link href="/MyWork">Explore my work </Link></p>
                    </div>
                </div>
        
        </div>
        
    </div>
    </div>
  )
}

export default Page