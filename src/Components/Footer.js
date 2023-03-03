import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='bg-dark footerwala'>
      <footer className='text-light'>
        <div className='widthwala'>
          <div className='row'>
            <div className='col-sm-5 d-flex align-items-center py-4 '>
            <i class="fa-sharp fa-regular fa-paper-plane fa-2x "></i>
            <p className='footer-send'> send mail here  </p>
            </div>
            <div className="col-sm-6 input searchbar py-2">
                <input class="form-control  footer-mail" type="text" placeholder='send us your email please '  aria-label=".form-control-sm example">

                </input>
                
                
            <button className='btn btn-primary'> Send</button>
               
                </div>
          </div>
        </div>
      </footer>
      <footer className='footer-border text-light py-4 align-items-center'>
        <div className='widthwala'>
          <div className='row footer-row'>
            <div className=' col-sm-3 align-items-center'>
            <p className='footer-send'> Contract us </p>
            <div className='contract-items'>  
            <h5 className='text-light'>IOE Purwanchal campus  </h5>
            <h5 className='text-light'>Dharan-8-Sunsari </h5>
            <Link>
            
            <i class="fa-brands fa-2x fa-facebook text-primary px-2"></i>
            </Link>
            <Link>
            
            <i class="fa-brands fa-2x fa-instagram text-danger px-2"></i>
            </Link>
            <Link>
            <i class="fa-brands fa-2x fa-tiktok text-light px-2"></i>
            
            </Link>
            <Link>
            <i class="fa-brands fa-2x fa-twitter text-primary px-2"></i>
            
            </Link>


            </div>

            </div>
            <div className=' col-sm-3 align-items-center'>
            <p className='footer-send'> Information </p>
            <div className='information-items'>
              <p> Privacy policy</p>
              <p> Refused policy</p>
              <p> Snipping policy</p>
              <p> Terms of policy</p>
              <p> Blogs policy</p>
            </div>

            </div>
            <div className=' col-sm-3 align-items-center'>
            <p className='footer-send'>Accounts  </p>
            <div className='account-items'>
              <p>Search</p>
              <p> About us </p>
              <p>Faq </p>
              <p> Contract </p>
              <p>Size chart </p>
            </div>


            </div>
            <div className=' col-sm-3'>
            <p className='footer-send'> Quick lines  </p>
            <div className='footer-links'>
              <Link className='text-light py-2'>Laptops</Link> <br/>
              <Link className='text-light py-2'>Headphone</Link><br/>
              <Link className='text-light py-2'>Tablets</Link><br/>
              <Link className='text-light py-2'>Watch</Link>
            </div>

            </div>
          </div>
        </div>
      </footer>
      <footer className='bg-dark footer-border py-4'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-12 '>
              <p className='text-center text-light'>&copy; {new Date ().getFullYear()}: roshankc813@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
      

    </div>
  )
}
