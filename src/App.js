import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";
import Home from "./pages/Home.js";
import Classes from "./pages/Classes.js";
import Disciplines from "./pages/Disciplines.js";
import GlobalStyle from "./styles/globalStyle.js";
import Reset from "./styles/reset.js";
import UserContext from "./UserContext.js"

export default function App() {

    const savedToken = localStorage.getItem("token");
    const savedName = localStorage.getItem("name");
    const [token, setToken] = useState(savedToken);
    const [name, setName] = useState(savedName);

    return (
        <UserContext.Provider value={{token, setToken, name, setName}}>
            <BrowserRouter>
                <Reset />
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/disciplines" element={<Disciplines />} />
                    <Route path="/classes" element={<Classes />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}