import axios from "axios";

const Headerconfig={
    headers:{
        Authorization : "Bearer"+" "+localStorage.getItem("token")
    }
}

export const getNotes=async()=>{
    let response =await axios.get(
        "http://localhost:3000/api/v1/notes/",
        Headerconfig
    )
    return response.data.data;
}

export const postNotes=async(obj)=>{
   let response= await axios.post(
    "http://localhost:3000/api/v1/notes/",
    obj,
    Headerconfig
   )
   return response
}

export const updateColor = async(obj,id) =>{
    let response=await axios.put(
        // "http://localhost:3000/api/v1/notes/_id",
        `http://localhost:3000/api/v1/notes/${id}`,
        obj,
        Headerconfig
    )
    return response
}

export const updateArchive = async(id) =>{
    let response=await axios.put(
        `http://localhost:3000/api/v1/notes/${id}/archive`,
        null,
        Headerconfig
    )
    return response
}

export const deleteNote = async(id) =>{
    let response=await axios.put(
        `http://localhost:3000/api/v1/notes/${id}/trash`,
        null,
        Headerconfig
    )
    return response
}

export const updateNote = async(obj) =>{
    let response=await axios.put(
        `http://localhost:3000/api/v1/notes/${obj._id}`,
        obj,
        Headerconfig
    )
    return response
}