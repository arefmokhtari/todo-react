// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import Category from '@mui/icons-material/Category';
import Home from '@mui/icons-material/Home';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import FeedIcon from '@mui/icons-material/Feed';
import { NavLink } from 'react-router-dom';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { tokenName } from '../../hooks/request-hook';
import ChatIcon from '@mui/icons-material/Chat';
import DiscountIcon from '@mui/icons-material/Discount';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const configure = [
    { text: 'صفحه اصلی' , Cm: Home, to: '/' },
    { text: 'کاربران' , Cm: PersonIcon, to: '/users' },
    { text: 'دسته بندی ها' , Cm: Category, to: '/categories' },
    { text: 'محصولات' , Cm: AddBusinessIcon, to: '/products' },
    { text: 'اخبار' , Cm: FeedIcon, to: '/news' },
    { text: 'پیام ها' , Cm: ChatIcon, to: '/contect-us' },
    { text: 'درباره ما' , Cm: Diversity3Icon, to: '/about-us' },
    { text: 'کد تخفیف' , Cm: DiscountIcon, to: '/discount-code' },
    { text: 'خروج' , Cm: MeetingRoomIcon, to: '/login', props: {onClick: () => localStorage.removeItem(tokenName)} },
]
// - - - - - - - - - //
const drawerWidth = 240;

// - - - - - - - - - //
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
// - - - - - - - - - //
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
// - - - - - - - - - //
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
// - - - - - - - - - //
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
// - - - - - - - - - //
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default function Navigation({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{
        backgroundColor: '#71D0A0',
      }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            بارلوکس
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader sx={{backgroundColor: '#71D0A0', 
        boxShadow: open?'0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)':null}}>
          <IconButton onClick={handleDrawerClose} sx={{color: 'white', margin: 'auto'}}>
            <span>منو</span>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {configure.map(value => (
            <ListItem key={value.text} disablePadding sx={{ display: 'block' }} {... value.props}>
              <Tooltip enterDelay={0} leaveDelay={100} { ... open?{}:{title: value.text, placement:'left'}}>
              <ListItemButton component={NavLink} to={value.to} style={({isActive}) => isActive?{backgroundColor: '#f1f1f1'}:{}}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <value.Cm />
                </ListItemIcon>
                <ListItemText primary={value.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
            {children}
      </Box>
    </Box>
  );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //