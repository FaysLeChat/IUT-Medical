import React, {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction';
import timeGridWeek from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import {Container} from "react-bootstrap";
import axios from "axios";

export default function Appointment() {

    const [appointments, setAppointments] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/appointments')
            .then(response => {
                const filteredAppointments = response.data.filter(appointment => appointment.patient_id === userId);
                setAppointments(filteredAppointments);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const getUserId = () => {
        setUserId(userId);
    };

    useEffect(() => {
        getUserId();
    }, []);

    const appointmentEvents = appointments.map(appointment => ({
        title: `Rendez-vous avec ${appointment.doctor_id}`,
        start: appointment.start_time,
        end: appointment.end_time,
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