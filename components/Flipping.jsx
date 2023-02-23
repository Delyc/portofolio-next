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
            back: "testtttting flip",

        },
        {
            image : "/assets/stripe.png",
            back: "testtttting flip",

        },
        

        {
            image : "/assets/stripe.png",
            back: "testtttting flip",

        },
        
        {
            image : "/assets/stripe.png",
            back: "testtttting flip",

        },
        

    ]


    return ( 
        <>
        <PageWrapper>
        <div className=" grid grid-cols-1 xl:grid-cols-4  gap-y-5 relative gap-x-10 w-full mt-10">
            {arr.map((ar, index) => {
                return(
                    <CardFlip image={ar.image}/>
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