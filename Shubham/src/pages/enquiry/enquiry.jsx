import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../Styles/enquiryForm.css";
import {
  getenquirystatuses,
  getenquirysubstatuses,
  geteventcategories,
  geteventsubcategories,
  createEnquiry,
} from "../../Service/api/enquiry/enquiryapi";

function Enquiry() {
  const [eventCategories, setEventCategories] = useState([]);
  const [eventSubCategories, setEventSubCategories] = useState([]);
  const [enquiryStatus, setEnquiryStatus] = useState([]);
  const [enquirySubStatus, setEnquirySubStatus] = useState([]);

  const [formData, setFormData] = useState({
    eventCategoryId: "",
    eventSubCategoryId: "",
    enquiryStatusId: "",
    enquirySubStatusId: "",
    clientName: "",
    clientEmail: "",
    clientMobileNo: "",
    eventDate: "",
    colourScheme: "",
    noOfGuest: "",
    budget: "",
    enquiryDate: "",
    venueAName: "",
    venueAContactNo: "",
    venueAContactPerson: "",
    venueBName: "",
    venueBContactNo: "",
    venueBContactPerson: "",
    plannerName: "",
    companyName: "",
    plannerPhoneNo: "",
    plannerEmail: "",
    notes: "",
    uniqueCode: "string",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesData, subCategoriesData, statusesData, subStatusesData] = await Promise.all([
          geteventcategories(),
          geteventsubcategories(),
          getenquirystatuses(),
          getenquirysubstatuses(),
        ]);

        setEventCategories(categoriesData.data);
        setEventSubCategories(subCategoriesData.data);
        setEnquiryStatus(statusesData.data);
        setEnquirySubStatus(subStatusesData.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEnquiry(formData);
      alert("Enquiry created successfully!");
      setFormData({
        eventCategoryId: "",
        eventSubCategoryId: "",
        enquiryStatusId: "",
        enquirySubStatusId: "",
        clientName: "",
        clientEmail: "",
        clientMobileNo: "",
        eventDate: "",
        colourScheme: "",
        noOfGuest: "",
        budget: "",
        enquiryDate: "",
        venueAName: "",
        venueAContactNo: "",
        venueAContactPerson: "",
        venueBName: "",
        venueBContactNo: "",
        venueBContactPerson: "",
        plannerName: "",
        companyName: "",
        plannerPhoneNo: "",
        plannerEmail: "",
        notes: "",
        uniqueCode: "string",
      });
    } catch (error) {
      console.error("Failed to create enquiry", error);
    }
  };

  return (
    <div className="enquiry-page">
      <div className="enquiry-nav card d-flex flex-row align-items-center justify-content-between grid p-3">
        <div className="d-flex align-items-center ">
          <label htmlFor="enquiry-form">Enquiry Form:</label>
          <Form.Select
            className="mx-2"
            name="eventCategoryId"
            onChange={handleInputChange}
            value={formData.eventCategoryId}
          >
            {eventCategories.map((event, index) => (
              <option key={index} value={event.eventCategoryId}>
                {event.eventCategoryName}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="d-flex align-items-center">
          <label htmlFor="enquiryStatus">Client: </label>
          <Form.Select
            id="enquiryStatus"
            className="mx-2"
            name="enquiryStatusId"
            onChange={handleInputChange}
            value={formData.enquiryStatusId}
          >
            {enquiryStatus.map((enStatus, index) => (
              <option key={index} value={enStatus.enquiryStatusId}>
                {enStatus.enquiryStatusName}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="d-flex align-items-center ">
          <label htmlFor="enquirySubStatus">Enquiry: </label>
          <Form.Select
            id="enquirySubStatus"
            className="mx-2"
            name="enquirySubStatusId"
            onChange={handleInputChange}
            value={formData.enquirySubStatusId}
          >
            {enquirySubStatus.map((subStatus, index) => (
              <option key={index} value={subStatus.enquirySubStatusId}>
                {subStatus.enquirySubStatusName}
              </option>
            ))}
          </Form.Select>
        </div>
        <div>
          <button onClick={handleFormSubmit}>Save</button>
        </div>
      </div>
      <div className="detail-card">
        <Form className="form-sections">
          <ClientSection title="Client Details">
            <Form.Group className="mb-3" id="client-name">
              <SubHeading title="Client's Name" />
              <Form.Control
                type="text"
                placeholder="Fiona Harper"
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" id="client-email">
              <SubHeading title="Client's Email Address" />
              <Form.Control
                type="email"
                placeholder="example@example.com"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" id="client-phone">
              <SubHeading title="Client's Mobile Phone" />
              <Form.Control
                type="tel"
                placeholder="+000 111 222 333"
                name="clientMobileNo"
                value={formData.clientMobileNo}
                onChange={handleInputChange}
              />
            </Form.Group>
          </ClientSection>
          <FormSection title="Event Details">
            <Row className="event-details">
              <Col>
                <SubHeading title="Event" />
                <Form.Select
                  className="mb-3 rounded-xl"
                  id="event"
                  name="eventSubCategoryId"
                  onChange={handleInputChange}
                  value={formData.eventSubCategoryId}
                >
                  {eventSubCategories.map((events, index) => (
                    <option key={index} value={events.eventSubCategoryId}>
                      {events.eventSubCategoryName}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Form.Group as={Col} className="mb-3" id="colour-scheme">
                <SubHeading title="Colour Scheme" />
                <Form.Control
                  placeholder="Green's & Whites"
                  name="colourScheme"
                  value={formData.colourScheme}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>
            <Row className="event-details">
              <Form.Group as={Col} className="mb-3" id="event-date">
                <SubHeading title="Event Date" />
                <Form.Control
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group as={Col} id="guest-numbers" className="mb-3">
                <SubHeading title="Guest numbers approx." />
                <Form.Control
                  type="text"
                  placeholder="110"
                  name="noOfGuest"
                  value={formData.noOfGuest}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>
            <Row className="event-details">
              <Form.Group as={Col} className="mb-3" id="enquiry-date">
                <SubHeading title="Enquiry Date" />
                <Form.Control
                  type="date"
                  name="enquiryDate"
                  value={formData.enquiryDate}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" id="budget">
                <SubHeading title="Budget approx." />
                <Form.Control
                  placeholder="2400"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>
          </FormSection>
        </Form>
      </div>
      <div className="venue-sections">
        <div>
          <Form>
            <FormSection title="Venue Details">
              <Row>
                <Col>
                  <Form.Group as={Col} id="venue-a" className="mb-2">
                    <SubHeading title="Venue A" />
                    <Form.Control
                      placeholder="Caswell House"
                      type="text"
                      name="venueAName"
                      value={formData.venueAName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <div className="d-flex flex-row ">
                    <Form.Group className="mb-2 pr-0" id="venue-a-phone">
                      <SubHeading title="Venue A Phone" />
                      <Form.Control
                        type="tel"
                        placeholder="01865 858638"
                        name="venueAContactNo"
                        value={formData.venueAContactNo}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group id="venue-a-contact" className="mb-2 px-4">
                      <SubHeading title="Venue A Contact" />
                      <Form.Control
                        type="text"
                        placeholder="Kirsten Jones"
                        name="venueAContactPerson"
                        value={formData.venueAContactPerson}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>
                </Col>
                <Col>
                  <Form.Group as={Col} className="mb-2" id="venue-b">
                    <SubHeading title="Venue B" />
                    <Form.Control
                      placeholder="Buckingham Palace"
                      type="text"
                      name="venueBName"
                      value={formData.venueBName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Row>
                    <Form.Group as={Col} className="mb-2 " id="venue-b-phone">
                      <SubHeading title="Venue B Phone" />
                      <Form.Control
                        type="tel"
                        placeholder="OX10 7DX"
                        name="venueBContactNo"
                        value={formData.venueBContactNo}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-2 " id="venue-b-contact">
                      <SubHeading title="Venue B Contact" />
                      <Form.Control
                        type="text"
                        placeholder="Rupert Maitland Titterton"
                        name="venueBContactPerson"
                        value={formData.venueBContactPerson}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Row>
                </Col>
              </Row>
            </FormSection>
          </Form>
        </div>
        <div>
          <FormSection title="Planner Details">
            <Form>
              <div className="d-flex flex-row ">
                <div className="d-flex flex-row ">
                  <Form.Group className="mb-2" id="planner-name">
                    <SubHeading title="Planner Name" />
                    <Form.Control
                      type="text"
                      placeholder="Kirsten Jones"
                      name="plannerName"
                      value={formData.plannerName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2 px-4" id="company-name">
                    <SubHeading title="Company Name" />
                    <Form.Control
                      type="text"
                      placeholder="Apollo Event Consultants"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>
                <div className="d-flex flex-row">
                  <Form.Group className="mb-2" id="planner-phone">
                    <SubHeading title="Planner Phone" />
                    <Form.Control
                      type="tel"
                      placeholder="07785 926164"
                      name="plannerPhoneNo"
                      value={formData.plannerPhoneNo}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2"
                    id="planner-email"
                    style={{ paddingLeft: "33px" }}
                  >
                    <SubHeading title="Planner Email" />
                    <Form.Control
                      type="email"
                      placeholder="joanna@joannacarterflowers.co.uk"
                      name="plannerEmail"
                      value={formData.plannerEmail}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>
              </div>
            </Form>
          </FormSection>
        </div>
        <div className="form-sections">
          <FormSection title="Notes">
            <Form.Control
              type="text"
              placeholder="Add notes here"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
            />
          </FormSection>
        </div>
      </div>
    </div>
  );
}

function FormSection({ title, children }) {
  return (
    <div className="form-section">
      <h5>{title}</h5>
      <hr className="mb-2" />
      {children}
    </div>
  );
}

function ClientSection({ title, children }) {
  return (
    <div className="form-section client-section">
      <h5>{title}</h5>
      <hr className="mb-2" />
      {children}
    </div>
  );
}

const SubHeading = ({ title }) => {
  return <label className="subHeading">{title}</label>;
};

export default Enquiry;
