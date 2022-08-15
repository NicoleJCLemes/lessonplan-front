import styled from "styled-components";

const NavbarStyle = styled.footer`
    width: 100%;
    height: 40px;
    font-size: 17px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 0;

    p {
        width: 150px;
        text-align: center;
    }

    .home-icon {
        font-size: 25px;
    }
`

export default NavbarStyle;