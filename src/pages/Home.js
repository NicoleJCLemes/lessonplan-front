import { useContext } from "react";
import { IoIosExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header.js";
import Navbar from "../components/Navbar.js";
import UserContext from "../UserContext.js";

export default function Home() {

    const navigate = useNavigate();
    const context = useContext(UserContext);
    const { name } = context;

    function logOut() {
        localStorage.clear();
        navigate("/");
    }

    return (
        <Container>
            <IoIosExit className="exit-icon" onClick={logOut} />
            <Header name={name} />
            <main>
                <div>Você não tem planejamentos ainda!</div>
                <button>+</button>
            </main>
            <Navbar />
        </Container>

    );
};

const Container = styled.div`
    height: 100vh;

    .exit-icon {
        font-size: 30px;
        position: absolute;
        top: 10px;
        right: 10px;
    }

    main {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    main div {
        width: 80vw;
        height: 65vh;
        border: 1px solid black;
        border-radius: 20px;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    button {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        position: absolute;
        right: 20px;
        bottom: 85px;
        font-size: 40px;
        border: none;
        background-color: aquamarine;
    }
`

