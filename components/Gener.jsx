'use client'
import { Button, Card } from 'antd';
import { Input } from 'antd';
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';

function Gener() {
  const { TextArea } = Input;
  const [assumptions, setAssumptions] = useState([]); // Trạng thái lưu trữ dữ liệu assumptions
  const [newAssumption, setNewAssumption] = useState(''); // Trạng thái lưu trữ dữ liệu giả định mới

  useEffect(() => {
    // Lấy dữ liệu từ localStorage khi component được mount
    const storedAssumptions = localStorage.getItem('assumptions');
    if (storedAssumptions) {
      setAssumptions(JSON.parse(storedAssumptions));
    }
  }, []);

  useEffect(() => {
    // Lưu dữ liệu assumptions vào localStorage khi có sự thay đổi
    localStorage.setItem('assumptions', JSON.stringify(assumptions));
  }, [assumptions]);

  const handleAddAssumption = () => {
    // Xử lý logic khi bấm nút "Thêm"
    // Ở đây, chúng ta sẽ thêm giả định mới vào mảng assumptions
    setAssumptions([...assumptions, newAssumption]); // Thêm giả định mới vào mảng
    setNewAssumption(''); // Reset giá trị của ô input
  };

  const handleDeleteAssumption = (index) => {
    // Xử lý logic khi bấm nút "Xóa" của một giả định
    const updatedAssumptions = [...assumptions];
    updatedAssumptions.splice(index, 1); // Xóa giả định khỏi mảng
    setAssumptions(updatedAssumptions);
  };

  return (
    <div>
      <Card title="" bordered={false} className='w-80 h-screen'>
        <div className='my-4'>
          <Button className=" bg-lime-600 w-20" block>
            Generate quests
          </Button>
          <Button className=" bg-slate-400" block>
            Export configs
          </Button>
          <Button className="stroke-emerald-600  bg-slate-400" block>
            Import configs
          </Button>
          <Button className="stroke-emerald-600  bg-slate-400" block>
            Reset configs to default
          </Button>
        </div>
        <div bordered={false}>
          <h1>User description</h1>
          <TextArea />
        </div>
        <div>
          <h1>Assumptions</h1>
          <div className="flex">
            <Input
              value={newAssumption}
              onChange={(e) => setNewAssumption(e.target.value)}
              placeholder=""
            />
            <Button onClick={handleAddAssumption} type="primary" className='bg-lime-500' block 
            icon={<PlusCircleOutlined/>} />
          </div>
          {assumptions.map((assumption, index) => (
            <div key={index} className="flex items-center">
              <p>{assumption}</p>
              <Button onClick={() => handleDeleteAssumption(index)}>
                <DeleteOutlined />
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Gener;



