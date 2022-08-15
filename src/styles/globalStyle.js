import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body{
    min-height: 100vh;
    width: 100%;
}

.root{
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
}

a{
    text-decoration: none;
    color: #000000;
}
.back-icon {
    position: fixed;
    top: 15px;
    left: 10px;
    font-size: 20px;
    z-index: 1;
}
`

export default GlobalStyle;