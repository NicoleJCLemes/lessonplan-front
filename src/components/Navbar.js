import { IoIosHome } from "react-icons/io";
import { Link } from "react-router-dom";
import NavbarStyle from "../styles/NavbarStyle.js";

export default function Navbar() {
    return (
        <NavbarStyle>
            <Link to="/disciplines"><p>Disciplinas</p></Link>
            <Link to="/home"><IoIosHome className="home-icon" /></Link>
            <Link to="/classes"><p>Alunos/Turmas</p></Link>
        </NavbarStyle>
    )
}