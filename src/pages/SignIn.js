import Logo from "../components/Logo.js";
import Container from "../styles/Container.js";
import Form from "../styles/Form.js";
import Input from "../styles/Input.js";
import Button from "../components/Button.js";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext.js";
import api from "../api.js";
import styled from "styled-components";
import Responsive from "../styles/Responsive.js";

export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const context = useContext(UserContext);
    const { setToken, setName } = context;

    function login() {
        const loginData = {
            email,
            password
        };

        const promise = api.post("sign-in", loginData);

        promise.then((response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("name", response.data.name);
            setName(response.data.name);
            setToken(response.data.token);
            navigate("/home");
        });

        promise.catch((error) => { 
            alert(error.response.data.error?error.response.data.error:error.response.data);
            navigate("/");
            window.location.reload(true);
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        login();
    };

    return (
    <Responsive>
        <Container>
            <Logo />
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <Input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <Div>
                    <Button type="submit" name="Entrar" />
                    <p onClick={() => navigate("/sign-up")}>Cadastrar</p>
                </Div>
            </Form>
        </Container>
    </Responsive>
    )
};

const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: space-around;
    text-align: center;
    line-height: 50px;
    font-size: 15px;
    margin-top: 10px;

    button {
        margin: 0;
        width: 40%;
    }

    p {
        width: 40%;
        height: 50px;
        border: none;
        background-color: #DCDCDC;
        border-radius: 10px;
        box-shadow: 0 0 5px 1px rgba(0,0,0,0.5);    
        font-size: 15px;
    }
`