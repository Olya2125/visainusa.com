import React from "react";
import "../pages/Main/main.css"
import { HeaderForMain } from "./HeaderForMain";
import {Link} from 'react-router-dom';


export const MainPhoto = ({logout}) => {
    return(
        <div className="photoMain">
            <HeaderForMain logout = {logout}/>
        <div>
       <div className="center-text">
      <div className="fly-text">
      <p id="first-text" >EB3 unskilled program</p>
       <p id="second-text" >All our team got green cards through it </p>
        <p id="third-text">We do know how to assist your case</p>

              <div className="buttons-main">
              <Link to="./abouteb3">
                   <button className="btn-abouteb3">About EB3</button>
                   </Link>
                 <Link to="/survey" className="btn-level-top">
                 <button className="btn-level-anketa-l">Determine your eligibility</button></Link>
              </div>
          </div>
        </div>
        </div>
        </div>
    )
}