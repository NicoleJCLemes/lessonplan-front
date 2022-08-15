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

export default function CreateClasses() {

    const [className, setClassName] = useState("");
    const [address, setAddress] = useState("");
    const [time, setTime] = useState("");
    const [weekDay, setWeekDay] = useState("");
    const [telephone, setTelephone] = useState("");
    const context = useContext(UserContext);
    const { token } = context;

    const navigate = useNavigate();

    function sendClass() {
        const promise = api.post("classes", { 
            name: className,
            address,
            time,
            weekDay,
            telephone
         }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        
        promise.then((response) => navigate("/classes"));
        promise.catch((error) => alert(error.response.data.error?error.response.data.error:error.response.data));
    }

    function handleSubmit(e) {
        e.preventDefault();
        sendClass();
    }

    return (
        <Container>
            <Link to="/classes"><IoIosArrowBack className="back-icon" /></Link>
            <Div>
                <Form onSubmit={handleSubmit}>
                    <Input type="text" placeholder="nome do aluno/turma" value={className} onChange={(e) => setClassName(e.target.value)} required />
                    <Input type="text" placeholder="endereço" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                    <Input type="text" placeholder="(xx)xxxxx-xxxx" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
                    <div className="radio">
                        <label>
                            <Input className="input" type="radio" value="Segunda" onChange={(e) => setWeekDay(e.target.value)} required />Segunda
                        </label>
                        <label>
                            <Input className="input" type="radio" value="Terça" onChange={(e) => setWeekDay(e.target.value)} required />Terça
                        </label>
                        <label>
                            <Input className="input" type="radio" value="Quarta" onChange={(e) => setWeekDay(e.target.value)} required />Quarta
                        </label>
                        <label>
                            <Input className="input" type="radio" value="Quinta" onChange={(e) => setWeekDay(e.target.value)} required />Quinta
                        </label>
                        <label>
                            <Input className="input" type="radio" value="Sexta" onChange={(e) => setWeekDay(e.target.value)} required />Sexta
                        </label>
                    </div>
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
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .radio {
        width: 100%;
    
        label {
            width: 100%;
            height: 25px;
            display: flex;
            align-items: center;
            text-align: center;
        }
    
        .input {
            width: 18px;
        }
    }

`