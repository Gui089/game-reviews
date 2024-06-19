import Heading1 from "@/Components/Heading1";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight:['500'],
    subsets:['latin'],
    display:'swap'
});

const ReviewPage = () => {
    return (
        <>
            <Heading1>Análises</Heading1>
            <nav>
                <ul className="flex-row flex mt-3">
                    <li className="bg-slate-700 flex justify-center rounded-xl mr-4 text-center">
                        <Link className="mb-3" href='analises/super-mario-bross-wonder'>
                            <Image 
                                className="mb-3 rounded-t-xl"
                                src="/images/super-mario-bros-wonder.jpg" 
                                alt="Logo SuperMario" 
                                width='320'
                                height='180'
                                />
                            <h1 className={montserrat.className}>Super Mario Bros Wonder</h1>
                        </Link>
                    </li>
                    <li className="bg-slate-700 flex justify-center rounded-xl text-center">
                        <Link href='analises/sonic-frontiers'>
                            <Image 
                                className="mb-3 rounded-t-xl"
                                src="/images/sonic-frontiers.jpg" 
                                alt="Logo SuperMario" 
                                width='320'
                                height='180'
                                />
                            <h2 className={montserrat.className}>Sonic Frontiers</h2>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default ReviewPage;