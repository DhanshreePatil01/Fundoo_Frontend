import React from "react";
import Header from "../../components/header/header";
import Takenoteone from "../../components/takenoteone/takenoteone";
import Takenotethree from "../../components/takenotethree/takenotethree";
import Takenotetwo from "../../components/takenotetwo/takenotetwo";
import { getNotes } from "../../services/dataservice";
import './dashboard.css';
import NavDrawer from  '../../components/navDrawer/navDrawer';
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

function Dashboard(){

    const [notes,setNotes] = React.useState([])
    const [display,setDisplay] = React.useState(true)
    const [displayNav,setDisplayNav]=React.useState(false)

    const listToTakenoteone = () =>{
        setDisplay(false)
    }

    // React.useEffect(async()=>{
    //  let response = await getNotes()
    //  setNotes(response.data.data)
    // },[])

    // React.useEffect(() => { async function fetchData() {
    //   let response = await getNotes()
    //   setNotes(response)
    //   console.log(response);
    //  }
    //  fetchData();
    // },[])
      
    React.useEffect(() => {
      getData("Notes");
    }, []);
    
    const getData =async(typeOfNotes)=> {
       let response=await getNotes()
        if(typeOfNotes==="Notes")
        {
          setNotes(response.filter((obj)=>{
             return obj.archive===false && obj.trash===false
          })); 
         
        }

        else if(typeOfNotes==="Archive"){
          console.log(response);
          setNotes(response.filter((obj)=>{
            return obj.archive===true && obj.trash===false
         })); 
         console.log(response.filter((obj)=>{
          return obj.archive===true && obj.trash===false
       }))
    
        }

        else if(typeOfNotes==="Trash"){
          console.log(response);
          setNotes(response.filter((obj)=>{
            return obj.archive===false && obj.trash===true
         })); 

         console.log(response.filter((obj)=>{
          return obj.archive===false && obj.trash===true
       }));
      }
              
    }
 
   const listenToHeader=()=>{
     setDisplayNav(!displayNav)
   }

    return(
      <div>
        <Header listenToHeader={listenToHeader}/>
        <NavDrawer displayNav={displayNav} getData={getData}/>

        {display ? 
        <Takenoteone listToTakenoteone={listToTakenoteone}/> : 
       
        <Takenotetwo setDisplay={setDisplay}/>
         }
         <Container
        className="tn3container"
        style={{ width: "80vw", marginTop: "55px" }}
      >
         <Grid container spacing={2} className="box">
          {notes.map((noteobj) => (
            <Grid item lg={3} md={4} sm={6} xs={12}>
               <Takenotethree noteobj={noteobj} getData = {getData} />
            </Grid>
          ))}
        </Grid>
        </Container>
        {/* <div className="box">
           {
           notes.map((noteobj) => 
            
            <Takenotethree noteobj={noteobj} getData = {getData} />
            
          )} 
        </div> */}

      </div> //main div tag
    )
}

export default Dashboard
