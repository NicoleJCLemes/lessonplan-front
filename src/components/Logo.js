import LogoStyle from "../styles/LogoStyle.js";
import logo from "../assets/logo.png";

export default function Header() {
    return (
        <LogoStyle>
            <img src={logo} alt="logo com livros, um ao lado do outro" />
            <h1>lesson plan</h1>
        </LogoStyle>
    )
}