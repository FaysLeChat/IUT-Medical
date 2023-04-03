import React from 'react';
import {Container, Row, Col, Carousel, Button, Form, Card, Accordion, useAccordionButton} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import cbanner1 from '../assets/img/cbanner1.jpg';
import cbanner2 from '../assets/img/cbanner2.png';
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

const Home = () => {
    return (
        <div className="App">
            <header>
                <NavbarComponent />
            </header>

            <main>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={cbanner1} alt="Première diapositive" />
                        <Carousel.Caption>
                            <h3>Bienvenue</h3>
                            <p>Tu cherches des informations à propos du cabinet ? Tu te trouve au bon endroit !</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={cbanner2} alt="Deuxième diapositive" />
                        <Carousel.Caption>
                            <h3>Un rendez-vous à prendre ?</h3>
                            <p>Avec ce site prend ton rendez-vous facilement avec ton médecin en quelques cliques seulement !</p>
                            <button type="button" className="rounded-pill mt-3 btn btn-primary">Prendre rendez-vous</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Container className="mt-5">
                    <Row>
                        <Col md={4}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <Card.Title>Prendre rendez-vous</Card.Title>
                                    <Form>
                                        <Form.Group controlId="appointmentDate">
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control type="date" />
                                        </Form.Group>
                                        <Form.Group controlId="appointmentTime">
                                            <Form.Label>Heure</Form.Label>
                                            <Form.Control type="time" />
                                        </Form.Group>
                                        <Button variant="outline-primary" className="rounded-pill mt-3">Valider</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={8}>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Card.Header>
                                        <CustomToggle eventKey="0">Informations</CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <p>
                                                Le cabinet médical du Docteur Amigo se situe à l'IUT de Lens et offre des services de médecine générale de qualité à ses patients depuis plus de 15 ans. Le Docteur Amigo est diplômé de la faculté de médecine de Paris et possède une vaste expérience dans la prise en charge de diverses affections et maladies courantes. Notre équipe dévouée de professionnels de la santé travaille en étroite collaboration pour offrir un service personnalisé et adapté aux besoins de chaque patient. Nous proposons des consultations médicales, des examens de routine, des vaccinations et des services de diagnostic pour les patients de tous âges. Notre objectif est de fournir des soins médicaux de premier ordre dans un environnement accueillant et confortable. Prenez rendez-vous dès aujourd'hui pour découvrir comment nous pouvons vous aider à maintenir une bonne santé et un mode de vie équilibré.
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <CustomToggle eventKey="1">Horaires d'ouverture</CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <p>Lundi - Vendredi : 9h00 - 18h00</p>
                                            <p>Samedi : 9h00 - 14h00</p>
                                            <p>Dimanche : Fermé</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5 mb-3">
                    <Row>
                        <Col className="text-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.162462691348!2d2.8057496516895477!3d50.43807447937281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd308a7c58a0ef%3A0xf3d8ea1d73a955e!2sIUT%20de%20Lens%20-%20Universite%20d&#39;Artois!5e0!3m2!1sfr!2sfr!4v1680525743085!5m2!1sfr!2sfr"
                                width="100%" height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map - FullMedical Alchemist"
                            ></iframe>
                        </Col>
                    </Row>
                </Container>

                <FooterComponent />
            </main>
        </div>
    );
};

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <button type="button" onClick={decoratedOnClick}>
            {children}
        </button>
    );
}

export default Home;