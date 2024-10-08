import React, { useEffect } from 'react'
import { FaGithub } from "react-icons/fa";
import { GoLink } from "react-icons/go";
import Aos from 'aos';
import 'aos/dist/aos.css';
function ProjectCard({ Title, GithubLink, LiveLink, Image1, Image2, Image3 }) {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <div className='md:pb-10 pb-4 overflow-hidden'>
      <h1 className='text-neutral-400 px-6 sm:px-14 md:px-24 font-Kanit font-semibold text-xl sm:text-2xl md:text-4xl pt-2 md:pt-4'>{Title}</h1>
      <div className='flex px-6 sm:px-14 md:px-24 font-Kanit font-semibold text-lg gap-2 py-1  md:text-xl mb-2'>
        <a href={GithubLink} className='text-white'><FaGithub /></a>
        <a href={LiveLink} className='text-orange-400'><GoLink /></a>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 sm:px-14  px-4 md:px-20 '>
        <img
          data-aos="zoom-out-up"
          className=' col-span-2 row-span-2 h-full object-cover md:rounded-2xl rounded-xl hover:translate-x-2 hover:translate-y-2 shadow-1xl shadow-black'
          src={Image1}
          alt="" />
        <img
          data-aos="zoom-out-left"
          className='w-full object-cover md:rounded-2xl rounded-xl shadow-1xl shadow-black  '
          src={Image2}
          alt="" />
        <img
          data-aos="zoom-out-left"
          data-aos-delay="100"
          data-offset="100"
          className="w-full object-cover md:rounded-2xl rounded-xl shadow-1xl shadow-black"
          src={Image3}
          alt="Description of the image"
        />
      </div>
    </div>
  )
}

export default ProjectCard
