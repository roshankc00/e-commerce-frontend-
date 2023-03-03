import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
function  Specialproduct() {
  return (
    <div className='col-sm-4 bg-light '>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src='images/watch.jpg' alt='watch' className='img-fluid'></img>
                </div>
                <div className='special-product-content'>
                    <h5 className='text-danger'> Havels</h5>
                    <h6>Samssung galaxy Note10+ MobilePhone:siz..........</h6>
                    <ReactStars
    count={5}
  value='3'
    size={24}
    edit={false}
    activeColor="#ffd700"
  />
  <p> <span className='text-danger'>$60.00</span> <span> $76.00</span></p>
  <div className='discount-till  d-flex align-items-center '> 

  <div className='d-flex  '>
    <span className=' mx-2'><b> 5days </b></span>
    <span className='badge rounded-circle bg-danger mx-2'>23</span>
    <span className='badge rounded-circle bg-danger mx-2'>23</span>
    <span className='badge rounded-circle bg-danger mx-2'>23</span>
  </div>
\
  </div>
  <div className='prod-count my-4'>
    <p> Progress 5 </p>
    <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{"width": "25%" }}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  </div>
  <Link className='btn btn-danger rounded-4'> Add to card </Link>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Specialproduct