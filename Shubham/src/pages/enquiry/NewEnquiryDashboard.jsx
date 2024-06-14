import React, { useEffect, useState } from "react";
import "../../Styles/enquiryDashboard.css";
import { Link } from "react-router-dom";
import { getEnquiries } from "../../Service/api/enquiry/enquiryapi";
//import {getEnquiries} from "../../Services/api/enquiry/enquiryapi.js"
import moment from 'moment'
function EnquiryDashboard() {

  
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const data = await getEnquiries();
        setEnquiries(data.data); 
      } catch (error) {
        console.error('Failed to fetch enquiries', error);
      }
    };

    fetchEnquiries();
  }, []);

  return (
    <div className="enquiry-dashboard">
      <div className="action-bar">
        <div className="header-enquiry">
          <h2>Enquiries</h2>
          <div className="icons gap-1">
            <img src="Icon-settings.png" alt="Settings" />
            <img src="/right-from-bracket.png" alt="Logout" />
          </div>
        </div>
        <div className="nav-input">
          <input type="text" placeholder="Search enquiries" />
          <Link to="/enquiryForm">
            <button className="add-button">Add new</button>
          </Link>
          <input type="text" placeholder="Archived" className="text-center" style={{width:"154px"}}/>
          <input type="text" placeholder="Filter enquiries" />
        </div>
      </div>
      <div className="enquiries-list">
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Type</th>
              <th>Status</th>
              <th>Venue A</th>
              <th>Venue B</th>
              <th>Event Date</th>
              <th>Enquiry Stage</th>
              <th>Email</th>
              <th>Archive</th>
            </tr>
          </thead>
          <tbody>
          {enquiries.map((data, index) => {
                            return <tr key={index}>
            
              <td>Jane Moss</td>
              <td className="type">{data.eventCategoryName
}</td>
              <td>{data.enquiryStatusName}</td>
              <td>{data.venueAName
}</td>
              <td>{data.venueBName}</td>
              <td>{moment(data.eventDate).format('MMMM Do YYYY, h:mm:ss a')}</td>
              <td>
                <ListStatusButton status={data.enquirySubStatusName} />
              </td>
              <td>
                <EmailArchiveButton title="Email" />
              </td>
              <td>
                <EmailArchiveButton title="Archieve" />
              </td>
            </tr>
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const EmailArchiveButton = ({ title }) => {
  return (
    <button className="email-archive-button">{title}</button>
  );
};

const ListStatusButton = ({ status }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return "status-pending";
      case "ongoing":
        return "status-ongoing";
      case "done":
        return "status-done";
      case "new":
        return "status-new";
      default:
        return "";
    }
  };

  return (
    <button className={`status-button ${getStatusClass(status)}`}>
      {status}
    </button>
  );
};

export default EnquiryDashboard;