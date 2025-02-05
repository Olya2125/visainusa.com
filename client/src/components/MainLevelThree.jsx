import React from "react";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import "../pages/LevelOne/LevelOne.css";
import axios from "../api/axios";
import {toast} from "react-toastify";
import { Link } from "react-router-dom";


export const MainLevelThree = () => {

   const navigate = useNavigate();

   const [levelCost, setLevelCost] = useState(0);
   const [canPurchase, setCanPurchase] = useState(false);

   const purchaseLevel = async () => {
      try {
         await axios.post("/payment/verify", 
         {
            level: 3
         },
         {
            withCredentials: true
         })

         navigate("/payment", {state: {levelToPurchase: 3, price: levelCost}});
      }
      catch(err){
         let errorMessage = "";
         if (!err?.response) {
             errorMessage = 'No Server Response'
         } else if (err.response?.status === 401) {
             errorMessage = 'You already have this level!'
         }
         else if (err.response?.status === 403) {
            errorMessage = 'You are not authorized! Please login or sign up to make purchase!';
            navigate("/login");
         } 

         toast.error(errorMessage, {
            position: "top-center",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light"}
         )
      }
   }

   useEffect(() => {
      async function getLevelCost(){
         try{
             const res = await axios.post("/payment/getLevelCost", {
                 level: 3
             })
             setLevelCost(res.data.cost);
             setCanPurchase(true);
         }
         catch(err){
             toast.error("Error to get level cost!",{
                 position: "top-center",
                 autoClose: 10000,
                 hideProgressBar: false,
                 closeOnClick: true,
                 pauseOnHover: false,
                 draggable: false,
                 progress: undefined,
                 theme: "light",
                 }
             );
             setCanPurchase(false);
         }
       }

       getLevelCost()
   }, [])

    return(
        <div className="levels">
<div className="level-first-block">

    <div className="appliName-level">
    <h2 className="level-list">Level 3</h2>
    <h3 className="appliName-names">"Smart immigration with no overpriced assistance"</h3>
               <del className=" price-del-level">$1500</del>
               {canPurchase && <ins className=" price-level" >${levelCost}</ins>}
               <ul  className="text-discription-level">
                  <li  className="description-level">
                  Access to more than 1000 U.S. employers’ database (script of pitch included)
                  </li>
                  <li className="description-level">
                  Access to more than 25 U.S. immigration attorneys’ database 
                  </li>
                  <li className="description-level">
                  Access to instruction of immigration forms as I-140, I-485, I-765, I-131 and DS-260
                  </li>
                  <li className="description-level">
                  List of EB3 unskilled agencies
                  </li>
                  <li className="description-level">
                  48 hours online chat after the consultation
                  </li>
                  <li className="description-level">
                  Job offering pool
                  </li>
                  <li className="description-level">
                  Opportunity to complete entire EB3 program from 9999$
                  </li>            
                  <p className="coming-bonus">Extra bonus!</p>
                        <li className="description-level">
                        Be prepared to immerse in English language environment (3 x 30 mins speaking club for you and your kids)
                  </li>
                  </ul>

               </div>
               <iframe width="550" height="415" src="https://www.youtube.com/embed/2PInBgRNHo4?si=RYBU3j3Bh_VF0Zfv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen className="youtube-level1"></iframe> 

            </div>

                           {/* <div className="button-level2">
                           <div  >
                        <label className="label-level" > Provided information available in  </label>
                        <div className="mt-level">
                            <input className="test"  type="radio" name="question8" id="answerEight" value="yes"/>English
                            <input className="test"  type="radio" name="question8" value="no"/>Russian
                            <input className="test"  type="radio" name="question8" value="no"/>Spanish 
                            <label className="label-level" > languages  </label>
                        </div>
                    </div>
                  </div> */}
                  <div className="button-level2">
                    <button className="button-level-two" disabled={!canPurchase} onClick={purchaseLevel}>PAY</button>
                </div>

      </div>

        
    )
}



