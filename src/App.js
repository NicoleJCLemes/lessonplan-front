import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";
import GlobalStyle from "./styles/globalStyle.js";
import Reset from "./styles/reset.js";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Reset />
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    {/* <Route path="/home" element={<Home />} />
                    <Route path="/disciplines" element={<Disciplines />} />
                    <Route path="/classes" element={<Classes />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}