import Heading1 from "@/Components/Heading1";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from 'next/font/google';


const montserrat = Montserrat({
    weight:['500'],
    subsets:['latin'],
    display:'swap'
});

const reviews = [
    {title: 'Super Mario Bros. Wonder', path:'analises/super-mario-bross-wonder', img:'/images/super-mario-bros-wonder.jpg'},
    {title:'Sonic Frontiers', path:'analises/sonic-frontiers', img:'/images/sonic-frontiers.jpg'}
]

const ReviewPage = () => {
    return (
        <>
            <Heading1>Análises</Heading1>
            <nav>
                <ul className="flex-row flex mt-3">
                    {reviews.map(review=> 
                        <li key={review.title} className="bg-slate-700 flex justify-center rounded-xl mr-4 text-center">
                        <Link className="mb-3" href={review.path}>
                            <Image 
                                className="mb-3 rounded-t-xl"
                                src={review.img} 
                                alt=''
                                width='320'
                                height='180'
                                />
                            <h1 className={montserrat.className}>{review.title}</h1>
                        </Link>
                      </li>
                    )}
                </ul>
            </nav>
        </>
    )
}

export default ReviewPage;