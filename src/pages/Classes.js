import { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header.js";
import Navbar from "../components/Navbar.js";
import UserContext from "../UserContext.js";

export default function Classes() {

    const context = useContext(UserContext);
    const { name } = context;

    return (
        <>
            <Link to="/home"><IoIosArrowBack className="back-icon" /></Link>
            <Header name={name} />
            <Main>
                <div>
                    Aluno top
                    <p>Endereço</p>
                    <p><span>Dia da semana /</span><span> Horário</span></p>
                </div>
                <div>
                    Aluno top
                    <p>Endereço</p>
                    <p><span>Dia da semana /</span><span> Horário</span></p>
                </div>
                <div>
                    Aluno top
                    <p>Endereço</p>
                    <p><span>Dia da semana /</span><span> Horário</span></p>
                </div>
            </Main>
            <Navbar />
        </>
    );
};

const Main = styled.main`
    margin: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    div {
        width: 80vw;
        height: 12vh;
        border: 1px solid black;
        font-size: 22px;
        border-radius: 10px;
        padding: 5px 8px;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-around;
        margin-bottom: 10px;

        p {
            font-size: 17px;
        }
    }
`