import axios from "axios";

export const signingUp=(obj) => {
    let response = axios.post(
        "http://localhost:3000/api/v1/users/",
        obj
    );
    return response
};

export const signIn = (obj) => {
    let response = axios.post(
        "http://localhost:3000/api/v1/users/login",
        obj
    );
    return response
};