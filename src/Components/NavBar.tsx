"use client"
import { Menu, X } from 'lucide-react'    
import { useState } from 'react'
import Link from 'next/link'
import { HandPlatter , Contact, Briefcase} from 'lucide-react'
import { ThemeToggle } from '../Components/theme-toggle'    
const listItems = [
    
    {id: 1, href: "/Services", name: "Services",icon: <HandPlatter />},
    {id: 2, href: "/My Work", name: "My Work",icon: <Briefcase />},
    {id: 3, href: "/Contact", name: "Contact",icon:  <Contact />},
]
const NavBar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className=' border-b-2 border-gray-200 p-1 h-[7vh]' >
        <div className='flex justify-between items-center sm:mx-3 md:mx-10 h-full'>
                <div className='flex-1 flex items-center text-blue-400 font-bold sm:text-lg md:text-xl lg:text-2xl cursor-pointer'>
                    <Link href="/">Tigist Belay</Link>
                </div>

                <ul className='hidden md:flex flex-1  justify-evenly items-center gap-2 sm:text-sm md:text-lg lg:text-xl'>
                    {listItems.map((item) => (
                        <Link key={item.id} href={item.href}>{item.name}</Link>
                    ))}
                </ul>
                <div className='mr-2 md:mr-2 lg:mr-3 '>
               <ThemeToggle />
                </div>
                <div className='md:hidden '>
                    {!open ? ( <Menu onClick={() => setOpen(!open)} className='cursor-pointer'/> ) : (
                        <div className=' w-1/3 h-[92vh] absolute right-0 top-0 bg-black/50 backdrop-blur-sm '>
                            <X onClick={() => setOpen(!open)} className=' absolute top-2 right-2 cursor-pointer'/>
                            <div className='flex flex-col justify-center items-centerp-4 mt-10'>
                                <ul className='w-full'>
                                    {listItems.map((item) => (
                                        <Link key={item.id} href={item.href} onClick={() => setOpen(!open)} className=' flex cursor-pointer bg-gray-600 m-2 rounded gap-5 p-2 text-center hover:bg-gray-100'>{item.icon}{item.name}</Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
        </div>
        
    </div>
  )
}

export default NavBar