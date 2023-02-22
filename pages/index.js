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
    const boxVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
        hidden: { opacity: 0, x: screenSize > 640 ? (index % 2 == 0 ? 150 : -150) : 0 },
    };

    useEffect(() => {
        const setter = () => setScreenSize(window.innerWidth);
        (() => {
            if (window) {
                setter()
                window.addEventListener('resize', setter)
            }
        })();
        return () => window?.removeEventListener('resize', setter)
    }, []);

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        inView ? control.start("visible") : control.start("hidden");
    }, [control, inView]);

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
            <div className="flex  w-[18rem] relative  overflow-x-scroll  sm:hidden mb-10 text-white">
              <div
                className="absolute w-32 rounded-full transition-all delay-100 bg-white h-0.5 bottom-0"
                style={{ left: `${whereIWork * 128}px` }}
              ></div>
              {Experience.map((v, k) => {
                return (
                  <button
                    key={k}
                    onClick={() => setWhereIWork(k)}
                    className={`xl:px-5  text-white outline-none py-2 min-w-[128px] w-32 text-[16px] transition-all delay-100 text-center ${
                      whereIWork === k ? "text-white" : "text-secondary-100"
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
                <div className="flex flex-col">
                  {Experience.map((v, k) => {
                    return (
                      <button
                        key={k}
                        onClick={() => setWhereIWork(k)}
                        className={`px-5 text-white outline-none py-2 text-[16px] transition-all delay-100 text-start ${
                          whereIWork === k ? "text-white" : "text-secondary-100"
                        }`}
                      >
                        {v.where}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
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
                <p className="text-white/70 mt-2 mb-[25px]">
                  {Experience[whereIWork].time} <span className="px-2">-</span>{" "}
                  Present
                </p>
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
              </div>
            </div>

            </PageWrapper>

            {fullstackProjects.map((project, index) => {
              return(
                <div key={index} index={index} className='flex flex-col-reverse gap-10 h-auto md:flex md:flex-row justify-between md:h-[45vh]  mt-20  overflow-x-hidden'>
                <div className={`xl:w-2/5 space-y-4 order-2 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <p className="text-4xl text-white font-bold">{project.title}</p>
                    <p className="text-white/70 text-xl leading-[30px] tracking-[1px]">{project.description}</p>
                    <svg className="animate-bounce" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H12M8.11111 12H12M12 12V15.8889M12 12L5 19" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className="flex flex-wrap gap-4">
    
                        {project.stacks.map((stack, index) => {
                            return (
                                <p key={index} className="text-white/50 bg-white/10 py-1 px-3 rounded">{stack.name}</p>
                            )
                        })}
                    </div>
                </div>
                <motion.div
                    ref={ref}
                    variants={boxVariants}
                    initial="hidden"
                    animate={control}
                    className="relative flex order-1 h-[30vh] md:h-[40vh] md:w-1/2">
    
                    <div className="w-1/2 h-1/2 relative">
                        <Image layout="fill" className={`  rounded   ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`} src={project.image} alt="image" />
    
                    </div>
    
                    <div className="w-3/5 h-3/5 absolute top-[3rem]  md:top-[5rem] right-0 md:right-10">
                        <Image layout="fill" className={` rounded ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`} src={project.image} alt="image" />
    
                    </div>
    
    
                </motion.div>
            </div>
              )
            })}

    

    <Projects />



    <div className='w-full border border-gray-500 my-10'></div>

    <div className='xl:px-44 mt-10 px-6'>
      <p className='text-white opacity-70 text-xl'>In my Free time, I like challenging myslf by creating diferent website's landing pages Which you can find below 🤩</p>
    </div>
     <section className='flex flex-wrap justify-center items-center  gap-10 mt-24'>
      {projects.map((project)=>{
        console.log(project)
        return(
          <div className='flex flex-col gap-5  border border-gray-500 test rounded-lg w-[20rem]'>
            <p className='text-[#1d99b3] px-6 pt-6 font-bold text-xl'>{project.name}</p>
            <Image className='w-full h-[25vh] px-6 object-cover' src={project.image} width={100} height={100}/>
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
