import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import axios from "axios";
import login from "../assets/img/login.png";
import {getUserByEmail} from "../services/userService";

export default function NewAppointment(props){
    const amigo = props.cookie.amigo;
    const email = amigo && amigo.email;
    const [userInfo, setUserInfo] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [patient, setPatient] = useState([]);
    const [newAppointment, setNewAppointment] = useState({start_time: "", end_time: "", user_id: 0, doctor_id: 0, patient_id: 0});


    useEffect(() => {
        fetch('http://localhost:8000/doctors/nameandid')
            .then(response => response.json())
            .then(data => setDoctors(data))
            .catch(error => console.error(error));
        fetch('http://localhost:8000/patients')
            .then(response => response.json())
            .then(data => setPatient(data))
            .catch(error => console.error(error));
        async function fetchData() {
            const fetchedUserInfo = await getUserByEmail(email);
            setUserInfo(fetchedUserInfo);
        }
        fetchData();
    }, []);
    const handleTextChange = (event, type) => {
        const value = type === 'number' ? Number(event.target.value) : event.target.value;
        setNewAppointment({ ...newAppointment, [event.target.name]: value, user_id: userInfo && userInfo.id });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = (await axios.post("http://localhost:8000/appointments", newAppointment)).data;
            if (response.id === undefined) {
                alert("Ajout impossible");
            } else {
                window.location.replace("http://localhost:3000/appointment");
            }
            setNewAppointment({start_time: "", end_time: "", user_id: userInfo && userInfo.id, doctor_id: 0, patient_id: 0});
        } catch (e) {
            console.error("ERR", e);
        }
    }

    return (
        <div className="App">
            <main>
                <Container className="mt-5">
                    <Row>
                        <Col md={6}>
                            <Image src={login} alt="Image d'inscription" fluid className="w-50 h-100"/>
                        </Col>
                        <Col md={6}>
                            <h1>Prenez rendez-vous</h1>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <label>Date et heure de début</label>
                                    <Col>
                                        <Form.Group controlId="appointmentStartDate">
                                            <Form.Control type="datetime-local" name="start_time" value={newAppointment.start_time} onChange={(e) => handleTextChange(e)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <label>Date et heure de fin</label>
                                    <Col>
                                        <Form.Group controlId="appointmentEndDate">
                                            <Form.Control type="datetime-local" name="end_time" value={newAppointment.end_time} onChange={(e) => handleTextChange(e)} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group controlId="appointmentDoctorId">
                                    <Form.Label>Docteur</Form.Label>
                                    <Form.Control as="select" name="doctor_id" onChange={(e) => handleTextChange(e)}>
                                        <option value="">Sélectionner un docteur</option>
                                        {doctors.map((doctor) => (
                                            <option key={doctor.id} value={doctor.id}>
                                                {doctor.name}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="appointmentPatientId">
                                    <Form.Label>Identifiant du patient</Form.Label>
                                    <Form.Control type="number" name="patient_id" placeholder="Identifiant du patient" value={newAppointment.patient_id} onChange={(e) => handleTextChange(e, 'number')} />
                                </Form.Group>
                                <Form.Group controlId="appointmentUserId">
                                    <Form.Label>Identifiant de l'utilisateur</Form.Label>
                                    <Form.Control type="number" name="user_id" placeholder="Identifiant de l'utilisateur" value={userInfo && userInfo.id} onChange={(e) => handleTextChange(e, 'number')} />
                                </Form.Group>

                                <hr />

                                <Button variant="primary" type="submit" className="w-100 mb-3">
                                    Ajouter le rendez-vous
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
}
