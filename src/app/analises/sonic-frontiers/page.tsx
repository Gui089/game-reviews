import Heading1 from "@/Components/Heading1";
import Image from "next/image";


const SonicReviewPage = () => {
    return (
        <>
            <Heading1>Sonic Frontiers - Analise</Heading1>
            <Image 
                width='640'
                height='360'
                className="rounded-lg mt-5 mb-5" 
                src="/images/sonic-frontiers.jpg"
                alt="Logo do jogo" 
                priority/>
            <p>Analise do Sonic Frontiers aqui</p>
        </>
    )
}

export default SonicReviewPage;