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
import stripe from '../public/assets/stripe.png'
import CardFlip from '../components/CradFlip'
import ReactCardFlip from 'react-card-flip'
import Flipping from '../components/Flipping'

export default function Home() {

  const arr = [
    {
      image: "/assets/stripe.png",
      back: "testtttting flip",

    },
    {
      image: "/assets/stripe.png",
      back: "testtttting flip",

    },


    {
      image: "/assets/stripe.png",
      back: "testtttting flip",

    },

    {
      image: "/assets/stripe.png",
      back: "testtttting flip",

    },


  ]
  const [activeCard, setActiveCard] = useState(false);
  const handleCardClick = () => {
    setActiveCard(!activeCard);
  };
  const [isFlipped, setIsflipped] = useState(false);
  function handleClick() {
    setIsflipped(!isFlipped);
  }
  const router = useRouter()
  const [whereIWork, setWhereIWork] = useState(0);
  const [screenSize, setScreenSize] = useState(typeof window !== "undefined" && window.innerWidth);



  return (
    <>
    <Head>
        <title>Delyc</title>
      </Head>


      <main className='flex flex-col xl:max-w-[90rem] xl:mx-auto xl:px-0 '>

        {/* <PageWrapper> */}
        <header className='flex items-center justify-between py-5 w-full px-20 fixed z-50'>
          <h1 className='text-[#1d99b3] text-4xl'>Delyce</h1>
          <nav className='flex items-center gap-10'>
            <ul className='flex items-center gap-10 text-white/70 text-xl'>
              <li>Home</li>
              <li>Skills</li>
              <li>Experience</li>
              <li>Projects</li>
              <li>Website Clones</li>
            </ul>
            <button className='border border-[#1d99b3] text-lg rounded px-5 py-3 text-white/70 tracking-[1px]'>Hire me</button>
          </nav>
        </header>
        {/* </PageWrapper> */}

        <section className='xl:px-44 mt-40 px-6 py-12 md:flex md:flex-row md:justify-between md:items-center flex flex-col gap-5'>
          <div className='flex flex-col gap-10 md:w-1/2 lg:w-auto'>
            <h1 className='text-white font-bold text-xl'>Hi, I am <br /></h1>
            <h1 className='text-3xl text-white font-bold leading-[50px]'> Delyce Twizeyimana</h1>
            <h1 className='md:text-6xl text-4xl text-[#1d99b3] font-bold leading-[50px]'>A frontend developer</h1>
            <p className='text-white/70 tracking-[1px] text-2xl w-full xl:w-3/5 leading-[2.5rem]'>I craft interactive and beautiful web apps, and I love what I do.

              With every line of code, I strive to make the web a better place.</p>
          </div>

          <div className='relative'>
            <div className='relative z-10 rounded xl:w-[20rem] xl:h-[26rem] w-[15rem] h-[18rem]'>
              <Image src={profile} className="absolute" layout='fill' />

            </div>

            <div className='absolute  border border-[#1d99b3] z-0 top-8 h-full w-full left-5'></div>

          </div>
        </section>


        <PageWrapper>
          <section className='flex flex-col md:flex md:flex-row gap-20 '>
            <div className='flex flex-col md:w-1/2  lg:w-1/3'>
              <div className='flex gap-5 items-center'>
                <svg fill="#ffffff" width="100px" height="100px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z" /></svg>
                <p className='text-white/70 text-lg leading-[30px] tracking-[1px]'>A 3rd Year computer science student at African Leadership Univeristy(ALU)</p>

              </div>
              <div className='flex gap-5 items-center '>
                <svg width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <g stroke="#ffffff" stroke-linecap="round" stroke-width="2">
                    <path stroke-linejoin="round" d="M7 8l-4 4 4 4" />
                    <path d="M10.5 18l3-12" />
                    <path stroke-linejoin="round" d="M17 8l4 4-4 4" />
                  </g>
                </svg>

                <p className='text-white/70 text-lg leading-[30px] tracking-[1px]'>2+ years of working experince in software Engineering</p>

              </div>

              <div className='flex gap-2 items-center justify-center mt-3'>
                <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.35003 16.88C9.35003 16.95 9.28003 17 9.18003 17C9.08003 17 9.00003 17 9.00003 16.88C9.00003 16.76 9.08003 16.76 9.17003 16.76C9.26003 16.76 9.35003 16.81 9.35003 16.88ZM8.35003 16.73C8.35003 16.8 8.35003 16.88 8.49003 16.9C8.52584 16.9172 8.56701 16.9195 8.6045 16.9064C8.642 16.8933 8.67275 16.8658 8.69003 16.83C8.69003 16.76 8.69003 16.69 8.55003 16.66C8.41003 16.63 8.37003 16.66 8.35003 16.73ZM9.77003 16.68C9.68003 16.68 9.62003 16.76 9.63003 16.84C9.64003 16.92 9.72003 16.95 9.82003 16.93C9.92003 16.91 9.97003 16.84 9.96003 16.77C9.95003 16.7 9.87003 16.67 9.77003 16.68ZM11.9 4.00002C10.8454 3.99009 9.79962 4.19333 8.82547 4.59754C7.85132 5.00175 6.96887 5.5986 6.23107 6.35227C5.49328 7.10594 4.91535 8.0009 4.53197 8.98343C4.14859 9.96597 3.96765 11.0158 4.00003 12.07C3.97211 13.7969 4.48426 15.4894 5.46493 16.9111C6.4456 18.3328 7.84582 19.4127 9.47003 20C9.88003 20.07 10.03 19.81 10.03 19.6C10.03 19.39 10.03 18.26 10.03 17.6C10.03 17.6 7.77003 18.1 7.29003 16.6C7.29003 16.6 6.93003 15.6 6.40003 15.39C6.40003 15.39 5.66003 14.87 6.45003 14.88C6.70877 14.9149 6.95573 15.01 7.17108 15.1576C7.38643 15.3052 7.56417 15.5013 7.69003 15.73C7.79466 15.9351 7.9401 16.1167 8.11742 16.2635C8.29473 16.4104 8.50019 16.5195 8.72118 16.5841C8.94218 16.6487 9.17404 16.6675 9.40255 16.6393C9.63106 16.6111 9.85139 16.5364 10.05 16.42C10.0879 16.0025 10.2679 15.6107 10.56 15.31C8.76003 15.1 6.94003 14.84 6.94003 11.65C6.92091 11.2896 6.97881 10.9293 7.10985 10.5931C7.2409 10.2569 7.44209 9.95241 7.70003 9.70002C7.45667 8.96799 7.48507 8.17282 7.78003 7.46002C8.46003 7.24002 10.01 8.35002 10.01 8.35002C11.3342 7.97655 12.7359 7.97655 14.06 8.35002C14.06 8.35002 15.61 7.24002 16.29 7.46002C16.5914 8.17142 16.6198 8.96894 16.37 9.70002C16.6371 9.94893 16.8489 10.2511 16.9919 10.587C17.1348 10.9229 17.2057 11.285 17.2 11.65C17.2 14.85 15.3 15.1 13.5 15.31C13.6809 15.5129 13.8186 15.7506 13.9046 16.0085C13.9905 16.2664 14.023 16.5391 14 16.81C14 17.93 14 19.31 14 19.58C13.9994 19.6475 14.015 19.7142 14.0456 19.7744C14.0763 19.8346 14.1209 19.8866 14.1759 19.9258C14.2308 19.9651 14.2945 19.9905 14.3613 19.9999C14.4282 20.0094 14.4964 20.0025 14.56 19.98C16.1813 19.3978 17.5786 18.321 18.5547 16.9017C19.5309 15.4824 20.0364 13.7922 20 12.07C20.0094 11.0051 19.8061 9.94902 19.402 8.96371C18.9979 7.9784 18.4011 7.08369 17.6467 6.33205C16.8923 5.58041 15.9953 4.98696 15.0085 4.58651C14.0217 4.18606 12.9649 3.98667 11.9 4.00002ZM7.14003 15.41C7.14003 15.41 7.14003 15.52 7.14003 15.58C7.15118 15.5912 7.16442 15.6001 7.17901 15.6061C7.1936 15.6122 7.20923 15.6153 7.22503 15.6153C7.24082 15.6153 7.25646 15.6122 7.27105 15.6061C7.28563 15.6001 7.29888 15.5912 7.31003 15.58C7.31003 15.58 7.31003 15.47 7.31003 15.4C7.31003 15.33 7.18003 15.37 7.14003 15.41ZM6.79003 15.14C6.79003 15.14 6.79003 15.24 6.86003 15.27C6.86846 15.2805 6.87913 15.2889 6.89124 15.2947C6.90335 15.3004 6.91661 15.3035 6.93003 15.3035C6.94345 15.3035 6.9567 15.3004 6.96881 15.2947C6.98093 15.2889 6.99159 15.2805 7.00003 15.27C7.00003 15.27 7.00003 15.17 6.93003 15.14C6.86003 15.11 6.81003 15.11 6.79003 15.14ZM7.79003 16.32C7.79003 16.32 7.79003 16.46 7.79003 16.53C7.79003 16.6 7.96003 16.61 8.00003 16.53C8.04003 16.45 8.00003 16.39 8.00003 16.32C8.00003 16.25 7.87003 16.27 7.83003 16.32H7.79003ZM7.42003 15.83C7.42003 15.83 7.42003 15.95 7.42003 16.03C7.42003 16.11 7.56003 16.14 7.61003 16.11C7.63535 16.0809 7.6493 16.0436 7.6493 16.005C7.6493 15.9664 7.63535 15.9291 7.61003 15.9C7.56003 15.82 7.48003 15.79 7.42003 15.83Z" fill="#ffffff" />
                </svg>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="#ffffff" />
                </svg>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="style=stroke">
                    <g id="email">
                      <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M3.88534 5.2371C3.20538 5.86848 2.75 6.89295 2.75 8.5V15.5C2.75 17.107 3.20538 18.1315 3.88534 18.7629C4.57535 19.4036 5.61497 19.75 7 19.75H17C18.385 19.75 19.4246 19.4036 20.1147 18.7629C20.7946 18.1315 21.25 17.107 21.25 15.5V8.5C21.25 6.89295 20.7946 5.86848 20.1147 5.2371C19.4246 4.59637 18.385 4.25 17 4.25H7C5.61497 4.25 4.57535 4.59637 3.88534 5.2371ZM2.86466 4.1379C3.92465 3.15363 5.38503 2.75 7 2.75H17C18.615 2.75 20.0754 3.15363 21.1353 4.1379C22.2054 5.13152 22.75 6.60705 22.75 8.5V15.5C22.75 17.393 22.2054 18.8685 21.1353 19.8621C20.0754 20.8464 18.615 21.25 17 21.25H7C5.38503 21.25 3.92465 20.8464 2.86466 19.8621C1.79462 18.8685 1.25 17.393 1.25 15.5V8.5C1.25 6.60705 1.79462 5.13152 2.86466 4.1379Z" fill="#ffffff" />
                      <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M19.3633 7.31026C19.6166 7.63802 19.5562 8.10904 19.2285 8.3623L13.6814 12.6486C12.691 13.4138 11.3089 13.4138 10.3185 12.6486L4.77144 8.3623C4.44367 8.10904 4.38328 7.63802 4.63655 7.31026C4.88982 6.98249 5.36083 6.9221 5.6886 7.17537L11.2356 11.4616C11.6858 11.8095 12.3141 11.8095 12.7642 11.4616L18.3113 7.17537C18.6391 6.9221 19.1101 6.98249 19.3633 7.31026Z" fill="#ffffff" />
                    </g>
                  </g>
                </svg>
              </div>

            </div>
            <div className='grid grid-cols-2 gap-y-3 gap-x-5'>
              <p className='flex gap-2 text-white/70'><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8H6C4.89543 8 4 8.89543 4 10V17C4 18.1046 4.89543 19 6 19H17C18.1046 19 19 18.1046 19 17V14M11 15V11C11 8.79086 12.7909 7 15 7H20M20 7L17 4M20 7L17 10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
              </svg> JavaScript</p>
              <p className='flex gap-2 text-white/70'><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8H6C4.89543 8 4 8.89543 4 10V17C4 18.1046 4.89543 19 6 19H17C18.1046 19 19 18.1046 19 17V14M11 15V11C11 8.79086 12.7909 7 15 7H20M20 7L17 4M20 7L17 10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
              </svg> TypeScript</p>
              <p className='flex gap-2 text-white/70'><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8H6C4.89543 8 4 8.89543 4 10V17C4 18.1046 4.89543 19 6 19H17C18.1046 19 19 18.1046 19 17V14M11 15V11C11 8.79086 12.7909 7 15 7H20M20 7L17 4M20 7L17 10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
              </svg> ReactJS</p>
              <p className='flex gap-2 text-white/70'><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8H6C4.89543 8 4 8.89543 4 10V17C4 18.1046 4.89543 19 6 19H17C18.1046 19 19 18.1046 19 17V14M11 15V11C11 8.79086 12.7909 7 15 7H20M20 7L17 4M20 7L17 10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
              </svg> NextJS</p>
              <p className='flex gap-2 text-white/70'><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8H6C4.89543 8 4 8.89543 4 10V17C4 18.1046 4.89543 19 6 19H17C18.1046 19 19 18.1046 19 17V14M11 15V11C11 8.79086 12.7909 7 15 7H20M20 7L17 4M20 7L17 10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
              </svg> NuxtJS</p>
              <p className='flex gap-2 text-white/70'><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8H6C4.89543 8 4 8.89543 4 10V17C4 18.1046 4.89543 19 6 19H17C18.1046 19 19 18.1046 19 17V14M11 15V11C11 8.79086 12.7909 7 15 7H20M20 7L17 4M20 7L17 10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
              </svg> Redux toolkit</p>

              <p className='flex gap-2 text-white/70'><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8H6C4.89543 8 4 8.89543 4 10V17C4 18.1046 4.89543 19 6 19H17C18.1046 19 19 18.1046 19 17V14M11 15V11C11 8.79086 12.7909 7 15 7H20M20 7L17 4M20 7L17 10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
              </svg> CI/CD</p>
              <p className='flex gap-2 text-white/70'><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8H6C4.89543 8 4 8.89543 4 10V17C4 18.1046 4.89543 19 6 19H17C18.1046 19 19 18.1046 19 17V14M11 15V11C11 8.79086 12.7909 7 15 7H20M20 7L17 4M20 7L17 10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
              </svg> AWS</p>
              <p className='flex gap-2 text-white/70'><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8H6C4.89543 8 4 8.89543 4 10V17C4 18.1046 4.89543 19 6 19H17C18.1046 19 19 18.1046 19 17V14M11 15V11C11 8.79086 12.7909 7 15 7H20M20 7L17 4M20 7L17 10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
              </svg> TailwindCSS</p>
              <p className='flex gap-2 text-white/70'><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8H6C4.89543 8 4 8.89543 4 10V17C4 18.1046 4.89543 19 6 19H17C18.1046 19 19 18.1046 19 17V14M11 15V11C11 8.79086 12.7909 7 15 7H20M20 7L17 4M20 7L17 10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
              </svg> Unit testing(Jest)</p>

            </div>
          </section>

        </PageWrapper>

        <PageWrapper>
          <section className='mt-24'>
            <h1 className='text-2xl lg:text-4xl text-[#1d99b3] font-bold my-10'>Where I've Worked</h1>
            <div className="flex  w-[18rem]   relative  overflow-x-scroll  sm:hidden mb-10 text-white">
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
                        className={`px-5 w-64  text-white outline-none py-2 text-[16px] transition-all delay-100 text-start ${whereIWork === k ? "text-[#1d99b3] font-bold text-lg" : "text-secondary-100"
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

                <div className='flex flex-col  lg:flex lg:flex-row lg:gap-5'>


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

                <div className='flex flex-wrap gap-3 items-center'>

                  <p className='text-white/70 text-lg'> Technologies: </p>
                  {Experience[whereIWork].stacks.map((stack, index) => {
                    return (
                      <p key={index} className="text-white/70 py-2 px-6 rounded bg-black/10">{stack}</p>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        </PageWrapper>

        <Projects />
        <section className='relative'>

          <PageWrapper>
            <h1 className='text-[#1d99b3] text-3xl mt-20'>Webste Clones</h1>
          </PageWrapper>

          <Flipping />

        </section>


     <section className='flex justify-center my-20'>
     <section className='bg-black/10 rounded-[2rem] py-10 px-20 w-3/5 flex flex-col gap-5 items-center'>

<h1 className='text-[#1d99b3] text-4xl '>Have any project in mind?</h1>
<p className='text-white text-xl'>Contact me: </p>
<div className='flex gap-2 items-center justify-center mt-3'>
                <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.35003 16.88C9.35003 16.95 9.28003 17 9.18003 17C9.08003 17 9.00003 17 9.00003 16.88C9.00003 16.76 9.08003 16.76 9.17003 16.76C9.26003 16.76 9.35003 16.81 9.35003 16.88ZM8.35003 16.73C8.35003 16.8 8.35003 16.88 8.49003 16.9C8.52584 16.9172 8.56701 16.9195 8.6045 16.9064C8.642 16.8933 8.67275 16.8658 8.69003 16.83C8.69003 16.76 8.69003 16.69 8.55003 16.66C8.41003 16.63 8.37003 16.66 8.35003 16.73ZM9.77003 16.68C9.68003 16.68 9.62003 16.76 9.63003 16.84C9.64003 16.92 9.72003 16.95 9.82003 16.93C9.92003 16.91 9.97003 16.84 9.96003 16.77C9.95003 16.7 9.87003 16.67 9.77003 16.68ZM11.9 4.00002C10.8454 3.99009 9.79962 4.19333 8.82547 4.59754C7.85132 5.00175 6.96887 5.5986 6.23107 6.35227C5.49328 7.10594 4.91535 8.0009 4.53197 8.98343C4.14859 9.96597 3.96765 11.0158 4.00003 12.07C3.97211 13.7969 4.48426 15.4894 5.46493 16.9111C6.4456 18.3328 7.84582 19.4127 9.47003 20C9.88003 20.07 10.03 19.81 10.03 19.6C10.03 19.39 10.03 18.26 10.03 17.6C10.03 17.6 7.77003 18.1 7.29003 16.6C7.29003 16.6 6.93003 15.6 6.40003 15.39C6.40003 15.39 5.66003 14.87 6.45003 14.88C6.70877 14.9149 6.95573 15.01 7.17108 15.1576C7.38643 15.3052 7.56417 15.5013 7.69003 15.73C7.79466 15.9351 7.9401 16.1167 8.11742 16.2635C8.29473 16.4104 8.50019 16.5195 8.72118 16.5841C8.94218 16.6487 9.17404 16.6675 9.40255 16.6393C9.63106 16.6111 9.85139 16.5364 10.05 16.42C10.0879 16.0025 10.2679 15.6107 10.56 15.31C8.76003 15.1 6.94003 14.84 6.94003 11.65C6.92091 11.2896 6.97881 10.9293 7.10985 10.5931C7.2409 10.2569 7.44209 9.95241 7.70003 9.70002C7.45667 8.96799 7.48507 8.17282 7.78003 7.46002C8.46003 7.24002 10.01 8.35002 10.01 8.35002C11.3342 7.97655 12.7359 7.97655 14.06 8.35002C14.06 8.35002 15.61 7.24002 16.29 7.46002C16.5914 8.17142 16.6198 8.96894 16.37 9.70002C16.6371 9.94893 16.8489 10.2511 16.9919 10.587C17.1348 10.9229 17.2057 11.285 17.2 11.65C17.2 14.85 15.3 15.1 13.5 15.31C13.6809 15.5129 13.8186 15.7506 13.9046 16.0085C13.9905 16.2664 14.023 16.5391 14 16.81C14 17.93 14 19.31 14 19.58C13.9994 19.6475 14.015 19.7142 14.0456 19.7744C14.0763 19.8346 14.1209 19.8866 14.1759 19.9258C14.2308 19.9651 14.2945 19.9905 14.3613 19.9999C14.4282 20.0094 14.4964 20.0025 14.56 19.98C16.1813 19.3978 17.5786 18.321 18.5547 16.9017C19.5309 15.4824 20.0364 13.7922 20 12.07C20.0094 11.0051 19.8061 9.94902 19.402 8.96371C18.9979 7.9784 18.4011 7.08369 17.6467 6.33205C16.8923 5.58041 15.9953 4.98696 15.0085 4.58651C14.0217 4.18606 12.9649 3.98667 11.9 4.00002ZM7.14003 15.41C7.14003 15.41 7.14003 15.52 7.14003 15.58C7.15118 15.5912 7.16442 15.6001 7.17901 15.6061C7.1936 15.6122 7.20923 15.6153 7.22503 15.6153C7.24082 15.6153 7.25646 15.6122 7.27105 15.6061C7.28563 15.6001 7.29888 15.5912 7.31003 15.58C7.31003 15.58 7.31003 15.47 7.31003 15.4C7.31003 15.33 7.18003 15.37 7.14003 15.41ZM6.79003 15.14C6.79003 15.14 6.79003 15.24 6.86003 15.27C6.86846 15.2805 6.87913 15.2889 6.89124 15.2947C6.90335 15.3004 6.91661 15.3035 6.93003 15.3035C6.94345 15.3035 6.9567 15.3004 6.96881 15.2947C6.98093 15.2889 6.99159 15.2805 7.00003 15.27C7.00003 15.27 7.00003 15.17 6.93003 15.14C6.86003 15.11 6.81003 15.11 6.79003 15.14ZM7.79003 16.32C7.79003 16.32 7.79003 16.46 7.79003 16.53C7.79003 16.6 7.96003 16.61 8.00003 16.53C8.04003 16.45 8.00003 16.39 8.00003 16.32C8.00003 16.25 7.87003 16.27 7.83003 16.32H7.79003ZM7.42003 15.83C7.42003 15.83 7.42003 15.95 7.42003 16.03C7.42003 16.11 7.56003 16.14 7.61003 16.11C7.63535 16.0809 7.6493 16.0436 7.6493 16.005C7.6493 15.9664 7.63535 15.9291 7.61003 15.9C7.56003 15.82 7.48003 15.79 7.42003 15.83Z" fill="#ffffff" />
                </svg>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="#ffffff" />
                </svg>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="style=stroke">
                    <g id="email">
                      <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M3.88534 5.2371C3.20538 5.86848 2.75 6.89295 2.75 8.5V15.5C2.75 17.107 3.20538 18.1315 3.88534 18.7629C4.57535 19.4036 5.61497 19.75 7 19.75H17C18.385 19.75 19.4246 19.4036 20.1147 18.7629C20.7946 18.1315 21.25 17.107 21.25 15.5V8.5C21.25 6.89295 20.7946 5.86848 20.1147 5.2371C19.4246 4.59637 18.385 4.25 17 4.25H7C5.61497 4.25 4.57535 4.59637 3.88534 5.2371ZM2.86466 4.1379C3.92465 3.15363 5.38503 2.75 7 2.75H17C18.615 2.75 20.0754 3.15363 21.1353 4.1379C22.2054 5.13152 22.75 6.60705 22.75 8.5V15.5C22.75 17.393 22.2054 18.8685 21.1353 19.8621C20.0754 20.8464 18.615 21.25 17 21.25H7C5.38503 21.25 3.92465 20.8464 2.86466 19.8621C1.79462 18.8685 1.25 17.393 1.25 15.5V8.5C1.25 6.60705 1.79462 5.13152 2.86466 4.1379Z" fill="#ffffff" />
                      <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M19.3633 7.31026C19.6166 7.63802 19.5562 8.10904 19.2285 8.3623L13.6814 12.6486C12.691 13.4138 11.3089 13.4138 10.3185 12.6486L4.77144 8.3623C4.44367 8.10904 4.38328 7.63802 4.63655 7.31026C4.88982 6.98249 5.36083 6.9221 5.6886 7.17537L11.2356 11.4616C11.6858 11.8095 12.3141 11.8095 12.7642 11.4616L18.3113 7.17537C18.6391 6.9221 19.1101 6.98249 19.3633 7.31026Z" fill="#ffffff" />
                    </g>
                  </g>
                </svg>
              </div>

</section>
     </section>
          
      



      
        {/* <div className='w-full border border-gray-500 mt-24'></div>

        <footer className='my-10'>
          <a href="https://github.com/Delyc" className='text-white opacity-70'>Github</a>
        </footer> */}
      </main>

      <div className='border-t border-white/70 py-5 px-10'>
        <p className='text-md tracking-[1px] text-white/70'>Designed and developed by Delyce</p>
      </div>

    </>
  )
}



