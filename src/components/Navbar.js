import React from "react";

function Nav() {
  return;
  <div>
    <Navbar />
  </div>;
}


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Dollz Ink.</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Shop Brand</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Book Now</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Reviews</a></li>
            <li><a className="dropdown-item" href="#">Questions?</a></li>
            <li><a className="dropdown-item" href="#">Contact Us</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
  );
}


export default Navbar;
