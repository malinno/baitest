'use client'
import { Card } from 'antd';
import React from 'react';

function Prompt() {
  return (
    <div>
      <Card title="Prompt" bordered={false} className='w-80 h-screen'>
        <p className='text-xs'>
          Generate quests (wrapped in {'<quests>'} tag) based 
          <br/>on the assumptions provided in {'<assumptions>'} 
          <br/>and the user description provided in {'<user_description>'}, 
          <br/>strictly follow the format instructions provided in {'<format-instructions>'}.
          Generated quests must fit the description of the available 
          quest types, provided in {'<quest-types>'}.
        </p>
        <p className='text-xs'>
          Quest types:
          <pre className='text-xs'>
            {`<quest-types>
- Quest type "receive_money". Receive money 
from another sources. 
This quest requires user to receive more 
than a certain amount of money.
Its typeData must have a field named amount. 
the minimum amount that user 
should receive to complete the quest
- Quest type "pay_bills_via_qr". 
This quest requires user to pay his bills 
multiple times. 
Its typeData must have a field named amount. 
The amount user is willing to pay
- Quest type "end_of_day_balance". 
This quest requires user to keep his balance 
till the end of day. 
Its typeData must have a field named amount. 
The amount user have to keep in his balance
- Quest type "transfer". 
This quest requires user to make transfer
 transactions. 
Its typeData must have a field named amount. 
The amount user have to transfer
- Quest type "saving". This quest requires 
user 
to deposit money into his saving account. 
Its typeData must have a field named amount. 
The amount user have to deposit`}
          </pre>
        </p>
        <p className='text-xs'>
          Assumptions:
          <pre className='text-xs'>
            {`<assumptions>
- User usually spend 1k to pay bills
- User with income more than 5k often deposit 
1k to his saving account
- Don't show "pay_bills_via_qr" to user 
without
 saving account.
- Encourage user with income less than 5k to 
receive at least 500 a day.
- generate exactly 2 quests`}
          </pre>
        </p>
        <p className='text-xs'>
          User description:
          <pre>
            {`<user_description>
This user often pay the bills. His income is 
2k.
 He doesn't have a saving account`}
          </pre>
        </p>
        
       
      </Card>
    </div>
  );
}

export default Prompt;
