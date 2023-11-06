import React from "react";
import {Link} from 'react-router-dom';
import "../pages/LevelOne/LevelOne.css";



export const MainLevelTwo = () => {
    return(
        <div className="levels">
<div className="level-first-block">

<div className="appliName-level">
    <h2 className="level-list">Level 2</h2>
    <del className=" price-del appliName-levelOne-del">$100</del>
            <ins className=" price appliName-levelOne">$49</ins>
               <ul  className="text-discription-level">
                  <li  className="description-level">
                  Personal consultation (60 mins) on English, Spain or Russian languages 
                  </li>
                  <li className="description-level">
                  Deep analysis of your particular <br></br> situation 
                  </li>
                  <li className="description-level">

                  Step-by-step description to obtain <br></br> green card 
                  </li>

                  <li className="description-level">
                  General information about other <br></br> immigration programs in the U.S. 
                  </li>
                  <li className="description-level">
                  24 hours online chat after the consultation 
                  </li>
                  </ul>


               </div>
               <iframe width="550" height="415" src="https://www.youtube.com/embed/2PInBgRNHo4?si=RYBU3j3Bh_VF0Zfv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen className="youtube-level1"></iframe> 

            </div>

                           <div className="button-level2">
                           <div  >
                        <label className="label-level" > Provided information available in  </label>
                        <div className="mt-level">
                            <input className="test"  type="radio" name="question8" id="answerEight" value="yes"/>English
                            <input className="test"  type="radio" name="question8" value="no"/>Russian
                            <input className="test"  type="radio" name="question8" value="no"/>Spanish 
                            <label className="label-level" > languages  </label>
                        </div>
                    </div>
               <a href="#"  target="_blank">
                  <button className="button-level-two ">PAY</button>
                  </a> 
                  </div>

</div>

        
    )
}



