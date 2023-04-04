import React, {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import NavbarComponent from "../components/NavbarComponent";
import {Container} from "react-bootstrap";
import axios from "axios";

export default function Appointment() {

    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/appointments')
            .then(response => {
                setAppointments(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const appointmentEvents = appointments.map(appointment => ({
        title: `Rendez-vous avec ${appointment.doctor_id}`,
        start: appointment.start_time,
        end: appointment.end_time
    }));

        return (
            <div className="App">
                <header>
                    <NavbarComponent />
                </header>

                <main>
                    <Container className="mt-5">
                        <FullCalendar plugins={[ dayGridPlugin, interactionPlugin ]}
                                      initialView="dayGridMonth"
                                      events={appointmentEvents}
                                      editable={true}
                                      droppable={true}
                        />
                    </Container>
                </main>
            </div>
        )
}