import styled from "styled-components";

const NavbarStyle = styled.footer`
    width: 100%;
    height: 50px;
    font-size: 17px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    background-color: #4682B4;

    p {
        width: 150px;
        text-align: center;
        margin-bottom: 0;
    }

    .home-icon {
        font-size: 25px;
    }
`

export default NavbarStyle;