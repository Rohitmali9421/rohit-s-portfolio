import React from 'react'
import ProjectCard from './ProjectCard'
import Firebolt1 from '../assets/Firebolt2.png';
import Firebolt from '../assets/Firebolt.png';
import Firebolt3 from '../assets/Firebolt3.png';

function Project() {
    return (
        <div className='w-full  bg-gradient-to-t from-[#06071b] from-10% via-[#12101d] via-30% to-[#0c0c0c] to-90%py-4 md:py-8'>
            <ProjectCard Title="Ecommerce Website" GithubLink=" " LiveLink=" https://fireboltlandingpage-rohit-malis-projects.vercel.app/" Image1="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9bab27203014177.668fbab8d7763.png" Image2="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9b6a10203014177.668fbab8d542f.png" Image3="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6ab9fe203014177.668fbab8d4ba9.png"/>
            <ProjectCard Title="Firebolt Landing Page Clone" GithubLink="https://github.com/Rohitmali9421/Tailwind-CSS/tree/main/firebolt-landing-page " LiveLink="https://fireboltlandingpage-rohit-malis-projects.vercel.app/" Image1={Firebolt1} Image2={Firebolt} Image3={Firebolt3}/>
            <ProjectCard Title="Ecommerce Website" GithubLink=" " LiveLink="" Image1="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/43d72e203014177.668fbab8d7c79.png" Image2="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7aabb5203014177.668fbab8d7241.png" Image3="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6ab9fe203014177.668fbab8d4ba9.png"/>
            
        </div>
    )
}

export default Project
