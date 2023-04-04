import React, {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction';
import timeGridWeek from '@fullcalendar/timegrid';
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
                <main>
                    <Container className="mt-5">
                        <FullCalendar plugins={[ timeGridWeek, interactionPlugin ]}
                                      initialView="timeGridWeek"
                                      events={appointmentEvents}
                                      editable={true}
                                      droppable={true}
                        />
                    </Container>
                </main>
            </div>
        )
}