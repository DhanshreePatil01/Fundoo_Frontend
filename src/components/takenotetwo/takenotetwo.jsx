import React, { useState } from "react";
import './takenotetwo.css';
import AddAlertIcon from "@mui/icons-material/AddAlert";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ImageIcon from "@mui/icons-material/Image";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import PushPinIcon from "@mui/icons-material/PushPin";
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { postNotes } from "../../services/dataservice";
import ColorPopper from "../colorpopper/colorpopper";


function Takenotetwo(props){

    const [noteobj,setNotebj]=useState({title:'' , description:'',archive:false ,trash:false, color:'white'})
    
    const detectClick =() => {
       props.setDisplay(true)
    }

    const takeTitle=(event)=>{
        setNotebj((prevState)=>({
            ...prevState,
            title : event.target.value
        }))
    }

    const takeDescription=(event)=>{
        setNotebj((prevState)=>({
            ...prevState,
            description : event.target.value
        }))
    }

    const postNote=async()=>{
       let response= await postNotes(noteobj)
       return response
    }
    return (
        <ClickAwayListener onClickAway={detectClick}>
        <div className="container" style={{backgroundColor:noteobj.color}}>
            <div className="start-row">
               
                    <input onChange={takeTitle} className="title" type="text" placeholder="Title" style={{backgroundColor:noteobj.color}} />
                
                <div className="img">
                    <PushPinIcon />
                </div>
            </div>

            <div className="row2">
                <input  onChange={takeDescription} className="txt" type="text" placeholder="Take a note..." style={{backgroundColor:noteobj.color}} />
            </div>

            <div className="row3">
                <div>
                    <AddAlertIcon fontSize="small" />
                </div>
                <div>
                    <PersonAddAlt1Icon fontSize="small" />
                </div>
                <div>
                    <ColorPopper action ='create' setNotebj={setNotebj} />
                </div>
                <div>
                    <ImageIcon fontSize="small" />
                </div>
                <div>
                    <ArchiveIcon fontSize="small" onClick={()=>setNotebj((prevState)=>({...prevState,archive:true}))}/>
                </div>
                <div>
                    <MoreVertIcon fontSize="small" />
                </div>
                <div>
                    <UndoIcon fontSize="small" />
                </div>
                <div>
                    <RedoIcon fontSize="small" />
                </div>

                <div>
                    <Button onClick={postNote} variant="text">CLOSE</Button>

                </div>
            </div>
        </div>
        </ClickAwayListener>
      );
}

export default Takenotetwo