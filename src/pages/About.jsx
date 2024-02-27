import React from 'react';
import { Title } from '../components/Title/Title';
import { Image } from 'semantic-ui-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myphoto from '../image/myphoto.jpg';
import "./styles.css"; // Import your CSS file for styling

const About = () => {
  return (
    <div className="page about">
      <Title>About</Title>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="image-container">
              {/* Set a specific width for the image to make it smaller */}
              <Image src={myphoto} style={{ width: '100%', maxWidth: '500px' , height: 'auto'}} rounded />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="text-container">
              <p>
              I'm Nhel, a college student on a journey of growth, discovery, and endless possibilities.
               Welcome to my virtual space—a place where I share my experiences, insights, 
               and adventures as I navigate through the exhilarating world of academia.<br/> Through this website,
                I invite you to join me on this exciting journey. From sharing study tips and academic 
                insights to documenting my travel adventures and personal reflections, 
                I hope to provide a glimpse into the multifaceted world of a college student.<br/>
                 Whether you're a fellow student seeking solidarity, an aspiring scholar hungry for knowledge,
                  or simply someone curious to learn more, I'm thrilled to have you here. Let's embark on this
                   exciting adventure together!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
