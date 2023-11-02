//Logo
import logo from '../../logo.svg';

//style
import HeadStyle from "./Header.style";

const Header = ({isOpen, setIsOpen, setter, loggedIn, nameData}) => {
    const toggleIsOpen = () =>{
        setIsOpen((prev) => !prev)
    }

    let btnVal = isOpen ? "Close":"Add New"

    return (
        <HeadStyle>
            <ul>
                <li>
                        <img src={logo} alt="logo png"/>
                </li>
                <li>
                    {loggedIn && <button onClick={toggleIsOpen}>
                        {btnVal}
                    </button>}
                </li>
                <li>
                    {loggedIn && <span onDoubleClick={()=>{setter(false)}}> Welcome, {nameData.userName.toUpperCase()}</span>}
                    <h1>
                        {!loggedIn && 'TODO App'} 
                    </h1>
                </li>
            </ul>
        </HeadStyle>
    )
}

export default Header; 
