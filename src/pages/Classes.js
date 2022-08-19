import { useContext, useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AddButton from "../components/AddButton.js";
import Header from "../components/Header.js";
import Navbar from "../components/Navbar.js";
import UserContext from "../UserContext.js";
import api from "../api.js";

export default function Classes() {

    const context = useContext(UserContext);
    const { name, token } = context;
    const [classes, setCLasses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const promise = api.get("classes", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        promise.then((response) => setCLasses(response.data)); // eslint-disable-next-line
    }, []);

    return classes.length === 0 ? (
        <>
            <Link to="/home"><IoIosArrowBack className="back-icon" /></Link>
            <Header name={name} />
            <Main>
                <div className="empty-data">
                    <p>Você ainda não possui alunos e/ou turmas cadastrados!</p>
                </div>
                <AddButton onClick={() => navigate("/classes/create")} />
            </Main>
            <Navbar />
        </>

    ) : (
        <>
            <Link to="/home"><IoIosArrowBack className="back-icon" /></Link>
            <Header name={name} />
            <Main>
                {classes.map((_class) => {
                    return (
                        <div key={_class.id}>
                            {_class.name}
                            <p>{_class.address}</p>
                            <p>{_class.telephone}</p>
                            <p><span>{_class.weekDay} /</span><span> {_class.time}</span></p>
                        </div>
                    )
                })}
                <AddButton onClick={() => navigate("/classes/create")} />
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
        height: 15vh;
        border: 1px solid black;
        font-size: 20px;
        border-radius: 10px;
        padding: 5px 8px;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-around;
        margin-bottom: 10px;

        p {
            font-size: 15px;
        }
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