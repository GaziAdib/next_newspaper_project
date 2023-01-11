import Link from "next/link"

const Navbar = () => {
    return (
        <div>
            <Link href={'/about'}>About</Link>
            <Link href={'/'}>Home</Link>
        </div>
    )
}

export default Navbar