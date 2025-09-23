import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    const listItems = [
        {id: 1, href: "/icons/insta.jpg", name: "Instagram" , link: "https://www.instagram.com/yenatuaemu/?hl=en"},
        {id: 2, href: "/icons/tiktok.jpg", name: "Tiktok" , link: "https://www.tiktok.com/@tgwondefamily?_t=ZM-8zyLKQg0Gnw&_r=1"},
        {id: 3, href: "/icons/telegram.jpg", name: "Telegram" , link: "https://t.me/tginaBe"},
       
    ]
  return (
    <div className='  h-[6vh] w-full  border-t-2 border-gray-200 md:px-5'>
        <div className='flex justify-center items-center h-full w-full'>
            <div className='flex justify-between items-center  p-2 w-full'>
                    <h1 className=' text-sm md:text-base'>Contact Me - <span className=' font-bold'>0901577088</span></h1>
                    <div className='flex justify-around gap-5 items-center  '>
                        {listItems.map((item) => (
                            <Link key={item.id} href={item.link} target="_blank">
                                <Image src={item.href}  alt={item.name} width={20} height={20} className='rounded-full'/>
                            </Link>
                        ))}
                        
                    </div>
                    <div className='flex flex-col md:flex-row md:gap-2'>
                    <p className='flex text-cyan-300 text-sm md:text-base'>© 2025 Tigist Belay.</p>
                    <p className='flex text-cyan-300 text-sm md:text-base'>All rights reserved.</p>
                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer