import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Card from './components/Card';
import Task from './components/task';
import Machine from './components/Machine';
import MedicinePatientUpdater from './components/Updation'
import DocumentPreview from './components/DocumentPreview';
import CCTVFeed from './components/cctv';
import SmsSender from './components/sms';
import Login from './components/login';

function App() {
  return (
    <Router>
      <div className="d-flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="w-100">
          {/* Navbar */}
          <Navbar />

          <div className="container mt-4">
            <Routes>
            <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/preview" element={<DocumentPreview />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/warehouse" element={<Task />} />
              <Route path="/machine" element={<Machine />} />
              <Route path="/cctv" element={<CCTVFeed />} />
              <Route path="/sms" element={<SmsSender />} />

              <Route path="/updation" element={<MedicinePatientUpdater />} />
              <Route path="/cards" element={      
                                              <div style={{flexDirection:'row'}}>
                                                <Card></Card>
                                              
                                              </div>
                                                
      } /> {/* Default Route */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
