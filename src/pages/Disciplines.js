import { useContext, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
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

    useEffect(() => {
        const promise = api.get("disciplines", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        promise.then((response) => setDisciplines(response.data));
    }, []);

    return (
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
                <AddButton />
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
`