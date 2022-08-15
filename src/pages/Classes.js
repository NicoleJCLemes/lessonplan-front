import { useContext, useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
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

    useEffect(() => {
        const promise = api.get("classes", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        promise.then((response) => setCLasses(response.data));
    }, []);

    return (
        <>
            <Link to="/home"><IoIosArrowBack className="back-icon" /></Link>
            <Header name={name} />
            <Main>
                {classes.map((_class) => {
                    return (
                        <div>
                            {_class.name}
                            <p>{_class.address}</p>
                            <p>{_class.telephone}</p>
                            <p><span>{_class.weekDay} /</span><span> {_class.time}</span></p>
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
`