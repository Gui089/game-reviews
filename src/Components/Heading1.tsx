import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    weight:['700'],
    subsets:['latin'],
    display:'swap',
    style:'normal'
});

interface Props {
    children: String;
}

const Heading1 = ({children}: Props) => {
    return (
        <h1 className={`${montserrat.className} text-lg ml-1`}>{children}</h1>
    )
}

export default Heading1;