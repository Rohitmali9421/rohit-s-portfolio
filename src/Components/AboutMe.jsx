import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';  
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";  
import { FaInstagram } from "react-icons/fa";
import Rohit from '../assets/Rohit.png';

function AboutMe() {
    useEffect(() => {
        
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    return (


        <>
            <div className='py-10 pt-16 px-4 grid md:grid-cols-5 md:gap-5   items-center text-white'  style={{
                backgroundImage: `linear-gradient(324deg, transparent 0%, transparent 45%, rgba(186, 186, 186,0.04) 45%, rgba(186, 186, 186,0.04) 47%, transparent 47%, transparent 100%),
                linear-gradient(208deg, transparent 0%, transparent 40%, rgba(186, 186, 186,0.04) 40%, rgba(186, 186, 186,0.04) 80%, transparent 80%, transparent 100%),
                linear-gradient(202deg, transparent 0%, transparent 20%, rgba(186, 186, 186,0.04) 20%, rgba(186, 186, 186,0.04) 40%, transparent 40%, transparent 100%),
                linear-gradient(338deg, transparent 0%, transparent 10%, rgba(186, 186, 186,0.04) 10%, rgba(186, 186, 186,0.04) 72%, transparent 72%, transparent 100%),
                linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))`
            }}>
                <div className='md:col-span-3 ml-6 md:ml-16  ' data-aos="fade-up">
                    <h1 className='font-extrabold  lg:text-7xl md:text-5xl text-3xl sm:text-4xl font-Kanit ' >
                        Hey, I'm Rohit
                    </h1>
                    <h1 className='font-semibold lg:text-4xl md:text-3xl text-2xl sm:text-xl md:mt-4 mt-2 font-Kanit' >
                        Web Developer
                    </h1>
                    <p className='  lg:text-xl md:text-lg py-3 font-extralight font-Kanit'  >I am a proficient web developer skilled in HTML, CSS, JavaScript, and popular frameworks like React and NodeJS. With a focus on creating visually appealing, user-friendly websites that meet client needs.</p>
                    <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Download CV</button>
                    <div className='flex gap-2 items-center mt-2 px-2 text-gray-500'>
                        <a href="https://github.com/Rohitmali9421"><FaGithub className='text-xl hover:text-white' /></a>
                        <a href="https://www.linkedin.com/in/rohit-mali7569/"><FaLinkedin className='text-xl hover:text-white' /></a>
                        <a href="https://twitter.com/rohitma13641165#"><FaXTwitter className='text-xl hover:text-white' /></a>
                        <a href="#"><FaInstagram className='text-xl hover:text-white' /></a>
                    </div>

                </div>
                <div className='md:col-span-2 p-0 md:p-4' data-aos="fade-up">
                    <img className="w-full  px-8 md:px-0 pt-3 md:pt-0  " style={{borderRadius:`30% 70% 70% 30% / 30% 30% 70% 70% `}}  src={Rohit} alt="" />
                </div>
            </div >
            
        </>
    )
}

export default AboutMe
