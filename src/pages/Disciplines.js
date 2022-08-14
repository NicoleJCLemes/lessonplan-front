import { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header.js";
import Navbar from "../components/Navbar.js";
import UserContext from "../UserContext.js";

export default function Disciplines() {

    const context = useContext(UserContext);
    const { name } = context;

    return (
        <>
            <Link to="/home"><IoIosArrowBack className="back-icon" /></Link>
            <Header name={name} />
            <Main>
                <div>
                    Matemática básica
                </div>
                <div>
                    Disciplina top
                </div>
                <div>
                    Se for um nome super grande
                </div>
                <div>
                    Disciplina top
                </div>
            </Main>
            <Navbar />
        </>
    );
};

const Main = styled.main`
    margin: 100px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    div {
        width: 35vw;
        height: 15vh;
        border: 1px solid black;
        margin-bottom: 15px;
        text-align: center;
        font-size: 20px;
        padding: 5px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`