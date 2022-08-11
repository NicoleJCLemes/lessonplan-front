import { IoIosExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    function logOut() {
        localStorage.clear();
        navigate("/");
    }

    return (
        <IoIosExit fontSize="30px" onClick={logOut} />
    )
}

