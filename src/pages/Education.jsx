import React from 'react';
import { Title } from '../components/Title/Title';
import { Image } from 'semantic-ui-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myphoto from '../image/logoschool.png';
import "./styles.css"; // Import your CSS file for styling
import { Body } from '../components/Body/Body';
import Navbar from '../components/Navbar/Navbar';
const Education = () => {
  return (

    <div className="page education">
      <Title>Educational Background</Title>
      <Body>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="image-container1 round-container">
              {/* Set a specific width for the image to make it smaller */}
              <Image src={myphoto} rounded />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="text-container1">
              <p>
                I'm Nhel,and I'm excited to share my educational journey with you. 
                As a lifelong learner with a thirst for knowledge, I've dedicated
                myself to pursuing excellence in academics and beyond.<br/>
                My educational voyage began at Sabang Elementary School and 
                Calabanga National High School, where I laid the foundation 
                for my academic endeavors. Here, I cultivated a love for learning 
                and honed essential skills that would shape my future path.<br/>
                Building upon this strong foundation, I pursued higher education at
                Naga College Foundation, where I embarked on a transformative journey of intellectual discovery.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    
      </Body>
      <Navbar />
    </div>
  );
};

export default Education;
