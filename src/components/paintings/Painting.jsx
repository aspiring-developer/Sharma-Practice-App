import React from 'react';
import { allPaintings } from '../../database/paintingData';

const Painting = (props) => {
  const mappedPainting = allPaintings.map((painting, index) => {

    return (
      <>
        {/*//TODO: Note: We need to give a key when using map(). Can do it two ways: If the array has an id, then do the second way. If not, can use the "index" of the array as a key (First way)      <li key={index}>{painting.title}</li>   <li key={painting.id}>{painting.title}</li> */}
        <li>`<img src={painting.img} alt="Painting" />` </li>
        <li key={index}>{painting.title}</li>
        <li>{painting.price}</li>
        <li>{painting.description}</li>
        <li>{painting.inCart}</li>
        <li>{painting.count}</li>
        <li>{painting.total}</li>
        <hr />
      </>
    )
  });
  return (
    <>
      {mappedPainting}
    </>
  )
}
export default Painting;