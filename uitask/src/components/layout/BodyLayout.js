import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { NavLink as RLink } from "react-router-dom";
import { Button, IconButton, styled } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Archive from '@mui/icons-material/Archive';
import PeopleAlt from '@mui/icons-material/PeopleAlt';
import Handshake from '@mui/icons-material/Handshake';
import Wallet from '@mui/icons-material/Wallet';
import EmojiEvents from '@mui/icons-material/EmojiEvents';
import ContactSupport from '@mui/icons-material/ContactSupport';
import Badge from '@mui/icons-material/Badge';
import PaymentsIcons from '@mui/icons-material/Payments';
import Aboutus from "../admin/Aboutus"
import Dashboard from "../admin/Dashboard"
import Awards from "../admin/Awards"
import Partners from "../admin/Partners"
import Products from "../admin/Products"
import Teams from "../admin/Teams"
import "./BodyLayout.css"
import Payment from '../admin/Payment';
import Orders from '../admin/Orders';


const NavLink = styled(RLink)({
    color: "#fff",
    textDecoration: "none",
    marginLeft: 6, 
    fontSize: 13,
  });
const BodyLayout = () => {
    return ( 
        <div className='start'>
          <div className='both'>
              <div className='cld1'>
                {/* menu */}
                <div className="logo"><img src="./images/logo1.jpg" /></div>
                <div>
                    <ul>
                    <div className='link'>
             <NavLink to="/"
            style={({ isActive }) => ({
              color: isActive ? "red" : "#aaa",
            })}
          >
            <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
           <DashboardIcon/>
        </IconButton>
            Dashboard
          </NavLink></div>
                    <div className='link'><NavLink
            to="orders"
            style={({ isActive }) => ({
              color: isActive ? "red" : "#aaa",
            })}
          ><IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <Archive/>
       </IconButton>
            Orders
          </NavLink></div>
                    <div className='link'><NavLink
            to="teams"
            style={({ isActive }) => ({
              color: isActive ? "red" : "#aaa",
            })}
          > <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <PeopleAlt/>
       </IconButton>
            Team Members
          </NavLink></div>
                    <div className='link'><NavLink
            to="partners"
            style={({ isActive }) => ({
              color: isActive ? "red" : "#aaa",
            })}
          >
            <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <Handshake/>
       </IconButton>
            Partners
          </NavLink></div>
                    <div className='link'><NavLink
            to="products"
            style={({ isActive }) => ({
              color: isActive ? "red" : "#aaa",
            })}
          >
             <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <Wallet/>
       </IconButton>
            Product Listings
          </NavLink></div>
                    <div className='link'><NavLink
            to="awards"
            style={({ isActive }) => ({
              color: isActive ? "red" : "#aaa",
            })}
          > <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <EmojiEvents/>
       </IconButton>
            Awards & Honours
          </NavLink></div>
                    <div className='link'><NavLink
            to="aboutus"
            style={({ isActive }) => ({
              color: isActive ? "red" : "#aaa",
            })}
          > <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <Badge/>
       </IconButton>
            About Us
          </NavLink></div>
                    <div className='link'><NavLink
            to="payment"
            style={({ isActive }) => ({
              color: isActive ? "red" : "#aaa",
            })}
          ><IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <PaymentsIcons/>
       </IconButton>
            Payment info
          </NavLink></div>
                    </ul>
                </div>

                {/* Needhelp */}

                <div className='needhelp'>
                <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <ContactSupport/>
       </IconButton>
       <p style={{fontSize: 12}}>Need Help</p>
       <p style={{fontSize: "7px"}}>Our Support team is at your disposal</p>
       <Button variant='contained'color="secondary" sx={{width: 90, height: 20, fontSize: 10}}>Get Help</Button>
                </div>

              </div>
              <div className='cld2'>
                {/* body */}
                <Routes>
                  <Route  path="/aboutus/*" element={<Aboutus/>}/>
                  <Route  path="/awards" element={<Awards/>}/>
                  <Route  path="/payment" element={<Payment/>}/>
                  <Route  path="/products" element={<Products/>}/>
                  <Route  path="/partners" element={<Partners/>}/>
                  <Route  path="/teams" element={<Teams/>}/>
                  <Route  path="/orders" element={<Orders/>}/>
                  <Route  path="/dashboard" element={<Dashboard/>}/>
                </Routes>

              </div>
          </div>
        </div>
    
     );
}
 
export default BodyLayout;