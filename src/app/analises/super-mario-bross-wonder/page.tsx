import Heading1 from "@/Components/Heading1";
import Image from "next/image";


const MarioWonderReview = () => {
    return (
        <>
            <Heading1>Super mario Bros - analise</Heading1>
            <Image 
                width='640' 
                height='360' 
                className="rounded-lg mt-5 mb-5"
                src="/images/super-mario-bros-wonder.jpg" 
                alt="Logo do jogo Super Mario Bors Wonder" 
                priority/>
            <p>Review do super mario Wonder Review</p>
        </>
    )
}

export default MarioWonderReview;