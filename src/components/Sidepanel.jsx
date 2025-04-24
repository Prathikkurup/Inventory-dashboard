import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Sidepanel() {
  return (
    <div> <div className="sidebar">
    <div className="scrollbar-inner sidebar-wrapper">
      <div className="user">
        <div className="photo">
         
        </div>
        <div className="info">
          <a>
            <span>
             
              <span className="user-level">Administrator</span>
            </span>
          </a>
        </div>
      </div>
      <ul className="nav">
        <li className="nav-item">
          {/* <Link to="/"> */}
            <i className="la la-dashboard"></i>
            <p>Dashboard</p>
          {/* </Link> */}
        </li>
        <li className="nav-item">
          {/* <Link to="/inventory"> */}
            <i className="la la-ambulance"></i>
            <p>Inventory</p>
          {/* </Link> */}
        </li>
        <li className="nav-item">
          {/* <Link to="/categories"> */}
            <i className="la la-align-justify"></i>
            <p>Medicine Catgories</p>
          {/* </Link> */}
        </li>
        <li className="nav-item">
          {/* <Link to="/types"> */}
            <i className="la la-sticky-note"></i>
            <p>Medicine Types</p>
          {/* </Link> */}
        </li>
        <li className="nav-item">
          {/* <Link to="/profile"> */}
            <i className="la la-user"></i>
            <p>Profile</p>
          {/* </Link> */}
        </li>
        <li className="nav-item">
          {/* <Link onClick={handleLogout}> */}
            <i className="la la-power-off"></i>
            <p>Logout</p>
          {/* </Link> */}
        </li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Sidepanel