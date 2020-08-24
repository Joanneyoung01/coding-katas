import React from 'react';

export const Selector = (props) => {
  return (
    <select id="drop-down" onChange={e => props.setCategory(e.target.value)}>
      <option value="dragons">dragons</option>
      <option value="rockets">rockets</option>
    </select>
  ); 
}
