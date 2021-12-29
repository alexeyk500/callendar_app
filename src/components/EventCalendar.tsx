import React from 'react';
import {Badge, Calendar} from "antd";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/formatDate";

interface EventCalendarProps {
  events: IEvent[],
}

const EventCalendar: React.FC <EventCalendarProps> = (props) => {

  function dateCellRender(value: Moment) {
    const formattedDate = formatDate(value.toDate())
    const currentDayEvents = props.events.filter(event => event.date === formattedDate)
    return (
      <ul className="events">
        {currentDayEvents.map((event, ind) => (
          <li key={ind} style={{listStyleType: 'none'}}>
            <Badge status={'success'} text={event.description} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Calendar
      dateCellRender={dateCellRender}
    />
  );
};

export default EventCalendar;
