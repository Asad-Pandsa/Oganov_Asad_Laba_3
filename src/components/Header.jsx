import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/ui/uiSlice";
import "../styles/header.css";
import logo from "../photo/My_Logo.png";
import { FaMoon } from "react-icons/fa";




const Header = () => {

    const dispatch = useDispatch();

    return(
        <header className="header">
            <div className="header-inner container">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>

                <nav className="nav">
                    <a href="#">Главная</a>
                    <a href="#">О нас</a>
                    <a href="#">Контакты</a>
                </nav>

                <button className="btn" onClick={() => dispatch(toggleTheme())}>
                    <FaMoon />
                </button>




            </div>
        </header>
    )

}







export default Header