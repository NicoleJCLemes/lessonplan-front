import Header from "../components/Header.js";
import Form from "../styles/Form.js";
import Input from "../styles/Input.js";
import Container from "../styles/Container.js";
import Button from "../components/Button.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api.js";

export default function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const navigate = useNavigate();

    function register() {
        const userData = {
            name,
            email,
            password,
            repeat_password: repeatPassword
        }

        const promise = api.post("sign-up", userData);
        
        promise.then((response) => {
            alert("Registered successfully"); 
            navigate("/")
        });

        promise.catch((error) => { 
            alert(error.response.statusText);
            navigate("/sign-up");
            window.location.reload(true)
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        register();
    }

    return (
        <Container>
            <Header />
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="nome" value={name} onChange={(e) => setName(e.target.value)} required />
                <Input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <Input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <Input type="password" placeholder="confirme a senha" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} required />
                <Button type="submit" name="Cadastrar" />
            </Form>
        </Container>
    )
}