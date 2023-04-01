import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { updateColor } from '../../services/dataservice';

let colorList = [
    '#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed','#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0'];

export default function ColorPopper(props) {
   const {action,setNotebj,noteobj}= props
   const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const sendColor=async(color)=>{
   
   if(action=="create"){
    setNotebj((prevState)=>({
        ...prevState,
        color : color
    }))
   }
   else{
    noteobj['color']=color
    let response = await updateColor(noteobj,noteobj._id)
   }
  }
  return (
    <div>
    <ColorLensOutlinedIcon aria-describedby={id} type="button" onClick={handleClick} />
      
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display:'flex' }}>
          {
            colorList.map((color)=>(<div style={{borderRadius:50, height:35, width : 35, backgroundColor :color, margin:10 }} onClick={()=>sendColor(color)}></div>))
          }
        </Box>
      </Popper>
    </div>
  );
}