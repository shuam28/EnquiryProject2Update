import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../Styles/sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid">
      <div className="d-flex">
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <div className="logo m-2">
            <h3 className="logo-text">
              <img src="/logo.png" alt="Logo" className="mb-2"/>
              Enquiries
            </h3>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
              ☰
            </button>
          </div>
          <ul>
            <li>
              <Link to="/notification" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">
                  <img src="/notifications_active.svg" alt="Notification" />
                  Notification
                </span>
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">
                  <img src="/dashboard.svg" alt="Dashboard" />
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link to="/enquiry" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">
                  <img src="/list_alt.svg" alt="Enquiry" />
                  Enquiry
                </span>
              </Link>
            </li>
            <li>
              <Link to="/consultations" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">
                  <img src="/groups.svg" alt="Consultations" />
                  Consultations
                </span>
              </Link>
            </li>
            <li>
              <Link to="/orders" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">
                  <img src="/local_florist.svg" alt="Orders" />
                  Orders
                </span>
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">
                  <img src="/local_offer.svg" alt="Pricing" />
                  Pricing
                </span>
              </Link>
            </li>
            <li>
              <Link to="/proposal" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">
                  <img src="/notes.svg" alt="Proposal" />
                  Proposal
                </span>
              </Link>
            </li>
            <li>
              <Link to="/wholesale" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">
                  <img src="/spa.svg" alt="Wholesale" />
                  Wholesale
                </span>
              </Link>
            </li>
            <li>
              <Link to="/production" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">
                  <img src="/local_florist (2).svg" alt="Production" />
                  Production
                </span>
              </Link>
            </li>
            <li>
              <Link to="/delivery" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">
                  <img src="/airport_shuttle.svg" alt="Delivery" />
                  Delivery
                </span>
              </Link>
            </li>
            <li>
              <Link to="/libraries" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">
                  <img src="/book-open (2).svg" alt="Libraries" />
                  Libraries
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;