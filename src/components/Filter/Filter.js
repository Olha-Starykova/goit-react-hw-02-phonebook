import React from 'react';

//его стейт в арр

const Filter = ({ filter, onChange }) => (
  <label>
    Фильтр по имени
    <input type="text" value={filter} onChange={onChange} />
  </label>
);

export default Filter;