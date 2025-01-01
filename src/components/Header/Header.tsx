import Image from 'next/image'
import logo from '../../assets/logo.svg'

export default function Header() {
    return(
        <header>
            <Image src={logo} alt='Logotype'/>
        </header>
    )
}