import React from "react";
import { Link } from "react-router-dom";

function Blogcard() {
  return (
    <div className='col-sm-3 bg-light '>
      <div className="card">
        <img src="images/blog-1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h4>A Beautiful sunday moring renaissance </h4>
          <p className="card-text">
            {" "}
            always the better way for me is me thats over thanks{" "}
          </p>
         <Link className="btn btn-danger"> Learn more </Link>
        </div>
      </div>
    </div>
  );
}

export default Blogcard;
