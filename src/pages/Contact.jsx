import { motion } from "framer-motion";
import {FaPhone} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import "./styles.css";
import { Title } from "../components/Title/Title";
import { Body } from "../components/Body/Body";
import Navbar from "../components/Navbar/Navbar";
const Contact = () => {
  return (
    <div className="page contact">
      <Title delay={0.75}>Contact</Title>
      
   
      <Body delay={0.75}>
    
        
      <FaPhone id = "phone-icon" />
       0929-242-6393 
       <FaEnvelope id = "email-icon" />
       aalmario@gbox.ncf.edu.ph
      </Body>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{
          y: "100%",
        }}
        transition={{ duration: 2, ease: [0.2, 1, 0.2, 1] }} // Cubic bezier curve for easing
        className="slide"
      />
      <motion.div
        animate={{
          width: "0",
          height: "0",
          borderRadius: "100%",
        }}
        exit={{
          width: "100%",
          height: "100%",
          borderRadius: "0",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="circle"
      />
         <Navbar />
    </div>
    
  );
  
};

export default Contact;
