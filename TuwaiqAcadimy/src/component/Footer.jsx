import React from 'react'
import Logo from '../assets/logo.svg'
import Logo1 from '../assets/logos2.svg'

const Footer = () => {
  return (
    <>
        <footer className=" text-center" style={{backgroundColor: "#4e3797", color: "white"}}>
        <div className="container p-4">
                

            

            
            <section className=" mb-5 mt-5">
            <div className="row ">
                
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <img src={Logo1} alt="" />
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-2">

                <ul className="list-unstyled mb-0">
                    <li>
                        <div >
                            <section className="mb-4">
                            
                            <a data-mdb-ripple-init className="btn btn-outline bg-light btn-floating m-1" href="#!" role="button"
                                ><i className="fab fa-twitter"></i></a>

                            <a data-mdb-ripple-init className="btn btn-outline bg-light btn-floating m-1" href="#!" role="button"
                                ><i className="fab fa-google"></i></a>

                            <a data-mdb-ripple-init className="btn btn-outline bg-light btn-floating m-1" href="#!" role="button"
                                ><i className="fab fa-instagram"></i></a>
                            <a data-mdb-ripple-init className="btn btn-outline bg-light btn-floating m-1" href="#!" role="button"
                                ><i className="fab fa-linkedin-in"></i></a>

                            <a data-mdb-ripple-init className="btn btn-outline bg-light btn-floating m-1" href="#!" role="button">
                                <i className="fab fa-github"></i></a>
                            </section>
                        </div>
                    </li>
                </ul>
                <h4>@TuwaiqAcademy</h4>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase "><a className='link-light' href="">الشروط والأحكام</a></h5>
                <h5 className="text-uppercase "><a className='link-light' href="">سياسة الخصوصية</a></h5>

                
                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase "><a className='link-light' href="">شارك كمدرب</a></h5>
                <h5 className="text-uppercase "><a className='link-light' href="">حول الأكاديمية</a></h5>
                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <img src={Logo1} alt="" />
                </div>
                
            </div>
            </section>
        </div>

        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        جميع الحقوق محفوظة لأكاديمية طويق 2023
        </div>
        </footer>
    </>
  )
}

export default Footer