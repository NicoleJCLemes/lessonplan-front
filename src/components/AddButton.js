import AddButtonStyle from "../styles/AddButtonStyle.js";

export default function AddButton(props) {
    return (
        <AddButtonStyle onClick={props.onClick}>+</AddButtonStyle>
    )
}