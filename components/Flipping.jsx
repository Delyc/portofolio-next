import PageWrapper from "../components/Wrappers/PageWrapper";
import postImage from '../public/assets/stripe.png'
import ReactCardFlip from "react-card-flip";
import Image from "next/image";
import { useState } from "react";
import CardFlip from "../components/CradFlip";

const Flipping = () => {
    const [activeCard, setActiveCard] = useState(false);
    const handleCardClick = () => {
        setActiveCard(!activeCard);
    };

    const arr = [
        {
            image : "/assets/stripe.png",
            back: "Cinnamon website clone, cloned using nextJS and tiwlindCSS",
            link: "https://cinnamon-clone-7jaqp79sg-delyc.vercel.app/"

        },
        {
            image : "/assets/stripe.png",
            back: "Strip clone, cloned using nextJS and tiwlindCSS",
            link: "https://stripe-delyc.vercel.app/"

        },
        

        {
            image : "/assets/stripe.png",
            back: "Cozy website clone, cloned using nextJS and tiwlindCSS",
            link: "cozy-cloning-5tmjt1vgc-delyc.vercel.app"

        },
        
        {
            image : "/assets/stripe.png",
            back: "Buildt website clone, cloned using nextJS and tiwlindCSS",
            link: "https://buildit-website-w3u3.vercel.app/"

        },
        

    ]


    return ( 
        <>
        <PageWrapper>
        <div className=" grid grid-cols-1 xl:grid-cols-4  gap-y-5 relative gap-x-10 w-full mt-10">
            {arr.map((ar, index) => {
                return(
                    <CardFlip image={ar.image} backText={ar.back} link={ar.link}/>
                )
            })}
                    {/* <ReactCardFlip  isFlipped={activeCard} flipDirection="horizontal">
                                    <div className="front" onMouseEnter={() => handleCardClick()} onMouseLeave={() => handleCardClick()}>
                                        <Image src={postImage} alt="Post image" />
                                        <h1>Hwllpo</h1>
                                    </div>
                                    <div className="back" onClick={()=>handleCardClick}>
                                        <h1>Back</h1>
                                    </div>
                                </ReactCardFlip> */}

                                {/* <ReactCardFlip  isFlipped={activeCard} flipDirection="horizontal">
                                    <div className="front" onMouseEnter={() => handleCardClick()} onMouseLeave={() => handleCardClick()}>
                                        <Image src={postImage} alt="Post image" />
                                        <h1>Hwllpo</h1>
                                    </div>
                                    <div className="back" onClick={()=>handleCardClick}>
                                        <h1>Back</h1>
                                    </div>
                                </ReactCardFlip> */}


                                {/* <ReactCardFlip  isFlipped={activeCard} flipDirection="horizontal">
                                    <div className="front" onMouseEnter={() => handleCardClick()} onMouseLeave={() => handleCardClick()}>
                                        <Image src={postImage} alt="Post image" />
                                        <h1>Hwllpo</h1>
                                    </div>
                                    <div className="back" onClick={()=>handleCardClick}>
                                        <h1>Back</h1>
                                    </div>

                                </ReactCardFlip> */}
{/* 
                                <ReactCardFlip  isFlipped={activeCard} flipDirection="horizontal">
                                    <div className="front" onMouseEnter={() => handleCardClick()} onMouseLeave={() => handleCardClick()}>
                                        <Image src={postImage} alt="Post image" />
                                        <h1>Hwllpo</h1>
                                    </div>
                                    <div className="back" onClick={()=>handleCardClick}>
                                        <h1>Back</h1>
                                    </div>
                                </ReactCardFlip> */}
                                





                    </div>
        </PageWrapper>
        </>
     );
}
 
export default Flipping;