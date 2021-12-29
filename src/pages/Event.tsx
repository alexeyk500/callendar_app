import React, {useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";

const Event:React.FC = () => {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const {fetchGuests, createEvent, fetchEvents} = useActions()

  const {guests, events} = useTypedSelector(state => state.eventsReducer)
  const {user} = useTypedSelector(state => state.authReducer)

  useEffect(()=>{
    fetchGuests()
    fetchEvents(user.username)
    // eslint-disable-next-line
  }, [])

  const onClickAddEvent = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onSubmit = (event: IEvent) => {
    createEvent(event)
    setIsModalVisible(false)
  }

  return (
    <div style={{maxWidth: '1400px', margin: '0 auto',}}>
      <Row justify={"center"} align={"middle"} className={"h100"} >
          <EventCalendar
            events={events}
          />
          <Row justify={'center'}>
            <Button
              type={'primary'}
              onClick={onClickAddEvent}
            >
              add Event
            </Button>
          </Row>
      </Row>

      <Modal
        title="Create Event for calendar"
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <EventForm
          guests={guests}
          onSubmit = {onSubmit}
        />
      </Modal>
    </div>
  );
};

export default Event;
