import Head from "next/head";
import localFont from "@next/font/local";
import Image from "next/image";
import Title from "./components/ui/Title";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GitHub, Instagram, Twitter, Linkedin, Dribbble } from "react-feather";
import Header from "./components/Header";
import Experience from "./data/Experience.json";
import Work from "./data/Work.json";
import { Slide } from "react-awesome-reveal";
import { SocialProfileJsonLd, DefaultSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "../next-seo.config";
const myFont = localFont({
  src: [
    {
      path: "../public/assets/Calibre-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/Calibre-Regular.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/assets/SFMono.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/assets/Calibre-Semibold.woff2",
      weight: "800",
      style: "bold",
    },
  ],
});

export default function Home() {
  const [whereIWork, setWhereIWork] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const SKILLS = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "MongoDB",
    "Tailwind CSS",
    "CSS3",
    "HTML5",
    "Figma",
    "java",
    "Springboot",
    "Swagger",
    "Microservice",
    "Redux toolkit"
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);
  return (
    <>
      <Head>
        <title className="font-">Delyce</title>
        <meta
          name="Meet Delyce , a highly skilled software engineer and full stack developer from Rwanda, with expertise in web  development."
          content="Delyce - Experienced Software Engineer and Full Stack Developer from Rwanda - Specializing in web development and delivering high-quality software solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="wEpcBrRP8ftcSOnDW-hZ62UN2S-S_c2QN0OZmMdkPzM"
        />
      </Head>
      <main className={myFont.className}>
        <Header />
        <div
          className={`fixed w-full h-fit delay-75 ${isScrolled
              ? "opacity-100 z-[100] top-0 visible transition"
              : "opacity-0 -z-[100] -top-10 invisible"
            }  bg-primary shadow-2xl`}
        >
          <Header />
        </div>
        <DefaultSeo {...NEXT_SEO_DEFAULT} />
        <SocialProfileJsonLd
          type="Person"
          name="Delyce Twizeyimana"
          url="https://delyce.netlify.app/"
          sameAs={[
            "https://www.linkedin.com/in/delyce-twizeyimana-475977217/"

          ]}
        />
        <div className="max-w-6xl m-auto px-4 lg:px-2">
          <section className="relative pt-16 sm:mb-32 sm:pt-44 -h-screen 2xl:h-auto">
            <div className="relative w-fit ml-[140px] ">
              <h2 className="btn-shine text-[50px] sm:text-[60px]">
                I{"'"}m Delyce
              </h2>
            </div>

            <p className="mt-12 mb-6 text-secondary-300 text-xl w-full leading-9 sm:leading-normal sm:w-[85%]">
              As a Software Engineer with expertise in {" "}
              <span className="button--text">JavaScript</span> and{" "}
              <span className="button--text">Java</span> I excel in developing web applications using  {" "}
              <span className="button--text">ReactJs</span>,{" "}
              <span className="button--text">NextJS</span>,{" "}
              <span className="button--text">Node.js</span>, and{" "}
              <span className="button--text">Spring Boot</span>. I'm passionate about creating seamless, efficient, and cutting-edge solutions for both front-end and back-end systems.

            </p>
            <p className="mb-6 text-secondary-300 text-xl w-full leading-9 sm:leading-normal sm:w-[95%]">
              My dedication to continuous learning and quality ensures high-performance applications that meet and exceed project goals. View
              my{" "}
              <span className="button--text">
                <a href="#Work">Projects</a>
              </span>
              ,{" "}
              <span className="button--text">
                <Link href="/assets/delyceresume.pdf" target="_blank">
                  {" "}
                  Resumé{" "}
                </Link>
              </span>
              ,{" "}
              <span className="button--text">
                <a href="#Contact"> Contact Me</a>
              </span>
              , or send me an email at{" "}
              <span className="button--text">
                <a
                  href="mailto:hirwaaldo1@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  delyceu@gmail.com{" "}
                </a>
              </span>
              .
            </p>
            <a href="#About">
              <div className="flex items-center gap-6 my-12 cursor-pointer group">
                <span className="text-lg text-secondary-100 mt-1 transition-all delay-100 group-hover:text-white">
                  See More About Me
                </span>
                <svg
                  className="invert relative transition-all delay-100 left-0 group-hover:left-3"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                </svg>
              </div>
            </a>
            <div className="flex text-secondary-200 gap-3 flex-wrap sm:flex-nowrap sm:gap-8">
              <a
                href={"https://github.com/delyc"}
                target="_blank"
                rel="noreferrer"
              >
                <GitHub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/delyce-twizeyimana-475977217/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
              </a>

            </div>
          </section>
          <section className="mb-[50px] pt-20 sm:mb-[130px]" id="About">
            <Title name="About Me" number={"01"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
              <div className="text-secondary-100 flex flex-col gap-[15px] text-xl">
                <p>
                  I craft interactive and beautiful web apps, and I love what I do. With every line of code, I strive to make the web a better place.
                </p>
                <div>
                  <div className="flex items-center gap-5 w-4/5 mx-auto">
                    <svg fill="#fff" height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512" xmlSpace="preserve">
                      <g>
                        <g>
                          <path d="M488.726,163.678L512,151.923L256.001,22.623L0,151.924l256.001,129.299l197.817-99.913v77.453
			c-3.61,4.101-5.818,9.463-5.818,15.342c0,12.833,10.44,23.273,23.273,23.273s23.273-10.44,23.273-23.273
			c0-5.88-2.209-11.241-5.818-15.342V163.678z"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M256.001,320.332L93.091,238.05v169.872c0,44.986,72.937,81.454,162.909,81.454s162.909-36.468,162.909-81.454V238.05
			L256.001,320.332z"/>
                        </g>
                      </g>
                    </svg>
                    <p >African Leadership University graduate with a Bachelor's in Computer Science, July 2024.</p>
                  </div>
                  <div className="flex items-center  w-4/5 mx-auto">
                    <svg className="ml-[-16px]" width="100px" height="100px" viewBox="0 0 2050 2050" data-name="Layer 3" id="Layer_3" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <style>{`.cls-1{fill:#4d4d4d;}.cls-2{fill:#ffffff;}`}</style>
                      </defs>
                      <title></title>
                      <path className="cls-1" d="M1009.1,1629.4a602.6,602.6,0,1,1,235.2-47.5A601,601,0,0,1,1009.1,1629.4Z" />
                      <path className="cls-2" d="M803.5,1283a45.1,45.1,0,0,1-31.8-76.9L1202,775.8a45,45,0,0,1,63.6,63.7L835.3,1269.8A44.8,44.8,0,0,1,803.5,1283Z" />
                      <path className="cls-2" d="M842.8,1000a45,45,0,0,1-26.9-8.9L699,904a45.1,45.1,0,0,1,0-72.2l116.9-87.1a45,45,0,0,1,53.8,72.2l-68.5,51,68.5,51a45,45,0,0,1-26.9,81.1Z" />
                      <path className="cls-2" d="M1175.4,1314.2a45,45,0,0,1-26.9-81.1l68.4-51-68.4-51a45,45,0,1,1,53.7-72.2l117,87.1a45.1,45.1,0,0,1,0,72.2l-117,87.1A44.9,44.9,0,0,1,1175.4,1314.2Z" />
                    </svg>
                    <p>2+ years of working experience in software Engineering</p>
                  </div>
                </div>
               
                <p>
                  Here are a few technologies I{"’"}ve been working with
                  recently:
                </p>
                <div className="grid grid-cols-2 overflow-hidden">
                  <Slide cascade damping={0.2}>
                    {SKILLS.map((v: any, k) => {
                      return (
                        <div
                          key={k}
                          className="text-[15px] flex items-center gap-3"
                        >
                          <span className="text-sm text-white">{"▹"}</span>
                          <span>{v}</span>
                        </div>
                      );
                    })}
                  </Slide>
                </div>
              </div>
              <div className="w-fit hidden md:block">
                <div className="relative cursor-pointer group">
                  <a href="/assets/hirwaaldo.jpeg" target="_blank">
                    <Image
                      src="/assets/delyce.jpeg"
                      alt="Delyce - Experienced Software Engineer and Full Stack Developer from Rwanda - Specializing in web development and delivering high-quality software solutions"
                      width={300}
                      height={300}
                      className="rounded-sm z-50 transition-all delay-100 grayscale group-hover:grayscale-0"
                    />
                  </a>
                  <div className="block w-full h-full transition-all delay-100 absolute group-hover:top-3 group-hover:left-3 -z-20 border-2 rounded-sm top-6 left-6"></div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="mb-[50px] pt-20 sm:mb-[130px] w-full sm:w-fit mx-auto"
            id="Experience"
          >
            <Title name="Where I’ve Worked" number={"02"} />
            <div className="flex relative overflow-auto scrollbar--hidden sm:hidden mb-10">
              <div
                className="absolute w-32 rounded-full transition-all delay-100 bg-white h-0.5 bottom-0"
                style={{ left: `${whereIWork * 128}px` }}
              ></div>
              {Experience.map((v, k) => {
                return (
                  <button
                    key={k}
                    onClick={() => setWhereIWork(k)}
                    className={`px-5 outline-none py-2 min-w-[128px] w-32 text-[16px] transition-all delay-100 text-center ${whereIWork === k ? "text-white" : "text-secondary-100"
                      }`}
                  >
                    {v.where}
                  </button>
                );
              })}
            </div>
            <div className="flex gap-7 w-full md:w-9/12">
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
                        className={`px-5 outline-none py-2 text-[16px] transition-all delay-100 text-start ${whereIWork === k ? "text-white" : "text-secondary-100"
                          }`}
                      >
                        {v.where}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-medium text-secondary-200">
                  {Experience[whereIWork].role}{" "}
                  <span className="text-white">
                    @{" "}
                    <Link
                      href={Experience[whereIWork].link}
                      target="_blank"
                      className="text--underline"
                    >
                      {Experience[whereIWork].name}
                    </Link>
                  </span>
                </h2>
                <p className="text-secondary-300 mt-2 mb-[25px]">
                  {Experience[whereIWork].time} <span className="px-2">-</span>{" "}
                  {Experience[whereIWork].endtime} 
                </p>
                {Experience[whereIWork].whoWeDo.map((v, k) => {
                  return (
                    <div className="flex gap-4" key={k}>
                      <span className="text-lg text-white">{"▹"}</span>
                      <p className="text-lg text-secondary-300 leading-6 mb-3">
                        {v}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section
            className="mb-[50px] pt-20 sm:mb-[130px] overflow-hidden"
            id="Work"
          >
            <Title name="Some Things I've Built" number={"03"} />
            {Work.map((v, k) => {
              return (
                <a
                  href={v.link}
                  target="_blank"
                  key={k}
                  className="grid grid-cols-1 md:grid-cols-2 place-items-center group cursor-pointer mb-16"
                  rel="noreferrer"
                >
                  {k % 2 === 0 && (
                    <div className="hidden md:block w-[579.162px] h-[362.388px] overflow-hidden rounded-sm relative">
                      <Image
                        src={v.image}
                        className="object-cover w-full h-full transition-all delay-100 opacity-60 grayscale group-hover:opacity-80 group-hover:grayscale-0"
                        alt={v.name}
                        width={779}
                        height={462}
                      />
                    </div>
                  )}
                  <div
                    className={`text-left ${k % 2 === 0
                        ? "md:text-right md:-ml-[20px]"
                        : "md:text-left -mr-[20px]"
                      } z-50 relative overflow-hidden py-10 md:py-0 px-8 md:px-0 shadow-2xl md:shadow-none`}
                  >
                    <Image
                      src={v.image}
                      className="block md:hidden absolute inset-0 rounded-sm object-contain w-full h-full transition-all opacity-10 delay-100 grayscale hover:grayscale-0 -z-20"
                      alt=""
                      width={779}
                      height={462}
                    />
                    <h4 className="font-medium text-sm">Featured {v.compay}</h4>
                    <h2 className="text-3xl mt-3 mb-5 font-semibold text-secondary">
                      {v.name}
                    </h2>
                    <div>
                      <p className="text-lg text-secondary-100 leading-6 md:bg-[#141428] md:p-12 rounded-sm md:shadow-2xl">
                        {v.detail}
                      </p>
                    </div>
                    <div
                      className={`mt-6 flex justify-start gap-3 ${k % 2 === 0 ? "md:justify-end" : "md:justify-start"
                        }`}
                    >
                      {v.tech.map((v, k) => {
                        return (
                          <span className="text-sm text-secondary-100" key={k}>
                            {v}
                          </span>
                        );
                      })}
                    </div>
                    <div
                      className={`flex justify-start ${k % 2 === 0 ? "md:justify-end" : "md:justify-start"
                        } mt-3`}
                    >
                      <svg
                        width={24}
                        height={24}
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ccd6f6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-external-link"
                      >
                        <title>External Link</title>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </div>
                  </div>
                  {k % 2 !== 0 && (
                    <div className="hidden md:block w-[579.162px] h-[362.388px] overflow-hidden rounded-sm relative">
                      <Image
                        src={v.image}
                        className="object-cover w-full h-full transition-all delay-100 opacity-60 grayscale group-hover:opacity-80 group-hover:grayscale-0"
                        alt={v.name}
                        width={379}
                        height={262}
                      />
                    </div>
                  )}
                </a>
              );
            })}
          </section>
          <section className="flex flex-col justify-center mb-2" id="Contact">
            <div className="text-center">
              <div className="flex justify-center gap-1 items-center">
                <span className="text-[13px] font-medium my-auto">04.</span>
                <span className="text-[16px] font-medium text-secondary">
                  What{"’"}s Next?
                </span>
              </div>
              <h3 className="text-6xl font-semibold text-secondary mt-5">
                Get In Touch
              </h3>
              <p className="w-11/12 md:w-4/6 lg:w-1/2 m-auto text-lg text-secondary-100 leading-6 mt-3">
                My inbox is always open. Whether you have an opportunity, a
                question or just want to say hi, I{"’"}ll try my best to get
                back to you!
              </p>
              <a
                href="mailto:delyceu@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <button className="border mt-[50px] text-[16px] pb-3 mt-50 pt-4 px-8 rounded-sm hover:bg-secondary-100 hover:bg-opacity-20">
                  Say Hello
                </button>
              </a>
              <div className="mt-[200px]">
                <p className="text-secondary-100">
                  Designed & Built by Delyce Twizeyimana
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
