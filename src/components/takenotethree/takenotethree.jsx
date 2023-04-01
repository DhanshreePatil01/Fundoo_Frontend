import React from "react";
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ImageIcon from "@mui/icons-material/Image";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PushPinIcon from '@mui/icons-material/PushPin';
import ColorPopper from "../colorpopper/colorpopper";
import { updateArchive,deleteNote,updateNote } from "../../services/dataservice";

import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height :100,
    bgcolor: 'background.paper',
    border: '1px solid black',
    borderRadius :'7px',
    boxShadow: 24,
    p: 4
    
  };

function Takenotethree(props){

    const [open, setOpen] = React.useState(false);
    const [editNote,setEditNote] = React.useState({})
    const handleOpen = (obj) => {
        setEditNote(obj);
        setOpen(true)
    }
    const handleClose = () => setOpen(false);
  
    console.log(props.noteobj);

    const updateNoteArchive=async(obj)=>{
        let response =  await updateArchive(obj._id)
        console.log(response);
    }

    const deleteupdateNote=async(obj)=>{
        let response =  await deleteNote(obj._id)
        console.log(response);
    }

    const change=async()=>{
       let response= await updateNote(editNote)
       console.log(response);
    }

    return(
        <>
            <Card className="indicard" style={{ backgroundColor: props.noteobj.color }}>

                <CardContent onClick={() => handleOpen(props.noteobj)}>

                    <Typography variant="h6" flexWrap="wrap" gutterBottom >
                        {props.noteobj.title}
                    </Typography>
                    
                    <Typography component="div" color="text.secondary" paragraph="true" flexWrap="wrap" width="100" height="50%">
                        {props.noteobj.description}
                    </Typography>

                </CardContent>

                <CardActions>
                    <div className='note-icons' style={{ width: '250px', height: '15px', display: 'flex', flexDirection: 'row', marginLeft: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
                       
                       <Tooltip title='Alert'>
                        <AddAlertIcon />
                        </Tooltip>   

                        <Tooltip title='AddPerson'>  
                        <PersonAddAlt1Icon />
                        </Tooltip>

                        <Tooltip title='ColorPopper'>
                        <ColorPopper action='edit' noteobj={props.noteobj} />
                        </Tooltip>

                        <Tooltip title='ImageIcon'>
                        <ImageIcon />
                        </Tooltip>
                        
                        <Tooltip title='Archive'>
                        <ArchiveIcon onClick={() => updateNoteArchive(props.noteobj)} />
                        </Tooltip>

                        <Tooltip title='Trash'>
                        <DeleteIcon onClick={() => deleteupdateNote(props.noteobj)} />
                        </Tooltip>
     
                        <Tooltip title='More'>
                        <MoreVertIcon />
                        </Tooltip>

                    </div>
                </CardActions>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ backgroundColor: editNote.color }}>

                    <input type={'text'} defaultValue={editNote.title} onChange={(e) => setEditNote((prev) => ({ ...prev, title: e.target.value }))} style={{ width: '500px', height: '20px', border: 'none', display: 'flex', flexDirection: 'row', fontSize: '1em', fontWeight: 'bold', marginLeft: '8px', alignItems: 'center', backgroundColor: editNote.color }} />
                    <br />

                    <input type={'text'} defaultValue={editNote.description} onChange={(e) => setEditNote((prev) => ({ ...prev, description: e.target.value }))} style={{ width: '500px', height: '20px', border: 'none', display: 'flex', flexDirection: 'row', fontSize: '1em', marginLeft: '8px', alignItems: 'center', backgroundColor: editNote.color }} />
                    {/* <br /> */}
                    <div className='note-icons' style={{ width: '550px', height: '10px', display: 'flex', flexDirection: 'row', marginTop: '30px', justifyContent: 'space-evenly', alignItems: 'center' }}>

                        <AddAlertIcon />

                        <PersonAddAlt1Icon />

                        <ColorPopper action='edit' />

                        <ImageIcon />

                        <ArchiveIcon onClick={() => updateNoteArchive(props.noteobj)} />

                        <DeleteIcon onClick={() => deleteupdateNote(props.noteobj)} />


                        <MoreVertIcon />
                        <button onClick={change} style={{ backgroundColor: editNote.color }}>Close</button>
                    </div>

                </Box>
            </Modal>
 </>
        
        // <div className='note' style={{border : '0.5px solid gray',width : '300px', height:'140px', marginTop :'40px',borderRadius:'3px',boxShadow: '0 1px 7px darkgray',backgroundColor:props.noteobj.color}} >
            
        //     <div className='note-title'  onClick={()=>handleOpen(props.noteobj)} >
                
        //         <div className='note-title'style={{width : '130px', height:'10px',display:'flex',flexDirection:'row',fontSize:'1em', fontWeight:'bold', marginLeft:'10px',alignItems:'center'}}>
                      
        //               {props.noteobj.title} 
                    
        //             </div>
                
        //         <div className='pushpin' style={{display:'flex', flexDirection:'row',marginLeft:'256px'}}>
                    
        //             <PushPinIcon />
                    
        //             </div>
           

        //         <div className='note-desc' onClick={()=>handleOpen(props.noteobj)} style={{width : '150px', height:'10px',display:'flex',flexDirection:'row',fontSize:'1em',marginLeft:'10px'}}>
                
        //             {props.noteobj.description}
                
        //         </div>
           
        //         <div className='note-icons' style={{width : '250px', height:'10px',display:'flex',flexDirection:'row',marginLeft:'10px', marginTop:'50px',justifyContent:'space-evenly', alignItems:'center'}}>
                
        //         <AddAlertIcon />

        //         <PersonAddAlt1Icon />

        //         <ColorPopper action='edit' noteobj={props.noteobj} />

        //         <ImageIcon />

        //         <ArchiveIcon onClick={()=>updateNoteArchive(props.noteobj)}/>

        //         <DeleteIcon  onClick={()=>deleteupdateNote(props.noteobj)}/>

        //         <MoreVertIcon />
        //     </div>
        //     </div>
        //     <Modal
        //         open={open}
        //         onClose={handleClose}
        //         aria-labelledby="modal-modal-title"
        //         aria-describedby="modal-modal-description"
        //     >
        //         <Box sx={style} style={{backgroundColor:editNote.color}}>
                
        //             <input type={'text'} defaultValue={editNote.title} onChange={(e) => setEditNote((prev) => ({ ...prev, title: e.target.value }))} style={{width : '500px', height:'20px',border:'none',display:'flex',flexDirection:'row',fontSize:'1em', fontWeight:'bold', marginLeft:'8px',alignItems:'center',backgroundColor:editNote.color}}/>
        //             <br />
                    
        //             <input type={'text'} defaultValue={editNote.description} onChange={(e) => setEditNote((prev) => ({ ...prev, description: e.target.value }))} style={{width : '500px', height:'20px',border:'none',display:'flex',flexDirection:'row',fontSize:'1em', marginLeft:'8px',alignItems:'center',backgroundColor:editNote.color}} />
        //             {/* <br /> */}
        //             <div className='note-icons' style={{width : '550px', height:'10px',display:'flex',flexDirection:'row', marginTop:'40px',justifyContent:'space-evenly', alignItems:'center'}}>
                
        //              <AddAlertIcon />

        //             <PersonAddAlt1Icon />

        //             <ColorPopper action='edit' />

        //             <ImageIcon />

        //             <ArchiveIcon onClick={()=>updateNoteArchive(props.noteobj)}/>

        //             <DeleteIcon  onClick={()=>deleteupdateNote(props.noteobj)}/>


        //             <MoreVertIcon />
        //             <button onClick={change} style={{backgroundColor:editNote.color}}>Close</button>
        //             </div>

        //         </Box>
        //     </Modal>
        // </div>
       
    )
}

export default Takenotethree