import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = ()=>{

    return(
       <div className="notfound-containor">
         <div className="notfound-text">
            <h3>Not Found</h3>
         </div> 
       </div>
    );
};

export default NotFound;