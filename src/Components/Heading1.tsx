
interface Props {
    children: String;
}

const Heading1 = ({children}: Props) => {
    return (
        <h1 className="font-semibold text-2xl pb-1">{children}</h1>
    )
}

export default Heading1;