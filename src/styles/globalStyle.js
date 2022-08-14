import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

body{
    min-height: 100vh;
    width: 100%;
    font-family: 'Poppins', sans-serif;
}

.root{
    min-height: 100vh;
}

a{
    text-decoration: none;
    color: #000000;
}
.back-icon {
    position: absolute;
    top: 15px;
    left: 10px;
    font-size: 20px;
}
`

export default GlobalStyle;