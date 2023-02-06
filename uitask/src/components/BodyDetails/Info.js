import { IconButton } from '@mui/material';
import Contacts from "@mui/icons-material/Contacts"
import LocationOn from "@mui/icons-material/LocationOn"
import WorkHistory from "@mui/icons-material/WorkHistory"
import Edit from "@mui/icons-material/Edit"
import Context from "../BodyDetails/Context"
import Email from "@mui/icons-material/Email"
import Phone from "@mui/icons-material/Phone"
import React, { useContext, useState } from 'react';
import "./Info.css"
import SideDrow from '../SideBar/SideDrow';
const Info = () => {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

   const {print }= useContext(Context);
    return ( 
      <>
        <div>
        <div className='infostart'>
        <div className='contact' style={{border: "1px solid #ddd"}}>
        <div className='connect'><IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
           <Contacts/>
        </IconButton><span className='text'>Contect</span> <span className='icon'>
         <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }} onClick={handleDrawerOpen}>
           <Edit color='error'/>
        </IconButton></span></div>
        
        <div className='part5'>
      <IconButton>
           <Email/>
        </IconButton>
            <span>sale12@gmail.com</span>
        </div>
        
        <div className='part5'>
      <IconButton>
           <Phone/>
        </IconButton>
            <span>9922657865</span>
        </div>
       
       
        </div>
        <div className='adress'style={{border: "1px solid #ddd"}}>
        <div className='connect'><IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
           <LocationOn/>
        </IconButton><span className='text'>Address</span> <span className='icon'>
         <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }} onClick={handleDrawerOpen}>
           <Edit color='error'/>
        </IconButton></span></div>
        <div className='part5'>
      <IconButton>
           <Email/>
        </IconButton>
            <span>sale12@gmail.com</span>
        </div>
        
        <div className='part5'>
      <IconButton>
           <Phone/>
        </IconButton>
            <span>9922657865</span>
        </div>

        </div>
        <div className='time' style={{border: "1px solid #ddd"}}>
        <div className='connect'><IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
           <WorkHistory/>
        </IconButton><span className='text'>Hours of Operations</span> <span className='icon1'>
         <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }} onClick={handleDrawerOpen}>
           <Edit color='error'/>
        </IconButton></span></div>
        <div className='part5'>
      <IconButton>
           <Email/>
        </IconButton>
            <span>sale12@gmail.com</span>
        </div>
        
        <div className='part5'>
      <IconButton>
           <Phone/>
        </IconButton>
            <span>9922657865</span>
        </div>
       
        </div>
      
        </div>
       
        </div>
        <Context.Provider
         value={{
            open: open, 
            handleDrawerClose: handleDrawerClose
         }}
     >   
     <SideDrow/>
     </Context.Provider>
     </>
     );
}
 
export default Info;