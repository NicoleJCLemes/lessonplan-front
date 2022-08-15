import { useContext, useEffect, useState } from "react";
import Button from "../components/Button.js";
import Form from "../styles/Form.js";
import Input from "../styles/Input.js";
import api from "../api.js";
import UserContext from "../UserContext.js";
import { Link, useNavigate } from "react-router-dom";
import Container from "../styles/Container.js";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

export default function CreateLessons() {
    const [classes, setClasses] = useState([]);
    const [classId, setClassId] = useState(0);
    const [disciplines, setDisciplines] = useState([]);
    const [disciplineId, setDisciplineId] = useState(0);
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
    const [notes, setNotes] = useState("");
    const context = useContext(UserContext);
    const { token } = context;

    const navigate = useNavigate();

    useEffect(() => {
        const disciplinePromise = api.get("disciplines", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        disciplinePromise.then((response) => setDisciplines(response.data)); // eslint-disable-next-line

        const classPromise = api.get("classes", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        classPromise.then((response) => setClasses(response.data)); // eslint-disable-next-line
    }, []);

    function sendLessons() {

        const body = {
            classId,
            disciplineId,
            date,
            content,
            notes
        };

        const promise = api.post("lessons", body, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        
        promise.then((response) => navigate("/home"));
        promise.catch((error) => {alert(error.response.data.error?error.response.data.error:error.response.data); console.log(body)});
    }

    function handleSubmit(e) {
        e.preventDefault();
        sendLessons();
    }

    function disciplineClick(id) {
        console.log(id);
        setDisciplineId(id);
    }

    function classClick(id) {
        console.log(id);
        setClassId(id);
    }

    return disciplines.length === 0 && classes.length === 0 ? (
        <>
            loading...
        </>
    ) : (
        <Container>
            <Div>
                <Link to="/home"><IoIosArrowBack className="back-icon" /></Link>
                <Form onSubmit={handleSubmit}>
                    <div className="options">
                        <div className="disciplines">
                            <p>Disciplinas:</p>
                            <div>
                                {disciplines.map((discipline) => {
                                    return (
                                        <button type="button" key={discipline.id} onClick={() => disciplineClick(discipline.id)} className="discipline">
                                            {discipline.name}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="classes">
                            <p>Alunos/Turmas:</p>
                            <div>
                                {classes.map((_class) => {
                                    return (
                                        <button type="button" key={_class.id} onClick={() => classClick(_class.id)} className="class">
                                            {_class.name} {_class.weekDay} {_class.time}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <Input type="text" placeholder="YYYY-MM-DD" value={date} onChange={(e) => setDate(e.target.value)} required />
                    <Input type="text" placeholder="conteúdo" value={content} onChange={(e) => setContent(e.target.value)} required />
                    <Input type="text" placeholder="anotações" value={notes} onChange={(e) => setNotes(e.target.value)} required />
                    <Button type="submit" name="Criar" />
                </Form>
            </Div>
        </Container>
    )
};

const Div = styled.div`

    form {
        height: 100%;
        margin: 0;
        padding-top: 100px;
        padding-bottom: 50px;
    }

    .options {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .disciplines, .classes {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        p {
            margin-bottom: 10px;
        }

        div {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }

        button {
            margin-bottom: 7px;
            width: 100px;
            word-break: break-word;
        }
    }
`

