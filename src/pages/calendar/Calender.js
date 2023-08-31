import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment';

import './calendar.css';

const localizer = momentLocalizer(moment);

function Calender() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [show, setShow] = useState(false);

    const Popup = () => setShow(!show);

    const events = [
        {
            title: 'Event 1',
            start: new Date(2023, 7, 25, 10, 0),
            end: new Date(2023, 7, 25, 12, 0),
            details: 'Details for Event 1',
        },
    ];

    return (
        <div className="app">
            <div className="main-content">
                <div className="content-header">
                    <header className="header">
                        <div className="header-content">
                            <h2>ปฏิทินข่าวสาร</h2>
                        </div>
                    </header>
                    <div className='calender-card'>
                        <Calendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            onSelectEvent={(event) => {
                                setSelectedEvent(event);
                                Popup();
                            }}
                            style={{ height: 500, width: '70%' }}
                        />

                    </div>
                    {selectedEvent && (
                        <Modal show={show} onHide={Popup}>
                            <Modal.Header closeButton>{selectedEvent.title}</Modal.Header>
                            <Modal.Body>
                                <p>{selectedEvent.details}</p>
                                <p>
                                    Start: {selectedEvent.start.toLocaleDateString()} เวลา{' '}
                                    {selectedEvent.start.toLocaleTimeString()}
                                </p>
                                <p>
                                    End: {selectedEvent.end.toLocaleDateString()} เวลา{' '}
                                    {selectedEvent.end.toLocaleTimeString()}
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={Popup}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Calender;
