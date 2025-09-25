import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    const listItems = [
        {id: 1, href: "/icons/instag.jpg", name: "Instagram" , link: "https://www.instagram.com/yenatuaemu/?hl=en"},
        {id: 2, href: "/icons/tikt.png", name: "Tiktok" , link: "https://www.tiktok.com/@tgwondefamily?_t=ZM-8zyLKQg0Gnw&_r=1"},
        {id: 3, href: "/icons/telegram.jpg", name: "Telegram" , link: "https://t.me/tginaBe"},
       
    ]
  return (
    <div className=' absolute bottom-0 w-full bg-gray-500 border-t-1 border-gray-200 md:px-5 overflow-hidden'>
        <div className='flex justify-center items-center h-full w-full'>
            <div className='flex justify-between items-center  p-2 w-full'>
                    <h1 className=' text-xs md:text-base'>Contact Me - <span className=' font-bold'>0901577088</span></h1>
                    <div className='flex items-center md:flex-row md:gap-2'>
                    <p className='flex text-cyan-300 text-xs md:text-base'>© 2025 Tigist-Belay.</p>
                    <p className='flex text-cyan-300 text-xs md:text-base'>All rights reserved.</p>
                    </div>
                    <div className='flex justify-around gap-2 md:gap-5 items-center  '>
                        {listItems.map((item) => (
                            <Link key={item.id} href={item.link} target="_blank">
                                <Image src={item.href}  alt={item.name} width={20} height={20} className='rounded-full'/>
                            </Link>
                        ))}
                        
                    </div>
                    
                
            </div>
        </div>
    </div>
  )
}

export default Footer