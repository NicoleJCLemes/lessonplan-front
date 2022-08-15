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
        promise.then((response) => setLessons(response.data));
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
                <AddButton />
            </main>
            <Navbar />
        </Container>

    ) : (
        <Container>
            <IoIosExit className="exit-icon" onClick={logOut} />
            <Header name={name} />
            <main>
                {lessons.map((lesson) => {
                    return (
                        <div className="lessons">
                            <p>{lesson.class.name}</p>
                            <p>{lesson.discipline.name}</p>
                            <p>{lesson.date}</p>
                            <p>{lesson.content}</p>
                            <p>{lesson.notes}</p>
                        </div>
                    )
                })}
                <AddButton />
            </main>
            <Navbar />
        </Container>
    )
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
        font-size: 17px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .lessons {
        height: auto;
        padding: 10px;
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 8px;
    }
`

