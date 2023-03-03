import React from "react";
import { Link, NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <div className="rapper">
      <header className="header-top-strip py-2 bg-dark">
        <div className="container-xl">
          <div className="align-items-center d-flex justify-content-between">
            <div >
                <p className="text-light"> Do shopping more get more gift  hampers   </p>
            </div>
              <div s>
                <p className="text-end"> 

                <Link className="text-light" to="tel:+977 9827489335">+977  9827489335</Link>
                </p>
              </div>
          </div>
        </div>
      </header>
      <header className="header-upper bg-dark py-2">
        <div className="container-xl">
            <div className="row">
                <div className="col-2">
                    <strong className="fs-2 text-secondary"> <Link> Flat no 3</Link></strong>
                </div>
                <div className="col-4 input searchbar py-2">
                <input className="form-control w-2" type="text" placeholder="Search product here " aria-label=".form-control-sm example">

                </input>
                
                
                <i className="fa-solid fa-1.2x  fa-magnifying-glass-plus input-group-text glass"></i>
                </div>
               
                <div className="col-5 d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="d-flex ">
                    <i className="fa-solid fa-code-compare fa-2x mx-2"></i>
                    <p className="text-white"> Compare <br/> Items </p>
                    </Link>
                  </div>
                  <div>
                  <Link className="d-flex ">
                    <i className="fa-regular fa-heart fa-2x  mx-2"></i>
                    <p className="text-white"> Favorite  <br/> Items </p>
                    </Link>
                  </div>
                  <div>
                  <Link className="d-flex ">
                    <i className="fa-solid fa-user fa-2x mx-2 "></i>
                    <p className="text-white"> login <br/> here  </p>
                    </Link>
                  </div>
                  <div>
                    <Link className="d-flex">
                    <i className="fa-sharp fa-solid fa-cart-shopping fa-2x mx-2"></i>
                
                    <div className="mx-2">
                      <span className="text-dark bg-white my-1 px-2 fs-6">0</span><br></br>
                      <span className="text-dark bg-light">$0.00</span>
                    </div>
                    </Link>
                  </div>
                </div>
                
            </div>
        </div>
      </header>
      <header className="header-buttom py-3 bg-secondary">
        <div className="container-xl">
          <div className="row">
          <div className="col-12">
            <div className="menu-buttom d-flex align-items-center">
         
              <div className="dropdown mx-5 bg-secondary nav-dropdown ">
  <button className="btn  dropdown-toggle border-0 text-dark nav-items nav-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="fa-solid fa-shield-halved fa-1.5x mx-1"></i> Shop catagories 
  </button>
  <ul className="dropdown-menu ">
    <li><Link className="dropdown-item active" to="#">Action</Link></li>
    <li><Link className="dropdown-item" to="#">Another action</Link></li>
    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
    <li><hr className="dropdown-divider"/></li>
    <li><Link className="dropdown-item" to="#">Separated link</Link></li>
  </ul>
</div>
          
              <div className="menu-links"> 
              <NavLink to='/' className='text-white nav-items'>Home</NavLink>
              <NavLink to='/' className='text-white nav-items'>Our Store </NavLink>
              <NavLink to='/' className='text-white nav-items'>Blogs</NavLink>
              <NavLink to='/contract' className='text-white nav-items'>Contract</NavLink>
              </div>

            </div>
          </div>
          </div>
         
        </div>
      </header>
    </div>
  );
};
