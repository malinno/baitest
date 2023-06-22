'use client'
import { Button, Card, Input, Modal } from 'antd';
import React, { useState } from 'react';

function Types() {
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [showValue, setShowValue] = useState(false);
  const [dataList, setDataList] = useState([]);

  const [selectedData, setSelectedData] = useState(null); // Dữ liệu được chọn để chỉnh sửa

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    if (inputValue || textareaValue) {
      if (selectedData) {
        // Chỉnh sửa dữ liệu đã chọn
        const updatedDataList = dataList.map((data) =>
          data === selectedData ? { ...data, input: inputValue, textarea: textareaValue } : data
        );
        setDataList(updatedDataList);
        setSelectedData(null);
      } else {
        // Thêm dữ liệu mới
        const newData = { input: inputValue, textarea: textareaValue };
        setDataList([...dataList, newData]);
      }
      setInputValue('');
      setTextareaValue('');
      setShowValue(true);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setInputValue('');
    setTextareaValue('');
    setSelectedData(null);
  };

  const handleEdit = (data) => {
    setIsModalOpen(true);
    setSelectedData(data);
    setInputValue(data.input);
    setTextareaValue(data.textarea);
  };

  const handleDelete = (data) => {
    const updatedDataList = dataList.filter((item) => item !== data);
    setDataList(updatedDataList);
    if (selectedData === data) {
      setInputValue('');
      setTextareaValue('');
      setSelectedData(null);
    }
  };

  return (
    <div>
      <Card title="Quest Types" className="w-80 h-screen">
        <Button type="primary" className="bg-lime-700" onClick={showModal}>
          Add New Quest Type
        </Button>
        {showValue ? (
          <div>
            {dataList.map((data, index) => (
              <div key={index}>
                <p className='text-2xl font-semibold'>Quest type:{data.input}</p>
                <p className='text-lg'>{data.textarea}</p>
                <Button type="primary" className='bg-amber-400 mx-2' onClick={() => handleEdit(data)}>
                  <span className='text-blue-600/100'>Edit Quest </span>
                </Button>
                <Button type="primary" className='bg-red-700' danger onClick={() => handleDelete(data)}>
                 <span className='text-blue-600/100'>Delete Quest </span> 
                </Button>
              </div>
            ))}
          </div>
        ) : null}
        <Modal title="Basic Modal" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Input onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
          <TextArea onChange={(e) => setTextareaValue(e.target.value)} value={textareaValue} className="my-3" />
        </Modal>
      </Card>
    </div>
  );
}

export default Types;



