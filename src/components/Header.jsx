import logoImg from '../assets/Logo.svg'
import './Header.css'

export default function Header() {
    return (
        <header >
            <div className="left">
                <img src={logoImg} alt="" />
            </div>
            <nav>
                <ul>
                    <li><a>HOME</a></li>
                    <li><a>ABOUT</a></li>
                    <li><a>MENU</a></li>
                    <li><a>RESERVATION</a></li>
                    <li><a>ORDER ONLINE</a></li>
                    <li><a>LOGIN</a></li>
                </ul>
            </nav>
        </header>
    )
}