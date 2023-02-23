import React from "react";
import TuitList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";
import "./index.css";

const HomeComponent = () => {
 return(
   <>
   <h4>Home</h4>
     <div className="row">
       <div className="col-11 position-relative">
         <input placeholder="Search Tuiter"
                className="form-control rounded-pill ps-5"/>
         <i className="bi bi-search position-absolute 
                       wd-nudge-up"></i>
       </div>
       <div className="col-1">
         <i className="wd-bottom-4 text-primary float-end bi 
                       bi-gear-fill fs-2 position-relative"></i>
       </div>
     </div>
     <ul className="nav nav-pills mb-2">
       <li className="nav-item">
         <a className="nav-link active">For You</a>
       </li>
       <li className="nav-item">
         <a className="nav-link">Trending</a>
       </li>
       <li className="nav-item">
         <a className="nav-link">News</a>
       </li>
     </ul>
     <WhatsHappening/>
     <TuitList/>
   </>
 );
};
export default HomeComponent;