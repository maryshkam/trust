import React from 'react';
import './TableRow.css';

const TableRow = ({el, isOpen}) => {
  
  return (
    <div>
      <tr className={isOpen ? 'tr_open' : 'tr_close'}>
        <td className='td'>{el.instrumentID}</td>
        <td className='td'>{el.name}</td>
        <td className='td'>{isOpen ? 'open' : 'close'}
</td>
      </tr>
    </div>
  );
};

export default TableRow;
