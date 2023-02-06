import  React,{Fragment, useState} from 'react';
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
import "./SideBare.css"
import Context from '../BodyDetails/Context';
import SideDrow from './SideDrow';

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

const SideBare = () => {
  const theme = useTheme();

  const { diopen,handleClose} = React.useContext(Context);

  const [users, setUsers] = useState({email:[""], mobile: [""]})
  const [user, setUser] = useState([])

  const handleChange = (e) => {
    const{name, value} = e.target
    setUser({...user, [name]: value})
  }
 const handleSubmit = (e) => {
  e.preventDefault()
  console.log("users", user);
 }
  const addEmail = () => {
    setUsers({...users, email: [...users.email, ""]})
  }

  const addMobile = () => {
    setUsers({...users, mobile: [...users.mobile, ""]})
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Main open={diopen} >
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
        open={diopen}
        
      >
        <DrawerHeader>
          <IconButton onClick={handleClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <div className='inputpart'>
           <div className='titlepart'>
         
           <span><p>Email ID</p>
           {users.email.map((ema, i) => {
            return(
              <Fragment key={i}>
                <input type="text" placeholder='  eg. sale@gmail.com' onChange={handleChange} name="email"/>
              </Fragment>
            )
           })}
          </span>
           <button onClick={addEmail}>+ Add More</button>
           </div>

           <div className='titlepart1'>
           <span><p>Contect Number</p>
           {users.mobile.map((mob, i) => {
            return(
              <Fragment key={i}>
               <input type="text" placeholder='  eg. 9922756845' onChange={handleChange} name="mobile"/>
              </Fragment>
            )
           })}
           </span>
           <button onClick={addMobile}>+ Add More</button>
           </div>

           <div className='save'><button onClick={handleSubmit}>Save</button></div>
        </div>
      </Drawer> 
    </Box>
  );
}

export default SideBare