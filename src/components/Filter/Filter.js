import React from 'react';
import './Filter.css'

//его стейт в арр

const Filter = ({ filter, onChange }) => (
  <label className="label">
    Find contacts by name
    <input type="text" value={filter} onChange={onChange} />
  </label>
);

export default Filter;

   