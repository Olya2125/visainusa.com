import React from "react";

import "../pages/LevelOne/LevelOne.css";
import axios from "../api/axios";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";


export const MainLevel = () => {
   const navigate = useNavigate();
   const payForLevel = async () => {
      try{
         await axios.get("/checkout/level1", {
            withCredentials: true
         })

         toast.success("Succesfully purchased level 1!", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light"}
         )

         navigate("/profile")
      }
      catch(err){
         let errorMessage = "";
         if (!err?.response) {
             errorMessage = 'No Server Response'
         } else if (err.response?.status === 401) {
             errorMessage = 'You already have this level!'
         }
         else if (err.response?.status === 403) {
            errorMessage = 'You are not authorized!'
         } 
         else {
             errorMessage = 'Payment failed!'
         }
         toast.error(errorMessage, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light"}
         )
      }
   }

    return(
        <div>
<div className="level-first-block">

    <div className="appliName-level">
    <h2 className="level-list">Level 1</h2>
               <del className=" price-del-level">$50</del>
               <ins className=" price-level" >$25</ins>
               <ul  className="text-discription-level">
                  <li  className="description-level">
                      - What is eb3 unskilled visa category?
                  </li>
                  <li className="description-level">
                      - How does eb3 unskilled visa work?
                  </li>
                  <li className="description-level">
                     {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="12" viewBox="0 0 33 26" fill="none">
                        <path d="M31.9611 3.0991L29.417 0.554938C29.047 0.185006 28.6073 0 28.0984 0C27.5901 0 27.1501 0.185006 26.7804 0.554938L11.8173 15.5179L5.73545 9.43557C5.36536 9.06539 4.92585 8.88063 4.41724 8.88063C3.90855 8.88063 3.4692 9.06539 3.09903 9.43557L0.555182 11.9794C0.185169 12.3494 0 12.7889 0 13.2979C0 13.8065 0.185169 14.2459 0.555182 14.6161L10.4995 24.5603C10.8696 24.9306 11.3091 25.1153 11.8177 25.1153C12.3263 25.1153 12.7657 24.9307 13.1359 24.5603L31.9609 5.73544C32.3307 5.36551 32.5161 4.92592 32.5161 4.41723C32.5161 3.90854 32.3312 3.46903 31.9611 3.0991Z" fill="#032144"/>
                     </svg> */}
                    - How long does it take to get the U.S. permanent resident card? 
                  </li>
                  {/* <p className="description-level ">
                     <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="12" viewBox="0 0 33 26" fill="none">
                        <path d="M31.9611 3.0991L29.417 0.554938C29.047 0.185006 28.6073 0 28.0984 0C27.5901 0 27.1501 0.185006 26.7804 0.554938L11.8173 15.5179L5.73545 9.43557C5.36536 9.06539 4.92585 8.88063 4.41724 8.88063C3.90855 8.88063 3.4692 9.06539 3.09903 9.43557L0.555182 11.9794C0.185169 12.3494 0 12.7889 0 13.2979C0 13.8065 0.185169 14.2459 0.555182 14.6161L10.4995 24.5603C10.8696 24.9306 11.3091 25.1153 11.8177 25.1153C12.3263 25.1153 12.7657 24.9307 13.1359 24.5603L31.9609 5.73544C32.3307 5.36551 32.5161 4.92592 32.5161 4.41723C32.5161 3.90854 32.3312 3.46903 31.9611 3.0991Z" fill="#032144"/>
                     </svg>
                    How long does it take to get the U.S. permanent resident card? 
                  </p> */}
                  <li className="description-level">
                     {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="12" viewBox="0 0 33 26" fill="none">
                        <path d="M31.9611 3.0991L29.417 0.554938C29.047 0.185006 28.6073 0 28.0984 0C27.5901 0 27.1501 0.185006 26.7804 0.554938L11.8173 15.5179L5.73545 9.43557C5.36536 9.06539 4.92585 8.88063 4.41724 8.88063C3.90855 8.88063 3.4692 9.06539 3.09903 9.43557L0.555182 11.9794C0.185169 12.3494 0 12.7889 0 13.2979C0 13.8065 0.185169 14.2459 0.555182 14.6161L10.4995 24.5603C10.8696 24.9306 11.3091 25.1153 11.8177 25.1153C12.3263 25.1153 12.7657 24.9307 13.1359 24.5603L31.9609 5.73544C32.3307 5.36551 32.5161 4.92592 32.5161 4.41723C32.5161 3.90854 32.3312 3.46903 31.9611 3.0991Z" fill="#032144"/>
                     </svg> */}
                     - Am i eligible for eb3 unskilled visa?
                  </li>
                  <li className="description-level">
                     {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="12" viewBox="0 0 33 26" fill="none">
                        <path d="M31.9611 3.0991L29.417 0.554938C29.047 0.185006 28.6073 0 28.0984 0C27.5901 0 27.1501 0.185006 26.7804 0.554938L11.8173 15.5179L5.73545 9.43557C5.36536 9.06539 4.92585 8.88063 4.41724 8.88063C3.90855 8.88063 3.4692 9.06539 3.09903 9.43557L0.555182 11.9794C0.185169 12.3494 0 12.7889 0 13.2979C0 13.8065 0.185169 14.2459 0.555182 14.6161L10.4995 24.5603C10.8696 24.9306 11.3091 25.1153 11.8177 25.1153C12.3263 25.1153 12.7657 24.9307 13.1359 24.5603L31.9609 5.73544C32.3307 5.36551 32.5161 4.92592 32.5161 4.41723C32.5161 3.90854 32.3312 3.46903 31.9611 3.0991Z" fill="#032144"/>
                     </svg> */}
                     - How much does eb3 unskilled cost?
                  </li>
                  <li className="description-level">
                     {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="12" viewBox="0 0 33 26" fill="none">
                        <path d="M31.9611 3.0991L29.417 0.554938C29.047 0.185006 28.6073 0 28.0984 0C27.5901 0 27.1501 0.185006 26.7804 0.554938L11.8173 15.5179L5.73545 9.43557C5.36536 9.06539 4.92585 8.88063 4.41724 8.88063C3.90855 8.88063 3.4692 9.06539 3.09903 9.43557L0.555182 11.9794C0.185169 12.3494 0 12.7889 0 13.2979C0 13.8065 0.185169 14.2459 0.555182 14.6161L10.4995 24.5603C10.8696 24.9306 11.3091 25.1153 11.8177 25.1153C12.3263 25.1153 12.7657 24.9307 13.1359 24.5603L31.9609 5.73544C32.3307 5.36551 32.5161 4.92592 32.5161 4.41723C32.5161 3.90854 32.3312 3.46903 31.9611 3.0991Z" fill="#032144"/>
                     </svg> */}
                     - What should i do in case of refusal?
                  </li>
                  <li className="description-level">
                     {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="12" viewBox="0 0 33 26" fill="none">
                        <path d="M31.9611 3.0991L29.417 0.554938C29.047 0.185006 28.6073 0 28.0984 0C27.5901 0 27.1501 0.185006 26.7804 0.554938L11.8173 15.5179L5.73545 9.43557C5.36536 9.06539 4.92585 8.88063 4.41724 8.88063C3.90855 8.88063 3.4692 9.06539 3.09903 9.43557L0.555182 11.9794C0.185169 12.3494 0 12.7889 0 13.2979C0 13.8065 0.185169 14.2459 0.555182 14.6161L10.4995 24.5603C10.8696 24.9306 11.3091 25.1153 11.8177 25.1153C12.3263 25.1153 12.7657 24.9307 13.1359 24.5603L31.9609 5.73544C32.3307 5.36551 32.5161 4.92592 32.5161 4.41723C32.5161 3.90854 32.3312 3.46903 31.9611 3.0991Z" fill="#032144"/>
                     </svg> */}
                     - How do i start my eb3 journey?
                  </li>
                     <li className="description-level">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="12" viewBox="0 0 33 26" fill="none">
                           <path d="M31.9611 3.0991L29.417 0.554938C29.047 0.185006 28.6073 0 28.0984 0C27.5901 0 27.1501 0.185006 26.7804 0.554938L11.8173 15.5179L5.73545 9.43557C5.36536 9.06539 4.92585 8.88063 4.41724 8.88063C3.90855 8.88063 3.4692 9.06539 3.09903 9.43557L0.555182 11.9794C0.185169 12.3494 0 12.7889 0 13.2979C0 13.8065 0.185169 14.2459 0.555182 14.6161L10.4995 24.5603C10.8696 24.9306 11.3091 25.1153 11.8177 25.1153C12.3263 25.1153 12.7657 24.9307 13.1359 24.5603L31.9609 5.73544C32.3307 5.36551 32.5161 4.92592 32.5161 4.41723C32.5161 3.90854 32.3312 3.46903 31.9611 3.0991Z" fill="#032144"/>
                        </svg> */}
                        - Online chat 24 hours 
                     </li>
                  </ul>

               </div>
               <iframe width="550" height="415" src="https://www.youtube.com/embed/2PInBgRNHo4?si=RYBU3j3Bh_VF0Zfv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowFullScreen className="youtube-level1"></iframe> 
            </div>

            <button onClick={payForLevel} className="button-levels ">PAY</button>
            

</div>

        
    )
}



