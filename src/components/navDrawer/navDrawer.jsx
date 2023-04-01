import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import './navDrawer.css';
import { connect } from 'react-redux';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
}));

 function NavDrawer(props) {
console.log(props);
    const open = props.displayNav

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        <List>
          <ListItem key={'Notes'} disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={()=>props.getData("Notes")}
 /* <ListItemButton onClick={()=>{props.getData("Notes"); props.dispatch({type:"Notes"}) }} */
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
                <LightbulbIcon fontSize='large'/>
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary={'Notes'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Archive'} disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={()=>{props.getData('Archive'); props.dispatch({type:"archive"}) }}
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
                <ArchiveOutlinedIcon fontSize='large' />
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText
                primary={'Archive'}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Trash'} disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={()=>{props.getData('Trash'); props.dispatch({type:"trash"}) }}
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
                <DeleteSharpIcon fontSize='large'/>
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary={'Trash'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
export default connect()(NavDrawer)