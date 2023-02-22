import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Experience from '../data/Experience.json'
const inter = Inter({ subsets: ['latin'] })
import { projects } from '../data/projects'
import profile from '../public/assets/profile.jpg'
import Projects from '../components/sections/Projects'
import PageWrapper from '../components/Wrappers/PageWrapper'
import fullstackProjects from '../data/fullStackProjects'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const router = useRouter()
  const [whereIWork, setWhereIWork] = useState(0);
  const [screenSize, setScreenSize] = useState(typeof window !== "undefined" && window.innerWidth);



  return (
    <>


      <main className='flex flex-col xl:max-w-[90rem] xl:mx-auto xl:px-0 px-2'>

        <section className='xl:px-44 px-6 py-12 xl:flex xl:flex-row xl:justify-between xl:items-center flex flex-col gap-5'>
          <div className='flex flex-col gap-10'>
            <h1 className='text-white font-bold text-xl'>Hi, I am <br /></h1>
            <h1 className='text-3xl text-white font-bold'> Delyce Twizeyimana</h1>
            <h1 className='md:text-6xl text-4xl text-[#1d99b3] font-bold'>A frontend developer</h1>
            <p className='text-white opacity-70 text-2xl w-full xl:w-3/5 leading-[2.5rem]'>I craft interactive and beautiful web apps, and I love what I do.

              With every line of code, I strive to make the web a better place.</p>
          </div>


          <Image src={profile} width={100} height={100} className="rounded-full xl:w-[24rem] xl:h-[20rem] w-[15rem] h-[15rem]" />
        </section>


        <section>

        </section>

        <PageWrapper>
          <h1>name="Where I’ve Worked" number={"02"}</h1>
          <div className="flex  w-[18rem]  relative  overflow-x-scroll  sm:hidden mb-10 text-white">
            <div
              className="absolute w-32 rounded-full transition-all delay-100 bg-white h-0.5 bottom-0"
              style={{ left: `${whereIWork * 128}px` }}
            ></div>
            {Experience.map((v, k) => {
              return (
                <button
                  key={k}
                  onClick={() => setWhereIWork(k)}
                  className={`xl:px-5  text-white outline-none py-2 min-w-[128px] w-32 text-[16px] transition-all delay-100 text-center ${whereIWork === k ? "text-white" : "text-secondary-100"
                    }`}
                >

                  {v.where}
                </button>
              );
            })}
          </div>
          <div className="flex gap-7  md:w-9/12">
            <div className="hidden relative sm:flex">
              <div
                className="absolute w-0.5 rounded-full transition-all delay-100 bg-white h-[34px]"
                style={{ top: `${whereIWork * 40}px` }}
              ></div>
              <div className="flex flex-col ">
                {Experience.map((v, k) => {
                  return (
                    <button
                      key={k}
                      onClick={() => setWhereIWork(k)}
                      className={`px-5 w-64 text-white outline-none py-2 text-[16px] transition-all delay-100 text-start ${whereIWork === k ? "text-white" : "text-secondary-100"
                        }`}
                    >
                      {v.where}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className=' flex flex-col gap-3'>
              <h2 className="text-2xl font-medium text-white">
                {Experience[whereIWork].role}{" "}
                <span className="text-white">
                  @{" "}
                  <Link
                    href={Experience[whereIWork].link}
                    target="_blank"
                    className="text--underline text-white"
                  >
                    {Experience[whereIWork].name}
                  </Link>
                </span>
              </h2>

              <div className='flex gap-5'>


                <div className='flex gap-2 items-center py-3'>
                  <svg fill="#ffffff" width="30px" height="30px" viewBox="-6 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>calendar</title>
                    <path d="M0 10v14.875c0 0.813 0.688 1.5 1.531 1.5h17.25c0.844 0 1.531-0.688 1.531-1.5v-14.875c0-0.813-0.688-1.5-1.531-1.5h-1.75v-0.156c0-0.531-0.156-1.125-0.531-1.563-0.406-0.406-1.031-0.719-1.938-0.719-0.938 0-1.563 0.313-1.938 0.719-0.406 0.438-0.563 1.031-0.563 1.563v0.156h-3.813v-0.156c0-0.531-0.156-1.125-0.531-1.563-0.406-0.406-1.031-0.719-1.969-0.719-0.906 0-1.531 0.313-1.906 0.719-0.406 0.438-0.563 1.031-0.563 1.563v0.156h-1.75c-0.844 0-1.531 0.688-1.531 1.5zM2.063 24.344v-3.25h3.656v3.25h-3.656zM2.063 20.594v-3.25h3.656v3.25h-3.656zM2.063 16.844v-3.281h3.656v3.281h-3.656zM4.781 10.969v-2.625c0-0.5 0.313-0.75 0.969-0.75 0.688 0 1 0.25 1 0.75v2.625c0 0.5-0.313 0.75-1 0.75-0.656 0-0.969-0.25-0.969-0.75zM6.219 24.344v-3.25h3.688v3.25h-3.688zM6.219 20.594v-3.25h3.688v3.25h-3.688zM6.219 16.844v-3.281h3.688v3.281h-3.688zM10.406 24.344v-3.25h3.688v3.25h-3.688zM10.406 20.594v-3.25h3.688v3.25h-3.688zM10.406 16.844v-3.281h3.688v3.281h-3.688zM14.594 24.344v-3.25h3.656v3.25h-3.656zM14.594 20.594v-3.25h3.656v3.25h-3.656zM14.594 16.844v-3.281h3.656v3.281h-3.656zM13.563 10.969v-2.625c0-0.5 0.313-0.75 1-0.75 0.625 0 0.969 0.25 0.969 0.75v2.625c0 0.5-0.313 0.75-0.969 0.75-0.688 0-1-0.25-1-0.75z"></path>
                  </svg>
                  <p className="text-white/70 ">
                    {Experience[whereIWork].time} <span className="px-2"></span>{" "}


                  </p>

                </div>

                <div className='flex gap-2 items-center'>
                  <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="10" r="3" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 9.75C19 15.375 12 21 12 21C12 21 5 15.375 5 9.75C5 6.02208 8.13401 3 12 3C15.866 3 19 6.02208 19 9.75Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p className="text-white/70 ">
                    {Experience[whereIWork].location} <span className="px-2"></span>{" "}


                  </p>
                </div>
              </div>

              {Experience[whereIWork].whoWeDo.map((v, k) => {
                return (
                  <div className="flex gap-4" key={k}>
                    <span className="text-lg text-white">{"▹"}</span>
                    <p className="text-lg text-white/70 tracking-[1px] leading-[30px] mb-3">
                      {v}
                    </p>
                  </div>
                );
              })}

<div className='flex gap-3 items-center'>
 
  <p className='text-white/70 text-lg'> Technologies: </p>
              {Experience[whereIWork].stacks.map((stack, index) => {
                return(
                  <p key={index} className="text-white/70 py-2 px-6 rounded bg-black/10">{stack}</p>
                )
              })}
              </div>
            </div>
          </div>

        </PageWrapper>





        <Projects />



        <div className='w-full border border-gray-500 my-10'></div>

        <div className='xl:px-44 mt-10 px-6'>
          <p className='text-white opacity-70 text-xl'>In my Free time, I like challenging myslf by creating diferent website's landing pages Which you can find below 🤩</p>
        </div>
        <section className='flex flex-wrap justify-center items-center  gap-10 mt-24'>
          {projects.map((project, index) => {
            return (
              <div key={index} className='flex flex-col gap-5  border border-gray-500 test rounded-lg w-[20rem]'>
                <p className='text-[#1d99b3] px-6 pt-6 font-bold text-xl'>{project.name}</p>
                <Image className='w-full h-[25vh] px-6 object-cover' src={project.image} width={100} height={100} />
                <div className='w-full px-6 flex flex-col gap-5 pb-6'>
                  <p className='text-white opacity-70'>{project.description}</p>

                  <button className='rounded-lg bg-gray-800 shadow-xl text-white opacity-90 px-5 py-3 w-32'> <a target="_blank" href={project.deployed} >View Project</a></button>


                  <div className='flex gap-10'>
                    <link href={project.deployed} className="text-white" />
                    <button className='border-b text-white font-bold'><a target="_blank" href={project.original} >Original site</a></button>
                    <button className='border-b text-white font-bold'><a target="_blank" href={project.Github} >Github Repo</a></button>
                  </div>
                </div>
              </div>
            )
          })}

        </section>

        <div className='w-full border border-gray-500 mt-24'></div>

        <footer className='my-10'>
          <a href="https://github.com/Delyc" className='text-white opacity-70'>Github</a>
        </footer>
      </main>

    </>
  )
}
