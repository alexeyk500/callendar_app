import React, {useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/formatDate";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {validatorIsDataAfter} from "../utils/validatorIsDataAfter";

interface EventFormProps {
  guests: IUser[],
  onSubmit: (event: IEvent)=>void,
}

const EventForm:React.FC <EventFormProps> = (props) => {

  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: ''
  })

  const {user} = useTypedSelector(state => state.authReducer)

  const onChangeDescription = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setEvent({...event, description: e.target.value})
  }

  const onChangeGuest = (guest: string) => {
    setEvent({...event, guest: guest})
  }

  const onChangeDatePicker = (date: Moment | null) => {
    if (date) {
      setEvent({...event, date: formatDate(date.toDate())})
    }
  }

  const onSubmitForm = () => {
    console.log('event', {...event, author: user.username})
    props.onSubmit({...event, author: user.username})
  }

  return (
    <Form
      onFinish={onSubmitForm}
    >
      <Form.Item
        label="Event description"
        name="description"
        rules={[{ required: true, message: 'Please type your description!' }]}
      >
        <Input
          autoComplete={'off'}
          value={event.description}
          onChange={onChangeDescription}
        />
      </Form.Item>

      <Form.Item
        label="Select date"
        name="datePicker"
        rules={[{ required: true}, validatorIsDataAfter('Selected data is too late')]}
      >
        <DatePicker onChange={onChangeDatePicker} />
      </Form.Item>

      <Form.Item
        label="Select guest"
        name="guest"
      >
        <Select
          onChange={onChangeGuest}
        >
          {
            props.guests.map(user=>{
              return (
                <Select.Option
                  key={user.username}
                  value={user.username}
                >
                  {user.username}
                </Select.Option>)
            })
          }
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Row justify={'end'}>
          <Button type="primary" htmlType="submit" >
            Create
          </Button>
        </Row>
      </Form.Item>

    </Form>
  );
};

export default EventForm;
