import React, {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction';
import timeGridWeek from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import {Container} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import {getUserByEmail, isDoctorByEmail} from "../services/userService";
import NotLoggedComponent from "../components/NotLoggedComponent";

export default function Appointment(props) {
    const [appointments, setAppointments] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const [isDoctor, setIsDoctor] = useState(null);

    const amigo = props.cookie.amigo;
    const email = amigo && amigo.email;

    useEffect(() => {
        axios.get(`http://localhost:8000/appointments/${email}`)
            .then(response => {
                setAppointments(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        async function fetchData() {
            const fetchedUserInfo = await getUserByEmail(email);
            setUserInfo(fetchedUserInfo);
        }
        async function checkDoctorStatus() {
            const isDoctorResult = await isDoctorByEmail(email);
            setIsDoctor(isDoctorResult);
        }
        checkDoctorStatus();
        fetchData();
    }, [email]);

    const appointmentEvents = appointments.map(appointment => ({
        title: `Rendez-vous avec ${appointment.doctor_id}`,
        start: appointment.start_time,
        end: appointment.end_time,
        id: appointment.id,
        user_id: appointment.user_id,
        doctor_id: appointment.doctor_id,
        patient_id: appointment.patient_id
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

    const handleEventUpdate = (eventInfo) => {
        const updatedEvent = {
            id: eventInfo.event.id,
            start_time: eventInfo.event.start,
            end_time: eventInfo.event.end,
            user_id: eventInfo.event.extendedProps.user_id,
            doctor_id: eventInfo.event.extendedProps.doctor_id,
            patient_id: eventInfo.event.extendedProps.patient_id
        };
        axios.put(`http://localhost:8000/appointments/${updatedEvent.id}`, updatedEvent)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="App">
            <main>
                { amigo === undefined ? (
                    <NotLoggedComponent />
                ) : (
                    <Container className="mt-5">
                        {!isDoctor && (
                            <div className="d-flex justify-content-between mb-3">
                                <Link to="/newAppointment" className="btn btn-primary mb-3">
                                    Ajouter un rendez-vous
                                </Link>
                            </div>
                        )}
                        <FullCalendar plugins={[ timeGridWeek, interactionPlugin ]}
                                      initialView="timeGridWeek"
                                      events={appointmentEvents}
                                      editable={true}
                                      droppable={true}
                                      locale={frLocale}
                                      eventClick={handleEventDelete}
                                      eventDrop={handleEventUpdate}
                        />
                    </Container>
                )}
            </main>
        </div>
    )
}
