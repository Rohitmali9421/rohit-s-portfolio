import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
function Header() {
    return (
        <div className='w-full  backdrop-blur-2xl   h-14 fixed z-50 flex justify-between items-center px-10 md:px-20 text-2xl border-b-[1px] border-gray-500' >
            <div>
                <h1 className='text-white'>Rohit </h1>
            </div>
            <div className=' gap-7 grid-cols-4 sm:grid hidden'>

                <h1 className='text-white text-lg font-Kanit'>Home</h1>
                <h1 className='text-white text-lg font-Kanit'>Skills</h1>
                <h1 className='text-white text-lg font-Kanit'>Projects</h1>
                <h1 className='text-white text-lg font-Kanit'>Contact</h1>
              
               

            </div>
            <div className='sm:hidden'>
            <FaBarsStaggered className='text-white' />
            </div>
        </div>

    )
}

export default Header
