'use client'
import { Button, Card, Modal, Form, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Cascader } from 'antd';

function Types() {
  const onChange = (value) => {
    console.log(value);
  };
  const { TextArea } = Input;
  const options = [
    {
      value: 'String',
      label: 'String',
    },
    {
      value: 'number',
      label: 'number',
    },
    {
      value: 'boolean',
      label: 'boolean',
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddDefinitionModalOpen, setIsAddDefinitionModalOpen] = useState(false);
  const [typeId, setTypeId] = useState('');
  const [description, setDescription] = useState('');
  const [definitionName, setDefinitionName] = useState('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    // Xử lý logic khi bấm OK trong modal
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showAddDefinitionModal = () => {
    setIsAddDefinitionModalOpen(true);
  };

  const handleAddDefinitionOk = () => {
    setIsAddDefinitionModalOpen(false);
    // Xử lý logic khi bấm OK trong modal "Add New definition"
  };

  const handleAddDefinitionCancel = () => {
    setIsAddDefinitionModalOpen(false);
  };

  const handleTypeInputChange = (e) => {
    setTypeId(e.target.value);
  };

  const handleDescriptionInputChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDefinitionNameInputChange = (e) => {
    setDefinitionName(e.target.value);
  };

  return (
    <div>
     <Card title="Quest Types" className="w-80 h-screen">
  <Button type="primary" block onClick={showModal}>
    <PlusCircleOutlined className="mr-3" />
    <span className="text">Add New Quest Type</span>
  </Button>
</Card>

      <Modal
        title="Add New Quest Type"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
      <Form.Item
  label="Type ID"
  name="questTypeName"
  rules={[{ required: true, message: 'Vui lòng Nhập Thông Tin !' }]}
>
  <Input value={typeId} onChange={e => setTypeId(e.target.value)} />
</Form.Item>

<Form.Item
  label="Description"
  name="description"
  rules={[{ required: true, message: 'Vui lòng Nhập Thông Tin !' }]}
>
  <TextArea value={description} onChange={e => setDescription(e.target.value)} />
</Form.Item>

      </Modal>

      <Modal
        title="Add New Definition"
        open={isAddDefinitionModalOpen}
        onOk={handleAddDefinitionOk}
        onCancel={handleAddDefinitionCancel}
      >
      <Form.Item
  label="Definition Name"
  name="definitionName"
  rules={[{ required: true, message: 'Vui lòng Nhập Thông Tin !' }]}
>
  <TextArea value={definitionName} onChange={e => setDefinitionName(e.target.value)} />
</Form.Item>

      </Modal>
    </div>
  );
}

export default Types;

