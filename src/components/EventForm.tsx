import React, {useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";

const EventForm:React.FC = () => {

  const [description, setDescription] = useState('')

  const onChangeEvent = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  const onChangeDatePicker = () => {

  }

  return (
    <Form>
      <Form.Item
        label="description"
        name="description"
        rules={[{ required: true, message: 'Please type your description!' }]}
      >
        <Input
          autoComplete={'off'}
          value={description}
          onChange={onChangeEvent}
        />
      </Form.Item>

      <Form.Item
        label="datePicker"
        name="datePicker"
        rules={[{ required: true}]}
      >
        <DatePicker onChange={onChangeDatePicker} />
      </Form.Item>

      <Form.Item
        label="select"
        name="select"
      >
        <Select>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
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
