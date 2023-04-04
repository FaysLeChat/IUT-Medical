import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import NavbarComponent from "../components/NavbarComponent";
import {Container} from "react-bootstrap";

export default function Appointment() {
        return (
            <div className="App">
                <header>
                    <NavbarComponent />
                </header>

                <main>
                    <Container className="mt-5">
                        <FullCalendar plugins={[ dayGridPlugin ]} initialView="dayGridMonth" />
                    </Container>
                </main>
            </div>
        )
}