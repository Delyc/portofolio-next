import PageWrapper from "../components/Wrappers/PageWrapper";
import postImage from '../public/assets/stripe.png'
import ReactCardFlip from "react-card-flip";
import Image from "next/image";
import { useState } from "react";
import CardFlip from "../components/CradFlip";
import Flipping from "../components/Flipping";

const Flip = () => {
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
        <Flipping />
        </>
     );
}
 
export default Flip;