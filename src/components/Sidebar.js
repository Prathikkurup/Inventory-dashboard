import React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/Sidebar.css'; 
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="d-flex flex-column p-3 bg-light sidebar" style={{ width: '250px', height: '100vh' }}>
      <h2 className="mb-4">Serious6</h2>
    
      <NavLink exact to="/dashboard" activeClassName="active">
        <i className="bi bi-clock"></i> Dashboard
      </NavLink>
      <NavLink to="/machine" activeClassName="active">
        <i className="bi bi-box"></i> Recommend
      </NavLink>
      <NavLink to="/cards" activeClassName="active">
        <i className="bi bi-list"></i>  Wards
      </NavLink>
      <NavLink to="/types" activeClassName="active">
        <i className="bi bi-boxes"></i> Med Types
      </NavLink>
      <NavLink to="/profile" activeClassName="active">
        <i className="bi bi-person"></i> Profile
      </NavLink>
      <NavLink to="/warehouse" activeClassName="active">
        <i className="bi bi-box-arrow-right"></i> Warehouse
      </NavLink>
      <NavLink to="/updation" activeClassName="active">
        <i className="bi bi-person"></i> Total Update
      </NavLink>
      <NavLink to="/cctv" activeClassName="active">
        <i className="bi bi-person"></i> CCTV
      </NavLink>
 
    </div>
  );
}

export default Sidebar;