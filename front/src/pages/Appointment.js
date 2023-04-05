import React, {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction';
import timeGridWeek from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import {Container} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Appointment(props) {
    const amigo = props.cookie.amigo;
    const email = amigo && amigo.email;
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/appointments/${email}`)
            .then(response => {
                setAppointments(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const appointmentEvents = appointments.map(appointment => ({
        title: `Rendez-vous avec ${appointment.doctor_id}`,
        start: new Date(appointment.start_time.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1')),
        end: new Date(appointment.end_time.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1')),
        id: appointment.id
    }));

    const deleteEvent = (id) => {
        axios
            .delete(`http://localhost:8000/appointments/${id}`)
            .then((response) => {
                console.log(response.data);
                const updatedEvents = appointmentEvents.filter((event) => event.id !== id);
                setAppointments(updatedEvents);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleEventDelete = (clickInfo) => {
        const eventId = clickInfo.event.id;
        const eventStart = clickInfo.event.start;
        const eventEnd = clickInfo.event.end;
        if (window.confirm(`Êtes-vous sûr de vouloir supprimer le créneau du "${eventStart}" au "${eventEnd}" ?`)) {
            console.log(eventId);
            deleteEvent(eventId);
            clickInfo.event.remove();
            window.location.reload();
        }
    };

    return (
        <div className="App">
            <main>
                <Container className="mt-5">
                    <div className="d-flex justify-content-between mb-3">
                        <Link to="/newAppointment" className="btn btn-primary mb-3">
                            Ajouter un rendez-vous
                        </Link>
                    </div>
                    <FullCalendar plugins={[ timeGridWeek, interactionPlugin ]}
                                  initialView="timeGridWeek"
                                  events={appointmentEvents}
                                  editable={true}
                                  droppable={true}
                                  locale={frLocale}
                                  eventClick={handleEventDelete}
                    />
                </Container>
            </main>
        </div>
    )
}