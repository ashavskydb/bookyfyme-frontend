import React, { useEffect, useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import calendarService from "../../services/calendarService";
import "./Calendar.css";

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const result = await calendarService.getEvents();
        setEvents(
          result.map((event) => ({
            ...event,
            start: new Date(event.eventDate),
            end: new Date(event.eventDate),
          }))
        );
      } catch (error) {
        console.error("Failed to fetch events", error);
      }
    };
    fetchEvents();
  }, []);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title) {
      const newEvent = { title, eventDate: start };
      calendarService
        .createEvent(newEvent)
        .then((response) => {
          setEvents([
            ...events,
            {
              ...response,
              start: new Date(response.eventDate),
              end: new Date(response.eventDate),
            },
          ]);
        })
        .catch((error) => {
          console.error("Error creating event:", error);
        });
    }
  };

  return (
    <div className="calendar-widget">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "800%", width: "250%" }}
        selectable
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

export default Calendar;
