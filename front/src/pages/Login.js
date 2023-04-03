import {Button, Container, Form} from "react-bootstrap";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Signin() {
    const [person, setPerson] = useState({name: "", password: ""});
    const navigate = useNavigate();

    function handleTextChange(e, label) {
        setPerson({...person, [label]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = (await axios.post("http://localhost:8000/login", person)).data;
            if (response.token === undefined) {
                alert("échec de connexion");
            } else {
                alert(response.token);
            }
            setPerson({name: "", password: ""});
        } catch (e) {
            console.error("ERR", e);
        }
    }

    return (
        <Container>
            <div className="row justify-content-md-center">
                <div className="col col-lg-3">
                    <h1 className="person-title">Se connecter</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="personName">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="Nom" value={person.name}
                                          onChange={e => handleTextChange(e, "name")}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="personPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="" value={person.password}
                                          onChange={e => handleTextChange(e, "password")}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            OK
                        </Button>{"  "}
                        <Button variant="primary" type="button" onClick={() => navigate("/register")}>
                            Créer un compte
                        </Button>
                    </Form>
                </div>
            </div>
        </Container>
    );
}
