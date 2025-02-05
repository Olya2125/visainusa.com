import {PopupButton} from 'react-calendly';
import './calendly.css'

const calendlyButtonStyle = {
  background: '#CF3549', 
  position: "fixed", 
  color: "#ffffff",
  fontFamily: "sans-serif",
  textAlign: "center",
  borderRadius: "12px",
  width: "auto",
  height: "45px",
  left: "50%",
  transform: "translateX(-50%)",
  bottom: "15px",
  padding: "0 30px",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "14px",
  fontWeigh:"700",
  border: "none",
  boxShadow: "0px 0px 6px 2px #353532",
}


const Calendly = ({userEmail, userName}) => {
    return(
      <PopupButton
        url="https://calendly.com/eb3unskilled/eb3unskilled"
        rootElement={document.getElementById("root")}
        text='Schedule the call here!'
        styles={calendlyButtonStyle}
        prefill={{email: userEmail, name: userName}}
      />
    )
}

export default Calendly