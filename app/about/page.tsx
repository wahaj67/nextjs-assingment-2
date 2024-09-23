import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='w-[80%] h-[60%] mx-auto mt-10 '>
      <div className='w[50%] h-[40%] bg-white '>
        <h1 className='font-serif font-bold text-center text-4xl text-[#00dd3b] hover:text-yellow-300 transform transition-all duration-500  '>This is an about component </h1>

      </div>
      <div className='w-[200px] h-[100px] justify-center items-center'  >
      <Link href="/component" className='font-sans  '> <Button variant="default" className='w-[100px] h-[40px] items-center  transition-all transform  duration-500 ease-in-out bg-blue-600 hover:bg-blue-700  font-bold  rounded-lg'> Go to Header</Button> </Link>
      </div>
    </div>
  )
}

export default About