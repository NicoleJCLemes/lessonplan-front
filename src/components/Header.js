import HeaderStyle from "../styles/HeaderStyle.js";

export default function Header(props) {
    return (
        <HeaderStyle>Olá, {props.name}</HeaderStyle>
    )
};