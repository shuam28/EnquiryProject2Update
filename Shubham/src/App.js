import './App.css';
import Sidebar from './pages/sidebar';
import Enquiry from './pages/enquiry/enquiry';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notification from './pages/notification';
import Dashboard from './pages/dashboard';
import Consultations from './pages/Consultations';
import EnquiryDashboard from './pages/enquiry/NewEnquiryDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={ <Sidebar/>} >
          <Route path='/enquiryForm' element={<Enquiry/>} />
          <Route path='/notification' element={<Notification/>} />
          <Route path='/enquiry' element={<EnquiryDashboard/>} />
          <Route path='/consultations' element={<Consultations/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
