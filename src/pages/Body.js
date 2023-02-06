import React from 'react';
import {NavLink} from "react-router-dom";
import './home.css';

function Body(){
        return (
            <>
              {/* //  <!--.............HOME............--> */}
            <section id="home" className="" >
              
                 <div className=" text-dark bimage home11" > 
              <div  className="home22"    >
                  <div  className="home33"   >
                      <h3 className="home44"  >THIS IS</h3>
                      <h1 className="home55"   >INTERN $ ALA</h1>
                      <h4>Where you can Find Interns and Internships</h4>
                  </div>
                  <div className="imgonbutt" >
                      <a href="/">Contact </a>
                      <a href="/">Log-in</a>
                      <span>you can gain good knowledge by taking Internships <br/>so pls take its</span>
                  </div>
              </div>
                 </div>
              
          </section>
      
         {/*   <!--SERVICES--> */}
            <section id="services" className="text-center mt-3 p-5">
              <div className="container">
              <div className="row">
                      <div className="col-12 section-intro text-center m-5" >
                          <h1>Our services</h1>
                          <div className="divider"></div>
                          <p>There are many variations of the passages of Loem Ipum avaible ,
                              but the alternative majority have suffered<br/>
                              alternative in some for by the injected humour or randomised words 
                              which dont lookk even slightly
      
                          </p>
                        
                      </div>
                  </div>
                  <div className="row">
                      {/* <!--col1--> */}
                      <div className="col-md-4" >
                          <div className="servic">
                              <div className="service-img">
                                  <img className="service11" src="homephotos/logo1.webp" alt=""  />
                                  <div className="service22" >
                                      {/* <!--3dicon--> */}
                                  <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
                                  <lord-icon className="service33"
                                      src="https://cdn.lordicon.com/mdgrhyca.json"
                                      trigger="morph"
                                      >
                                  </lord-icon>
                              </div>
                              </div>
                              <h5 pt-4 >Service name</h5>
                              <p >There are any variation of passage
                                   of lorem ipsumavaible
                                  but t emajority have suffered 
                                  alterantion in Somefrom
                              </p>
                          </div>
                      </div>
                      {/* <!--col2--> */}
                      <div className="col-md-4">
                          <div className="servic">
                              <div className="service-img">
                                  <img src="homephotos/LOGO2.O.png" alt="" />
                                  <div className="service44" >
                                      {/* <!--3dicon--> */}
                                  <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
                                  <lord-icon className="service55"
                                      src="https://cdn.lordicon.com/mdgrhyca.json"
                                      trigger="morph"
                                     >
                                  </lord-icon>
                              </div>
                              </div>
                              <h5 pt-4>Service name</h5>
                              <p >There are any variation of passage
                                   of lorem ipsumavaible
                                  but t emajority have suffered 
                                  alterantion in Somefrom
                              </p>
                          </div>
                      </div>
                      {/* <!--col3--> */}
                      <div className="col-md-4">
                          <div className="servic">
                              <div className="service-img">
                                  <img src="homephotos/LOGO2.O.png" alt="" />
                                  <div className="service66" >
                                      {/* <!--3dicon--> */}
                                  <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
                                  <lord-icon className="service77"
                                      src="https://cdn.lordicon.com/mdgrhyca.json"
                                      trigger="morph"
                                      >
                                  </lord-icon>
                              </div>
                              </div>
                              <h5 pt-4>Service name</h5>
                              <p >There are any variation of passage
                                   of lorem ipsumavaible
                                  but t emajority have suffered 
                                  alterantion in Somefrom
                              </p>
                          </div>
                      </div>
                      {/* <!--col4--> */}
                  </div>
                </div>
            </section>
              
            {/* <!--ABOUT--> */}
            <section id="about" className="bg-cover about11">
              <div className="overlay"></div>
              <div className="container text-dark text-center">
                  <div className="row">
                      <div className="col-12 section-intro text-center m-5" >
                          <h1>Watch our video</h1>
                          <div className="divider"></div>
                          <p>There are many variations of the passages of Loem Ipum avaible ,
                              but the alternative majority have suffered<br/>
                              alternative in some for by the injected humour or randomised words 
                              which dont lookk even slightly
      
                          </p>
                          <a  href="#" className="video-btn about22" ><i className="fa-solid fa-play"></i></a>
                      </div>
                  </div>
              </div>
      
            </section>
            
            {/* <!--features--> */}
            <section id="features" className="text-center">
              <div className="container">
                  <div className="row">
                      <div className="col-12 section-intro text-center m-5" >
                          <h1>Our Features</h1>
                          <div className="divider"></div>
                          <p>there are many ways of passing of lorem ipsum avaiable
                              but the ma   jority hava suffered<br/>
                              alternatuvd in th e some form , by injected humour or adskjfn fdwords 
                              which dint look even slightly
                          </p>
      
                      </div>
                  </div>
                  <div className="row gx-4 gy-5">
                      <div className="col-md-4 features "  >
                          <div className="icon">
                              <i className="icon-tools"></i>
                          </div>    
                              <h5 className="mt-4 mb-3">Feature Title</h5>
                              <p>There are many variations of passages ofLorem Ipsum avaible ,
                                  but the majority have suffered alteration in some forms
                              </p>
                          
                      </div>
                      <div className="col-md-4 features "  >
                          <div className="icon">
                              <i className="icon-browser"></i>
                          </div>    
                              <h5 className="mt-4 mb-3">Feature Title</h5>
                              <p>There are many variations of passages ofLorem Ipsum avaible ,
                                  but the majority have suffered alteration in some forms
                              </p>
                          
                      </div>
                      <div className="col-md-4 features " >
                          <div className="icon">
                              <i className="icon-calendar"></i>
                          </div>    
                              <h5 className="mt-4 mb-3">Feature Title</h5>
                              <p>There are many variations of passages ofLorem Ipsum avaible ,
                                  but the majority have suffered alteration in some forms
                              </p>
                          
                      </div>
                      <div className="col-md-4 features "  >
                          <div className="icon">
                              <i className="icon-scissors"></i>
                          </div>    
                              <h5 className="mt-4 mb-3">Feature Title</h5>
                              <p>There are many variations of passages ofLorem Ipsum avaible ,
                                  but the majority have suffered alteration in some forms
                              </p>
                          
                      </div>
                      <div className="col-md-4 features " >
                          <div className="icon">
                              <i className="icon-speedometer"></i>
                          </div>    
                              <h5 className="mt-4 mb-3">Feature Title</h5>
                              <p>There are many variations of passages ofLorem Ipsum avaible ,
                                  but the majority have suffered alteration in some forms
                              </p>
                          
                      </div>
                      <div className="col-md-4 features " >
                          <div className="icon">
                              <i className="icon-strategy"></i>
                          </div>    
                              <h5 className="mt-4 mb-3">Feature Title</h5>
                              <p>There are many variations of passages ofLorem Ipsum avaible ,
                                  but the majority have suffered alteration in some forms
                              </p>
                          
                      </div>
                  </div>
              </div>
            </section>
            
            {/* <!--counters--> */}
            <section  className="bg-cover  counters11">
              <div className="overlay"></div>
              <div className="container text-dark text-center">
                  <div className="row " >
                       <div className="col-md-3 mt-5 mb-5">
                          <i className="icon-trophy h1"></i>
                              <h1 className="mt-3">39,08</h1>
                              <p>AwardsWon</p>  
                          
                       </div>   
                       <div className="col-md-3 mt-5 mb-5">
                          <i className="icon-camera h1"></i>
                              <h1 className="mt-3">145k</h1>
                              <p>Awards Won</p>  
                          
                       </div> 
                       <div className="col-md-3 mt-5 mb-5">
                          <i className="icon-happy  h1"></i>
                              <h1 className="mt-3">25M+</h1>
                              <p>Happy Clients</p>  
                          
                       </div> 
                       <div className="col-md-3 mt-5 mb-5">
                          <i className="icon-paintbrush h1"></i>
                              <h1 className="mt-3">134,05</h1>
                              <p>Themes Designed</p>  
                          
                       </div> 
                  </div>
              </div>
      
            </section>
      
      
            {/* <!--reviews--> */}
            <section id="reviews" className="text-center">
              <div className="container">
                  <div className="row">
                      <div className="col-12 section-intro text-center m-5">
                          <h1>Our Features</h1>
                          <div className="divider"></div>
                          <p>there are many ways of passing of lorem ipsum avaiable
                              but the ma   jority hava suffered<br/>
                              alternatuvd in th e some form , by injected humour or adskjfn fdwords 
                              which dint look even slightly
                          </p>
      
                      </div>
                  </div>
                  <div className="row gx-4 gy-5 text-start">
                      <div className="col-md-4 features "   >
                          <div className="review p-4">
                              <div className="person ">
                                  <img src="homephotos/LOGO2.O.png" alt=""/>
                                  <div className="text ms-3">
                                      <h6>John Walker</h6>
                                      <small>Google</small>                            </div>
      
                              </div>
                               <p className="p-4">There are many variations of the passage of Lorem ipsum
                                  avaible but the majority have suffered have altertin i some 
                                  form , by injection
                               
                               <div className="stars ">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star-half-stroke"></i>
                               </div>
                              </p>
      
                          </div>
                             
          
          
          
          
                      </div>
                      <div className="col-md-4 features " >
                          <div className="review p-4">
                              <div className="person ">
                                  <img src="homephotos/itsmeeeeeee.jpg" alt=""/>
                                  <div className="text ms-3">
                                      <h6>John Walker</h6>
                                      <small>Google</small>                            </div>
      
                              </div>
                               <p className="p-4">There are many variations of the passage of Lorem ipsum
                                  avaible but the majority have suffered have altertin i some 
                                  form , by injection
                               
                               <div className="stars ">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star-half-stroke"></i>
                               </div>
                              </p>
      
                          </div>
                             
          
          
          
          
                      </div>
                      <div className="col-md-4 features ">
                          <div className="review p-4">
                              <div className="person ">
                                  <img src="homephotos/image.jpg" alt=""/>
                                  <div className="text ms-3">
                                      <h6>John Walker</h6>
                                      <small>Google</small>                            </div>
      
                              </div>
                               <p className="p-4">There are many variations of the passage of Lorem ipsum
                                  avaible but the majority have suffered have altertin i some 
                                  form , by injection
                               
                               <div className="stars ">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star-half-stroke"></i>
                               </div>
                              </p>
      
                          </div>
                             
          
          
          
          
                      </div>
                      <div className="col-md-4 features "  >
                          <div className="review p-4">
                              <div className="person ">
                                  <img src="homephotos/LOGO2.O.png" alt=""/>
                                  <div className="text ms-3">
                                      <h6>John Walker</h6>
                                      <small>Google</small>    
                                    </div>
      
                              </div>
                               <p className="p-4">There are many variations of the passage of Lorem ipsum
                                  avaible but the majority have suffered have altertin i some 
                                  form , by injection
                               
                               <div className="stars ">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star-half-stroke"></i>
                               </div>
                              </p>
      
                          </div>
                             
          
          
          
          
                      </div>
                      <div className="col-md-4 features " >
                          <div className="review p-4">
                              <div className="person ">
                                  <img src="homephotos/LOGO2.O.png" alt=""/>
                                  <div className="text ms-3">
                                      <h6>John Walker</h6>
                                      <small>Google</small>  
                                     </div>
      
                              </div>
                               <p className="p-4">There are many variations of the passage of Lorem ipsum
                                  avaible but the majority have suffered have altertin i some 
                                  form , by injection
                               
                               <div className="stars ">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star-half-stroke"></i>
                               </div>
                              </p>
      
                          </div>
                             
          
          
          
          
                      </div>
                      <div className="col-md-4 features "  >
                          <div className="review p-4">
                              <div className="person ">
                                  <img src="homephotos/LOGO2.O.png" alt=""/>
                                  <div className="text ms-3">
                                      <h6>John Walker</h6>
                                      <small>Google</small>                            </div>
      
                              </div>
                               <p className="p-4">There are many variations of the passage of Lorem ipsum
                                  avaible but the majority have suffered have altertin i some 
                                  form , by injection
                               
                               <div className="stars ">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star-half-stroke"></i>
                               </div>
                              </p>
      
                          </div>
                             
          
          
          
          
                      </div>
                      
                  </div>
              </div>
            </section>
      
      
            {/* <!--Blogs--> */}
            <section id="blogs" className="text-center">
              <div className="container">
                  <div className="row">
                      <div className="col-12 section-intro text-center m-5" >
                          <h1>Our Blog posts</h1>
                          <div className="divider"></div>
                          <p>there are many ways of passing of lorem ipsum avaiable
                              but the ma   jority hava suffered<br/>
                              alternatuvd in th e some form , by injected humour or adskjfn fdwords 
                              which dint look even slightly
                          </p>
      
                      </div>
                  </div>
                  <div className="row text-start ">
                      <div className="col-md-4"  >
                          <img src="homephotos/logo1.webp" alt="" width="95%"/>
                          <div className="mt-4">
                              <small>posted in <a  href="#">Web Design</a>,12 DEc 2023</small>
                              <h5 class mt-2 mb-2> <a    href="#">Web Design in 2023</a>
                              </h5>
                              <p>LOrem, Ipsum dolor sit amet consector adipisicing elit.
                                  Debits aperiam unde officiis?
                              </p>
                          </div>
                      </div>
                      <div className="col-md-4"  >
                          <img src="homephotos/itsmeeeeeee.jpg" alt="" width="95%"/>
                          <div className="mt-4">
                              <small>posted in <a  href="#">Web Design</a>,12 DEc 2023</small>
                              <h5 class mt-2 mb-2> <a    href="#">Web Design in 2023</a>
                              </h5>
                              <p>LOrem, Ipsum dolor sit amet consector adipisicing elit.
                                  Debits aperiam unde officiis?
                              </p>
                          </div>
                      </div>
                      <div className="col-md-4"  >
                          <img src="homephotos/image.jpg" alt="" width="95%"/>
                          <div className="mt-4">
                              <small>posted in <a  href="#">Web Design</a>,12 DEc 2023</small>
                              <h5 class mt-2 mb-2> <a    href="#">Web Design in 2023</a>
                              </h5>
                              <p>LOrem, Ipsum dolor sit amet consector adipisicing elit.
                                  Debits aperiam unde officiis?
                              </p>
                          </div>
                      </div>
      
                  </div>
              </div>
            </section>
      
      
            {/* <!--Contacts--> */}
            <section id="contacts" className="bg-cover text-white  contcat11">
              <div className="overlay23 contcat22"   >
              <div className="container" >
                  <div className="row"  >
                      <div className="col-12 section-intro text-center m-5">
                          <h1 className="text-dark">Get in touch</h1>
                          <div className="divider"></div>
                          <p className="text-dark">there are many ways of passing of lorem ipsum avaiable
                              but the ma   jority hava suffered<br/>
                              alternatuvd in th e some form , by injected humour or adskjfn fdwords 
                              which dint look even slightly
                          </p>
      
                      </div>
                  </div>
                 <div className="row"  
                 data-aos-anchor-placement="center-bottom">
                  <div className="col-md-8 mx-auto">
                      <form action="#" className="row g-4 m-5">
                          <div className="form-group col-md-6 ">
                              <input type="text" className="form-control" placeholder="Full name"/>
                          </div>
                          <div className="form-group col-md-6 ">
                              <input type="email" className="form-control" placeholder="E-mail address"/>
                          </div>
                          <div className="form-group col-md-12sss ">
                              <input type="text" className="form-control" placeholder="Subjects"/>
                          </div>
                          <div className="form-group col-md-12 ">
                              <textarea name="" id="" cols="30" rows="4" className="form-control" placeholder="Message"></textarea>
                          </div>
                          <div className="text-center">
                              <button className="btn btn-main contcat33"
                           type="submit">Send Message</button>
                          </div>
                      </form>
                  </div>
              </div>
                 </div>
              </div>
            </section>
            </>
    );
    }
    
    export default Body;  