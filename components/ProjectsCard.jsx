import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import usedImage from '../public/assets/stripe.png'
// import { Heading3, Paragraph } from '../ui/Typography';

const ProjectsCard = ({ deployedLink, title, description, image, stacks, index }) => {
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

        <div className='flex flex-col-reverse gap-10 h-auto md:flex md:flex-row justify-between lg:h-[50vh]  mt-20  overflow-x-hidden'>
            <div className={`md:w-1/2 lg:w-2/5 space-y-4 order-2 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                <p className="text-4xl text-white font-bold">{title}</p>
                <p className="text-white/70 text-xl leading-[30px] tracking-[1px]">{description}</p>
                <Link href={deployedLink} target="_b">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H12M8.11111 12H12M12 12V15.8889M12 12L5 19" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Link>

                <div className="flex flex-wrap gap-4">

                    {stacks.map((stack, index) => {
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
                className="relative  flex order-1 h-[30vh] md:h-[50vh] md:w-1/2">

                <div className="w-1/2 h-3/5 relative">
                    <Image layout="fill" className={`  rounded   ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`} src={image} alt="image" />

                </div>

                <div className="w-3/5 h-3/5 absolute top-[3rem]  md:top-[5rem] right-0 md:right-10">
                    <Image layout="fill" className={` rounded ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`} src={image} alt="image" />

                </div>


            </motion.div>
        </div>
    );
}

export default ProjectsCard;
