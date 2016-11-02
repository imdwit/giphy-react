import React from 'react';

const Button = ({ handleClick, topic}) => (
  <button onClick={() => handleClick(topic) }>{topic}</button>
);

const ButtonGroup = ({handleClick, topics}) => (
  <div>
    {
      topics.map((topic, i) => (
        <Button topic={topic} handleClick={handleClick} key={i} />
      ))
    }
  </div>
);

export default ButtonGroup;
