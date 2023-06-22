'use client'
import { Button, Card } from 'antd'
import React from 'react'

function Gennerui() {
    const code = `
    {
        "typeID": "receive_money",
        "typeData": {
          "amount": 500
       
    }`;
    const codes = `
    {
        "typeID": "receive_money",
        "typeData": {
          "amount": 1000
    }`
    
  return (
    <div>
    <Card
    title="Generated Quests"
    bordered={false}
   className='w-80 h-screen'
  >
   <Card >
    <p>
        Receive at least 500
    </p>
    
  </Card>
  <Card className='my-2'>
    <p>
        Pay bills multiple times
    </p>
    
  </Card>
  <Card className='my-2'>
  <pre style={{ fontFamily: 'Arial', fontSize: '14px', background: '#f5f5f5', padding: '10px' }}>
        {code}
      </pre>
    
  </Card>
  <Card className='my-2'>
  <pre style={{ fontFamily: 'Arial', fontSize: '14px', background: '#f5f5f5', padding: '10px' }}>
        {codes}
      </pre>
    
  </Card>
  </Card>
    </div>
  )
}

export default Gennerui