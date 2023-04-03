import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import NavbarComponent from "../components/NavbarComponent"; // a plugin!

export default function Appointment() {
        return (
            <div className="App">
                <header>
                    <NavbarComponent />
                </header>

                <main>
                    <FullCalendar
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                    />
                </main>
            </div>
        )
}