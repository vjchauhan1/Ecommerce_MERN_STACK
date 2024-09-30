import React from "react";
import { useState,useContext,useEffect } from "react";
import AuthContext from "./authContext";
import axios from "axios";


const AuthProvider = (props) => {
    const [auth, setAuth] = useState({
      user: null,
      token: "",
    });

    axios.defaults.headers.common["Authorization"]= auth?.token;


    useEffect(()=>{
        const data = localStorage.getItem("auth");
        if(data){
            const parseData= JSON.parse(data);
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token
            })
        }
    },[]);

  
    return (
      <AuthContext.Provider value={[auth, setAuth]}>
        {props.children}
      </AuthContext.Provider>
    );
  };
  
  
  const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
  };
  
  export { useAuth, AuthProvider };