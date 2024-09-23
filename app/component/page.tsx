import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
<div className='w-[100%] h-[100%] bg-gradient-to-bl from-[#0fa46c] to-[#3f87a6]'>
<div className='w-[95%] h-[70%] bg-gradient-to-r from-[#0fa46c] to-[#3f87a6] mt-10 mx-auto'>
        <h1 className='font-serif font-bold text-center text-4xl text-[#00dd3b] hover:text-yellow-300 transform transition-all duration-500  '> This is an Header Page </h1>
         
    </div>
    <div className='w-[50%] h-[30%] bg-transparent mt-10'>
         
         <Link href="/about" className='font-sans '> <Button variant="default" className='w-[100px] h-[40px] transition-all transform  duration-500 ease-in-out bg-blue-600 hover:bg-blue-700  font-bold  rounded-lg'> About</Button> </Link>
         </div>
    </div>
  )
}

export default Header