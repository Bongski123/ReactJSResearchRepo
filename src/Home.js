import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';



function Home(){

return (
    
    <div>

<Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="logo192.png" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="logo512.png" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          
        </Col>
      </Row>
    </Container>
    </div>



    
);



}

export default Home;