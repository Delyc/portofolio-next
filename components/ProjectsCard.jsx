import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image from 'next/image'
import usedImage from '../public/assets/stripe.png'
// import { Heading3, Paragraph } from '../ui/Typography';

const ProjectsCard = ({ deployedLink, title, description, image , stacks, index}) => {
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
        
        <div className='flex flex-col md:flex md:flex-row md:justify-between gap-8 md:grid-cols-2 py-8 md:py-14.25 md:mt-12.5 overflow-x-hidden'>
            <div className={`md:w-3/4 lg:w-153.5 xl:w-141.25 space-y-4 order-2 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                <p className="text-white/70 text-xl leading-[30px] tracking-[1px]">{description}</p>
            </div>
            <motion.div
                ref={ref}
                variants={boxVariants}
                initial="hidden"
                animate={control}
                className="flex flex-col items-center order-1 w-1/2 md:justify-center">
                <Image className={`${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`} src={usedImage} alt="image" />
            <div className="flex gap-10">
                  
            {stacks.map((stack, index) => {
                return(
                    <p key={index} className="text-white/50 bg-white/10 py-1 px-3 rounded">{stack.name}</p>
                )
            })}
            </div>
          
            </motion.div>
        </div>
    );
}

export default ProjectsCard;
