import React from 'react';
import PropTypes from 'prop-types';
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

TableRow.propTypes = {
  isOpen: PropTypes.func,
  el: PropTypes.shape ({
    instrumentID: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tradingHours: PropTypes.arrayOf (
      PropTypes.shape({
        from: PropTypes.number.isRequired,
        to: PropTypes.number.isRequired
      })
    )
  })
};

export default TableRow;
