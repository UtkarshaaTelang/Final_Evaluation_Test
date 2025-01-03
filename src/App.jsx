// import React from "react";
// import "./styles/global.css";

// const App = () => {
//   return (
//     <div style={{ width: "1440px", height: "1868px", gap: "0px" }}>
//       <h1 style={{ color: "#fff", textAlign: "center" }}>Welcome to the MERN Frontend</h1>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css"; 
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Register from './components/Register';
import WorkspacePage from './components/WorkspacePage';
import { ToastContainer } from 'react-toastify';  // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Router>
            <ToastContainer position="top-right" autoClose={3000} />
            {/* Only show Navbar and Footer on LandingPage */}
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <>
                            <Navbar />
                            <LandingPage />
                            <Footer />
                        </>
                    } 
                />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/workspacepage" element={<WorkspacePage />} />
            </Routes>
            
        </Router>
    );
}


export default App;

