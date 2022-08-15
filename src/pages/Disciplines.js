import { useContext, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AddButton from "../components/AddButton.js";
import Header from "../components/Header.js";
import Navbar from "../components/Navbar.js";
import UserContext from "../UserContext.js";
import api from "../api.js";

export default function Disciplines() {

    const context = useContext(UserContext);
    const { name, token } = context;
    const [disciplines, setDisciplines] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const promise = api.get("disciplines", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        promise.then((response) => setDisciplines(response.data)); // eslint-disable-next-line
    }, []);

    return disciplines.length === 0 ? (
        <>
            <Link to="/home"><IoIosArrowBack className="back-icon" /></Link>
            <Header name={name} />
            <Main>
                <div className="empty-data">Você ainda não possui disciplinas cadastradas!</div>
                <AddButton onClick={() => navigate("/disciplines/create")} />
            </Main>
            <Navbar />
        </>
    ) : (
        <>
            <Link to="/home"><IoIosArrowBack className="back-icon" /></Link>
            <Header name={name} />
            <Main>
                {disciplines.map((discipline) => {
                    return (
                        <div key={discipline.id}>
                            {discipline.name}
                        </div>
                    )
                })}
                <AddButton onClick={() => navigate("/disciplines/create")} />
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
        font-size: 17px;
        padding: 5px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .empty-data {
        width: 80vw;
        height: 65vh;
        border: 1px solid black;
        border-radius: 20px;
        font-size: 17px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`