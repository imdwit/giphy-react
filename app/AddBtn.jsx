import React from 'react';

const AddBtn = ({ handleKeyUp }) => (
  <input placeholder='add a topic' onKeyUp={handleKeyUp}/>
)

export default AddBtn;
