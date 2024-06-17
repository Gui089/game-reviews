import Heading1 from "@/Components/Heading1";
import Link from "next/link";


const ReviewPage = () => {
    return (
        <>
            <Heading1>Reviews</Heading1>
            <p>Analise aqui</p>
            <nav>
                <ul>
                    <li>
                        <Link href='analises/super-mario-bross-wonder'>Super Mario Bross Wonder</Link>
                    </li>
                    <li>
                        <Link href='analises/sonic-frontiers'>Sonic Frontiers</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default ReviewPage;