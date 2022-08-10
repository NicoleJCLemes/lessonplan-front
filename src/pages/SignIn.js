import Header from "../components/Header.js";
import Container from "../styles/Container.js";
import Form from "../styles/Form.js";
import Input from "../styles/Input.js";
import Button from "../components/Button.js";

export default function SignIn() {
    return (
        <Container>
            <Header />
            <Form>
                <Input />
                <Input />
                <Button name="Entrar" />
            </Form>
        </Container>
    )
}