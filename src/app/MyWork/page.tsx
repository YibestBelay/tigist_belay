"use client"
import Link from 'next/link'
import { useState } from 'react'
import { epoxy, makeup,cake } from '../data'
import Image from 'next/image'

const Page = () => {
 const [active, setActive] = useState('Makeup')

  return (
    <div className='flex flex-col items-center gap-5 h-[calc(100vh-14vh)] overflow-y-scroll'>
        <Link href="/MyWork" className='text-xl  pt-3 underline'>My Works</Link>
    <div className='w-1/2 flex  justify-center items-center  ' >
       <ul className='flex  flex-row justify-between items-center w-full cursor-pointer '>
        <li onClick={() => setActive('Makeup')} className={active === 'Makeup' ? 'text-orange-400 ' : ''}>Makeup</li>
        <li onClick={() => setActive('Cake')} className={active === 'Cake' ? 'text-orange-400 ' : ''}>Cake</li>
        <li onClick={() => setActive('Epoxy')} className={active === 'Epoxy' ? 'text-orange-400 ' : ''}>Epoxy</li>
       </ul>
    </div>
  
    {active === 'Makeup' && (
        <div className='w-fit h-fit  '>
            <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 w-fit h-fit gap-1 '>
                {makeup.map((item) => (
                    <div key={item.id} className='w-fit h-fit '>
                        <Image src={item.image} alt={item.title} width={200} height={200} className='object-cover  rounded-md' />
                        <h1 className=' hidden hover:block relative text-xl font-bold'>{item.title}</h1>
                    </div>
                ))}
            </div>
        
        </div>
    )}
    {active === 'Cake' && (
      <div className='w-fit h-fit  '>
          <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 w-fit h-fit gap-1 '>
              {cake.map((item) => (
                  <div key={item.id} className='w-fit h-fit '>
                      <Image src={item.image} alt={item.title} width={200} height={200} className='object-cover  rounded-md' />
                      <h1 className=' hidden hover:block relative text-xl font-bold'>{item.title}</h1>
                  </div>
              ))}
          </div>
      
      </div>
  )}
    {active === 'Epoxy' && (
        <div className='w-fit h-fit  '>
            <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 w-fit h-fit gap-1 '>
                {epoxy.map((item) => (
                    <div key={item.id} className='w-fit h-fit '>
                        <Image src={item.image} alt={item.title} width={200} height={200} className='object-cover  rounded-md' />
                        <h1 className=' hidden hover:block relative text-xl font-bold'>{item.title}</h1>
                    </div>
                ))}
            </div>
        
        </div>
    )}
    </div>
  )
}

export default Page