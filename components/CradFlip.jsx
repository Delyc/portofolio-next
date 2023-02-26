import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import stripe from '../public/assets/stripe.png'
import Image from "next/image";
import Link from "next/link";
const CardFlip = ({ image, backText, link }) => {
    const [isFlipped, setIsflipped] = useState(false);
    function handleClick() {
        setIsflipped(!isFlipped);
    }
    return (


        <Link href={`${link}`} target="_b">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
                <div
                    className="grid w-[25rem] h-[15rem] gap-2"
                    onMouseEnter={() => handleClick()}
                    onMouseLeave={() => handleClick()}
                >
                    <Image src={image} layout="fill" alt="test" className=" bg-white/10 px-5 py-10" />
                    {/* <img src={image} alt={name} /> */}
                    {/* <label className="font-bold">{name}</label> */}
                    <label className="">
                       
                    </label>
                </div>
                <div
                    className="grid px-10  h-[15rem] gap-2 bg-white/10 rounded-lg shadow-xl place-content-center"
                    onClick={() => handleClick()}
                >
                    <p className="text-white/70 tracking-[1px] leading-[30px]">{backText}</p>
                  


                </div>
            </ReactCardFlip>
        </Link>
    );
}

export default CardFlip;