import React from "react";
import { allPaintings } from "../../database/paintingData";
import "./painting.css";

const Painting = (props) => {
  const mappedPainting = allPaintings.map((painting, index) => {
    console.log(props);
    return (
      <>
        {/*//TODO: Note: We need to give a key when using map(). Can do it two ways: If the array has an id, then do the second way. If not, can use the "index" of the array as a key (First way)      <li key={index}>{painting.title}</li>   <li key={painting.id}>{painting.title}</li> */}
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <ul className="individualItemWrapper">
            <li>
              <img
                src={painting.img}
                className="paintingImage"
                alt="Painting"
              />
            </li>
            <li key={index} className="itemTitle">
              {painting.title}
            </li>
            <li className="itemPrice">${painting.price}</li>
            <li className="itemDescription">{painting.description}</li>
            <li className="itemInCart">{painting.inCart}</li>
            <li className="itemInStock">{painting.count}</li>
            <li className="itemTotalAmount">{painting.total}</li>
          </ul>
          <hr />
        </div>
      </>
    );
  });
  return (
    <>
      <div className="container text-center">
        <div className="row d-flex flex-row">{mappedPainting}</div>
      </div>
    </>
  );
};
export default Painting;
