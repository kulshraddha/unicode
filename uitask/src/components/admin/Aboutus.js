import React from 'react';
import Verified from "@mui/icons-material/Verified"
import Edit from "@mui/icons-material/Edit"
import "./Aboutus.css"
import { Link, Route, Routes } from 'react-router-dom';
import { NavLink as RLink } from "react-router-dom";
import { IconButton, styled } from "@mui/material";
import Info from "../BodyDetails/Info"
import Faq from "../BodyDetails/Faq"
import Conditions from "../BodyDetails/Conditions"
import Policy from "../BodyDetails/Policy"
import Complains from "../BodyDetails/Complains"

const NavLink = styled(RLink)({
    color: "#fff",
    textDecoration: "none",
    marginLeft: 6, 
    fontSize: 15,
    fontWeight: 600
  });
const Aboutus = () => {
    return ( 
        <>
        <div className='aboutstart'>
            <h3>About Us</h3>

            <div className='parts'>
                <div className="bglogo"><img src="./images/logo1.jpg" /></div>
                <div className='title'><p>A.T. Inks<br/><span>Digital Inks</span></p></div>
                <div className='title1'> <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
           <Verified/>
        </IconButton><Link to="" style={{fontSize: "15px", color:"blue"}}>Verify Company</Link></div>
                </div>

                <div className='para'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna, <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
           <Edit color='error'/>
         </IconButton></p>
                </div>

              {/* details */}
                <div className='details'>
                <div className='load'>
             <NavLink to="info"
            style={({ isActive }) => ({
              color: isActive ? "#aaa" : "#000",
            })}
          >
            Info
          </NavLink></div> 
          <div className='load1'>
             <NavLink to="faq"
            style={({ isActive }) => ({
              color: isActive ? "#aaa" : "#000",
            })}
          >
            FAQ
          </NavLink></div> 

          <div className='load1'>
             <NavLink to="complains"
            style={({ isActive }) => ({
              color: isActive ? "#aaa" : "#000",
            })}
          >
            Complains and feedback
          </NavLink></div> 
          
          <div className='load1'>
             <NavLink to="policy"
            style={({ isActive }) => ({
              color: isActive ? "#aaa" : "#000",
            })}
          >
            Privacy Policy
          </NavLink></div>

            <div className='load1'>
             <NavLink to="conditions"
            style={({ isActive }) => ({
              color: isActive ? "#aaa" : "#000",
            })}
          >
            Terms and Conditions
          </NavLink></div>  
                </div>
                <hr/>

                <Routes>
                    <Route path="info" element={<Info/>}/>
                    <Route path="faq" element={<Faq/>}/>
                    <Route path="complains" element={<Complains/>}/>
                    <Route path="policy" element={<Policy/>}/>
                    <Route path="Conditions" element={<Conditions/>}/>
                </Routes>
        </div>
        </>
     );
}
 
export default Aboutus;