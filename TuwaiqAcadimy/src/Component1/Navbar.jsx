
import Tuwaiq_academy from "../assets/Tuwaiq_academy.png"
function Navbar() {
  return (
    <div>

<nav data-mdb-navbar-init className="navbar navbar-expand-lg navbar-light "style={{backgroundColor:"#4e3797" , direction:"rtl"}}>
  <div className="container" >
    <a className="navbar-brand me-2" href="https://mdbgo.com/">
      <img
        src={Tuwaiq_academy}
        height="100"
        loading="lazy"/>
    </a>
    <button
      data-mdb-collapse-init
      className="navbar-toggler"
      type="button"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarButtonsExample">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <a className="nav-link" href="#" style={{color:"white"}}>الرئيسيه</a>
          <a className="nav-link" href="#"style={{color:"white"}}>المعسكرات والبرامج</a>
          <a className="nav-link" href="#"style={{color:"white"}}>حول الأكاديمية</a>
          <a className="nav-link" href="#"style={{color:"white"}}>الأكاديميات التابعة</a>
          <a className="nav-link" href="#"style={{color:"white"}}> مركز الاختبارات </a>
      </ul>
      <div className="d-flex align-items-center"style={{color:"white"}}>
        <button data-mdb-ripple-init type="button" className="btn btn-link px-3 me-2"style={{color:"white"}}>
          <h4>تسجيل الدخول
          </h4>
        </button>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar