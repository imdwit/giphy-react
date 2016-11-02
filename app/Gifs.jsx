import React from 'react';

const Gif = ({ original, still, playing, rating, handleClick, index }) => {
  return (
    <div className="gif" onClick={() => handleClick(index)}>
      {
        playing
        ? <img className='gif__img' src={original} />
        : <img className='gif__img' src={still} />
      }
      <p>Raing: {rating}</p>
    </div>
  );
};

const Gifs = ({ gifs, handleClick }) => (
  <div>
    {
      gifs.map((gif, i) => (
        <Gif {...gif} handleClick={handleClick} index={i}  key={i} />
      ))
    }
  </div>
);

export default Gifs;
