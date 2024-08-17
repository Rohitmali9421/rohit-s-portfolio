import React from 'react'
import { FaCode } from "react-icons/fa";
import Firebase from '../assets/Firebase.png';
import Postman from '../assets/Postman.png';
import Git from '../assets/Git.png';
import ReactIcon from '../assets/React.png';
import Nodejs from '../assets/Nodejs.png';
import Mongodb from '../assets/Mongodb.png';
import Expressjs from '../assets/Expressjs.png';
import Tailwind from '../assets/Tailwind.png';
import skill from '../assets/skill.png';
function Skills() {
    
    return (
        <div className='w-full bg-blue-50'>
            <h1 className=' text-center font-bold text-3xl font-Kanit'> Skills < FaCode className='text-violet-500 inline text-5xl my-4' /></h1>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <img className=' m-4 md:m-6 md:my-10 animate-bounce-slow mix-blend-darken  bg-black justify-self-center' src={skill} alt="" />
                <div className='mx-6 md:mx-12 p-4 md:p-6'>
                    <div>
                        <h1 className='font-Kanit text-orange-400 py-3 text-xl'>HTML</h1>
                        <div className='w-full bg-gray-300 h-2 rounded overflow-hidden'>
                            <div className='bg-violet-500 w-[90%] h-full'>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-Kanit text-orange-400 py-3 text-xl'>CSS</h1>
                        <div className='w-full bg-gray-300 h-2 rounded overflow-hidden'>
                            <div className='bg-violet-500 w-[90%] h-full'>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-Kanit text-orange-400 py-3 text-xl'>JavaScript</h1>
                        <div className='w-full bg-gray-300 h-2 rounded overflow-hidden'>
                            <div className='bg-violet-500 w-[80%] h-full'>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-Kanit text-orange-400 py-3 text-xl'>Java</h1>
                        <div className='w-full bg-gray-300 h-2 rounded overflow-hidden'>
                            <div className='bg-violet-500 w-[60%] h-full'>
                            </div>
                        </div>
                    </div>
                    <div className='grid justify-end grid-cols-4 gap-3 py-4 '>
                        <img className='w-20' src={ReactIcon} alt="" />
                        <img className='w-20' src={Nodejs} alt="" />
                        <img className='w-20' src={Mongodb} alt="" />
                        <img className='w-20' src={Expressjs} alt="" />
                        <img className='w-20' src={Tailwind} alt="" />
                        <img className='w-20' src={Firebase} alt="" />
                        <img className='w-20' src={Postman} alt="" />
                        <img className='w-20' src={Git} alt="" />
                       
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
