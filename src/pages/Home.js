import { useContext, useState, useEffect } from "react";
import { IoIosExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AddButton from "../components/AddButton.js";
import Header from "../components/Header.js";
import Navbar from "../components/Navbar.js";
import UserContext from "../UserContext.js";
import api from "../api.js";

export default function Home() {

    const navigate = useNavigate();
    const context = useContext(UserContext);
    const { name, token } = context;
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        const promise = api.get("lessons", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        promise.then((response) => setLessons(response.data.reverse())); // eslint-disable-next-line
    }, []);

    function logOut() {
        localStorage.clear();
        navigate("/");
    };

    return lessons.length === 0 ? (
        <Container>
            <IoIosExit className="exit-icon" onClick={logOut} />
            <Header name={name} />
            <main>
                <div>Você não tem planejamentos ainda!</div>
                <AddButton onClick={() => navigate("/lessons/create")} />
            </main>
            <Navbar />
        </Container>
    ) : (
        <Container>
            <IoIosExit className="exit-icon" onClick={logOut} />
            <Header name={name} />
            <main>
            <h1>Planejamentos:</h1>
                {lessons.map((lesson) => {
                    return (
                        <div key={lesson.id} className="lessons">
                            <p><span>Nome: </span>{lesson.class.name}</p>
                            <p><span>Disciplinas: </span>{lesson.discipline.name}</p>
                            <p><span>Data: </span>{lesson.date} / <span>Hora: </span>{lesson.class.time}</p>
                            <p><span>Conteúdo: </span>{lesson.content}</p>
                            <p><span>Notas: </span>{lesson.notes}</p>
                        </div>
                    )
                })}
                <AddButton onClick={() => navigate("/lessons/create")} />
            </main>
            <Navbar />
        </Container>
    )
};

const Container = styled.div`
    height: 100vh;

    h1 {
        margin-bottom: 10px;
        font-size: 17px;
    }

    .exit-icon {
        font-size: 30px;
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 1;
    }

    main {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 100px;
        padding-bottom: 50px;
    }

    main div {
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

    .lessons {
        height: auto;
        padding: 10px 10px 2px 10px;
        margin-bottom: 10px;
    }

    div p {
        margin-bottom: 8px;

        span {
            font-weight: 700;
        }
    }
`

