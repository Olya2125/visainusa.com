import React, {useState} from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import "../AboutEB3/AboutEB3.css";
import Contacts from "../../components/Contacts"
import AboutEB3Main from '../../components/AboutEB3Main';


const AboutEB3 = () => {
  
    return (
        <div >
            <Header />
<AboutEB3Main />
<Contacts/>
  <Footer />
        </div>
    )
  }
  
  export default AboutEB3