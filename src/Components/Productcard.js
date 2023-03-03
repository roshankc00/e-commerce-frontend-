import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
function Productcard() {
   
  return (

    <div className='col-sm-3 bg-light '>
    <div className="card  position-relative justifu-content-center">
        <i className="fa-regular fa-heart l-0 d-flex justify-content-end p-2  "></i>
  <img src="images/headphone.jpg" className="card-img-top" alt="product-image "/>
  <div className="card-body">
       <h6 className='text-danger'> Havels </h6>
       <p> Kidds Headphone Bulk 10 pack Multi colored for..</p>
       <ReactStars
    count={5}
  value='3'
    size={24}
    edit={false}
    activeColor="#ffd700"
  />
       <span> $100.00</span>
  </div>
  <div className='active-bar position-absolute'>
    <div className='d-flex flex-column'>
        <Link>
        <img src='images/add-cart.svg' alt='addcard' className='my-2'/>
        </Link>
        <Link>
        <img src='images/prodcompare.svg' alt='compare'  className='my-2'/>
        </Link>
        <Link>
        <img src='images/view.svg' alt='view'  className='my-2'/>
        </Link>
     
    </div>
 
  </div>
    </div>
    </div>
  )
}

export default Productcard