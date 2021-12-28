import React, {useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";

const Event:React.FC = () => {

  const [isModalVisible, setIsModalVisible] = useState(false)

  const onClickAddEvent = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div>
      <EventCalendar
        events={[]}
      />
      <Row justify={'center'}>
        <Button
          onClick={onClickAddEvent}
        >
          add Event
        </Button>
      </Row>
      <Modal
        title="Create Event for calendar"
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <EventForm />
      </Modal>
    </div>
  );
};

export default Event;
