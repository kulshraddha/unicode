import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from '@mui/material';
import Email from "@mui/icons-material/Email"
import Phone from "@mui/icons-material/Phone"
import Edit from "@mui/icons-material/Edit"
import Delete from "@mui/icons-material/Delete"
import Bookmark from "@mui/icons-material/Bookmark"
import "./SideDrow.css"
import Context from '../BodyDetails/Context';
import SideBare from './SideBare';

const drawerWidth = 400;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const SideDrow = ({user}) => {

  const [diopen, setDiopen] = React.useState(false);

  const handleOpen = () => {
    setDiopen(true);
  };

  const handleClose = () => {
    setDiopen(false);
  };
  const theme = useTheme();

  const { open,handleDrawerClose } = React.useContext(Context);


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        
        <div className='cont'>
        <div className='both' style={{display: "flex"}}>

        <div className='part1'>
      <IconButton>
           <Bookmark/>
        </IconButton>
        <span>Marketing</span>
        </div>
        <div style={{marginLeft: 150}}>
            <IconButton color="error" onClick={handleOpen}>
           <Edit/>
        </IconButton>
            </div>
            <div>
            <IconButton color="error">
           <Delete/>
        </IconButton>
            </div>
        </div>
      <div className='part2'>
      <IconButton>
           <Email/>
        </IconButton>
       
            <span>shshs</span>
         
        </div>
        <div className="part3" >
      <IconButton >
           <Phone/>
        </IconButton> 
        <span>9922757817</span>      
        </div> 
    </div>
      </Drawer>

      <Context.Provider
         value={{
            diopen: diopen, 
            handleClose: handleClose,
           
         }}
     >   
     <SideBare/>
     </Context.Provider>
    </Box>
  );
}

export default SideDrow