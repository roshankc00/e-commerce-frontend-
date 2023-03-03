import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Blogcard from "../Components/Blogcard";
import Productcard from "../Components/Productcard";
import Specialproduct from "../Components/Specialproduct";
function Home() {
  return (
    <div>
      <>
        <section className="home-wrapper-1 py-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <div className="main-banner position-relative">
                  <img
                    src="images/main-banner-1.jpg"
                    alt="#"
                    className="img-fluid rounded-3"
                  ></img>
                  <div className="main-banner-content position-absolute">
                    <h6 className="text-permanent">SUPERCHARGED FOR PROS</h6>
                    <h4 className="text-permanent">ipad s13+ pro</h4>
                    <p className="paragraph-items"> $1099 or $49.2/mo</p>

                    <Link className="btn btn-danger roundedwala"> Buy now</Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex flex-wrap justify-content-between align-items-center ">
                  <div className="row p-1">
                    <div className="small-banner position-relative col-sm-6">
                      <img
                        src="images/catbanner-01.jpg"
                        alt="#"
                        className="img-fluid rounded-3"
                      ></img>

                      <div className="small-banner-content position-absolute ">
                        <h4 className="text-permanent">ipad s13+ pro</h4>
                        <h5 className="text-permanent fs-6">
                          SUPERCHARGED FOR PROS
                        </h5>
                        <p className="paragraph-items">
                          {" "}
                          $9999 <br />r $49.2/mo
                        </p>
                      </div>
                    </div>
                    <div className="small-banner position-relative col-sm-6">
                      <img
                        src="images/catbanner-03.jpg"
                        alt="#"
                        className="img-fluid rounded-3"
                      ></img>
                      <div className="small-banner-content position-absolute">
                        <span className="text-permanent fs-6">
                          SUPERCHARGED FOR PROS
                        </span>
                        <br></br>
                        <h4 className="text-permanent">Ipad air </h4>
                        <p className="paragraph-items">
                          {" "}
                          $999 <br /> $41.2/mo
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="small-banner position-relative col-sm-6">
                      <img
                        src="images/catbanner-02.jpg"
                        alt="#"
                        className="img-fluid rounded-3"
                      ></img>

                      <div className="small-banner-content position-absolute">
                        <span className="text-permanent fs-6">
                          SUPERCHARGED FOR PROS
                        </span>
                        <br></br>
                        <h4 className="text-permanent">Smart Watch</h4>
                        <p className="paragraph-items">
                          {" "}
                          $599 <br /> $20.2/mo
                        </p>
                      </div>
                    </div>
                    <div className="small-banner position-relative col-sm-6">
                      <img
                        src="images/catbanner-04.jpg"
                        alt="#"
                        className="img-fluid rounded-3"
                      ></img>
                      <div className="small-banner-content position-absolute">
                        <span className="text-permanent fs-6">
                          SUPERCHARGED FOR PROS
                        </span>
                        <h4 className="text-permanent">Airpods Max </h4>
                        <p className="paragraph-items">
                          {" "}
                          $499 <br /> $15.2/mo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-wrapper-2 py-4 ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="services d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center ">
                    <img src="images/service.png" alt="#" className="gap-10" />
                    <div>
                      <h6> Free Shiping</h6>
                      <p className="paragraph-items">
                        {" "}
                        from all orders over $5
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <img
                      src="images/service-02.png"
                      alt="#"
                      className="gap-10"
                    />
                    <div>
                      <h6> Daily Surprise Offers</h6>
                      <p> Save upto 25% off </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <img
                      src="images/service-03.png"
                      alt="#"
                      className="gap-10"
                    />
                    <div>
                      <h6> Support 24/7</h6>
                      <p> Shop with an export </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <img
                      src="images/service-04.png"
                      alt="#"
                      className="gap-10"
                    />
                    <div>
                      <h6> Affortable prices </h6>
                      <p> Get Factory Default page </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <img
                      src="images/service-05.png"
                      alt="#"
                      className="gap-10"
                    />
                    <div>
                      <h6> Secure payment </h6>
                      <p> !00% Protected payment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-wrapper-3 py-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="catagories d-flex justify-content-between align-items-center  ">
                  <div className="d-flex align-items-center">
                    <div>
                      <h6>Camras</h6>
                      <p> 10items</p>
                    </div>
                    <div>
                      <img src="images/camera.jpg" alt="catagories " />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div>
                      <h6>Smart tvs</h6>
                      <p> 10items</p>
                    </div>
                    <div>
                      <img src="images/tv.jpg" alt="catagories " />
                    </div>
                  </div>
                  <div className="d-flex  align-items-center">
                    <div>
                      <h6>Smart Watches</h6>
                      <p> 10 items</p>
                    </div>
                    <div>
                      <img
                        src="images/watch.jpg"
                        alt="catagories "
                        height="130px"
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div>
                      <h6>headphone </h6>
                      <p> 10items</p>
                    </div>
                    <div>
                      <img src="images/headphone.jpg" alt="catagories " />
                    </div>
                  </div>
                </div>
                <div className="catagories d-flex justify-content-between align-items-center  ">
                  <div className="d-flex align-items-center">
                    <div>
                      <h6>Camras</h6>
                      <p> 10items</p>
                    </div>
                    <div>
                      <img src="images/camera.jpg" alt="catagories " />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div>
                      <h6>Smart tvs</h6>
                      <p> 10items</p>
                    </div>
                    <div>
                      <img src="images/tv.jpg" alt="catagories " />
                    </div>
                  </div>
                  <div className="d-flex  align-items-center">
                    <div>
                      <h6>Smart Watches</h6>
                      <p> 10 items</p>
                    </div>
                    <div>
                      <img
                        src="images/watch.jpg"
                        alt="catagories "
                        height="130px"
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div>
                      <h6>headphone </h6>
                      <p> 10items</p>
                    </div>
                    <div>
                      <img src="images/headphone.jpg" alt="catagories " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured-wrapper-1 py-5 home-wrapper-4">
          <div className="container-fluid">
            <h1> Our latest Feature  </h1>
            <div className='blog-card'>
            <div className="row">
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
           
            </div>
            </div>
          </div>
        </section>
        <section className="special-wrapper py-5">
          <div className="container-fluid">
            <div className="row">
     
              <div className="col-sm-12">
                <h3 className="text-danger"> Special Products</h3>
              </div>
              <div className="row">
            <Specialproduct/>
            <Specialproduct/>
            <Specialproduct/>
           
            </div>
            </div>
          </div>
        </section>
        <section className="marque-wrapper py-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="marque-inner-wrapper bg-light p-3">
                  <Marquee className="d-flex ">
                    <div className="mx-2 w-25"><img src="images/brand-01.png" alt="brand"></img> </div>
                     <div className="mx-2 w-25"><img src="images/brand-02.png" alt="brand"></img> </div>
                     <div className="mx-2 w-25"><img src="images/brand-03.png" alt="brand"></img> </div>
                     <div className="mx-2 w-25"><img src="images/brand-04.png" alt="brand"></img> </div>
                     <div className="mx-2 w-25"><img src="images/brand-05.png" alt="brand"></img> </div> 
                     <div className="mx-2 w-25"><img src="images/brand-06.png" alt="brand"></img> </div> 
                     <div className="mx-2 w-25"><img src="images/brand-07.png" alt="brand"></img> </div> 
                     <div className="mx-2 w-25"><img src="images/brand-08.png" alt="brand"></img> </div> 
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <section className="blog-wrapper py-5 home-wrapper-4">
          <div className="container-fluid">
            <h1> Our latest News </h1>
            <div className='blog-card'>
            <div className="row">
             <Blogcard/>
             <Blogcard/>
             <Blogcard/>
             <Blogcard/>
            </div>
            </div>
          </div>
        </section>
  
      </>
    </div>
  );
}

export default Home;
