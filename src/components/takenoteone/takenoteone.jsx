import './takenoteone.css';
import React from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ImageIcon from '@mui/icons-material/Image';
import BrushIcon from '@mui/icons-material/Brush';

function Takenoteone({listToTakenoteone}){
  return(
    <div className="noteContainer" onClick={listToTakenoteone}>
      <div className="note">Take a note..</div>
         <div className="right"style={{flexDirection:'row',justifyContent:'center',gap:'10px'}}>
          <div className="right1" ><CheckBoxIcon /></div>
          <div className="right2"><BrushIcon /></div>
          <div className="right3"><ImageIcon /></div>
      </div>
      </div>
  )
}

export default Takenoteone