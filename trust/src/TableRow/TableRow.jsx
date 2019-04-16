import React from 'react';

const TableRow = ({el, time}) => {
  console.log(el.tradingHours);
  return (
    <div>
      <tr className='tr'>
        <td className='td'></td>
        <td className='td'>{el.instrumentID}</td>
        <td className='td'>{el.name}</td>
        
{/*  {el.tradingHours.some(elem=> elem.from <= {time} && {time} <= elem.to ? <td className='td'>open</td> : <td className='td'>close</td>)} */}

        <td className='td'>{el.tradingHours.some(elem=> elem.from <= {time} && {time} <= elem.to ? <td className='td'>'open'</td> : <td className='td'>'close'</td>)}
</td>
      </tr>
    </div>
  );
};

export default TableRow;
