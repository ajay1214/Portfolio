import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";

const Footer = ()=>{
    return(
        <>
            <div className="footer">
                <div> 
                     <p style={{display:"block",textAlign:"center",paddingTop:"5px",marginBottom:"0"}} >
                        © Copyright {new Date().getFullYear()} Made with ❤ by Ajay
                     </p>  
                    
                </div>
              
            </div>
        </>
    );
}

export default Footer;