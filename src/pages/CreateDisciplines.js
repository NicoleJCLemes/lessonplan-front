import { useContext, useState } from "react";
import Button from "../components/Button.js";
import Form from "../styles/Form.js";
import Input from "../styles/Input.js";
import api from "../api.js";
import UserContext from "../UserContext.js";
import { Link, useNavigate } from "react-router-dom";
import Container from "../styles/Container.js";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

export default function CreateDisciplines() {

    const [disciplineName, setDisciplineName] = useState("");
    const context = useContext(UserContext);
    const { token } = context;

    const navigate = useNavigate();

    function sendDiscipline() {
        const promise = api.post("disciplines", { name: disciplineName[0].toUpperCase() + disciplineName.substring(1) }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        
        promise.then((response) => navigate("/disciplines"));
        promise.catch((error) => alert(error.response.data.error?error.response.data.error:error.response.data));
    }

    function handleSubmit(e) {
        e.preventDefault();
        sendDiscipline();
    }

    return (
        <Container>
            <Div>
                <Link to="/disciplines"><IoIosArrowBack className="back-icon" /></Link>
                <Form onSubmit={handleSubmit}>
                    <Input type="text" placeholder="nome da disciplina" value={disciplineName} onChange={(e) => setDisciplineName(e.target.value)} required />
                    <Button type="submit" name="Criar" />
                </Form>
            </Div>
        </Container>
    )
};

const Div = styled.div`

    form {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    }

    height: 100%;
`