//Logo
import logo from '../../logo.svg';

//style
import HeadStyle from "./Header.style";

const Header = ({isOpen, setIsOpen}) => {
    const toggleIsOpen = () =>{
        setIsOpen((prev) => !prev)
    }

    let btnVal = isOpen ? "Close":"Add New"

    return (
        <HeadStyle>
            <ul>
                <li>
                    <a 
                    href='/'>
                        <img src={logo} alt="logo png"/>
                    </a>
                </li>
                <li>
                    <button onClick={toggleIsOpen}>
                        {btnVal}
                    </button>
                    </li>
                <li>
                    <h1>
                        To Do Website
                    </h1>
                </li>
            </ul>
        </HeadStyle>
    )
}

export default Header; 
