import { motion } from "framer-motion";

import "./styles.css";
import { Title } from "../components/Title/Title";
import { Body } from "../components/Body/Body";

const Education = () => {
  return (
    <div className="page education">
      <Title delay={0.75}>Education</Title>
      <Body delay={0.75}>
      I'm Nhel, and I'm excited to share my educational journey with you. 
      As a lifelong learner with a thirst for knowledge, 
      I've dedicated myself to pursuing excellence in academics and beyond.<br/><br/>

      My educational voyage began at <h2>Sabang Elementary School and Calabanga National High School</h2>, 
        where I laid the foundation for my academic endeavors.
       Here, I cultivated a love for learning and honed essential skills that would shape my future path.<br/><br/>
       Building upon this strong foundation, I pursued higher education at Naga College Foundation, 
       where I embarked on a transformative journey of intellectual discovery. <br/><br/>
   






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
    </div>
  );
};

export default Education;
