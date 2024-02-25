import * as React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import { CarouselItem } from 'react-bootstrap';


import image1 from './image/the-founder.jpg';
import image2 from './image/lolo-mel.jpg';
import image3 from './image/myphoto.jpg';
function aboutme(){

return (


  <div class="shadow-lg bg-white rounded-lg">
  <Carousel>
    <Carousel.Item>
      <div className='carouselpics'>
        <img src={image3} alt="Image 3" style={{ width: '500px', height: '600px' }} fluid  />
        <Carousel.Caption>
          <h3>About me</h3>
          <p className='info' style={{ position: 'absolute', top: '100%', left: '60%', transform: 'translate(-20%, -200%)' }} >
        <h1>Hi, Im Arnel!</h1>
          </p>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className='carouselpics'>
        <img src={image2} alt="Image 2" style={{ width: '500px', height: '600px' }} />
        <Carousel.Caption>
          <h3>The College</h3>
          <p className='info' style={{ position: 'absolute', top: '100%', left: '60%', transform: 'translate(-20%, -200%)' }} >
           Founded in 1947, NAGA COLLEGE FOUNDATION was Dr. Melchor T. Villanueva’s answer to the growing need in Bicol for quality, affordable education. A public school teacher, and a passionate educator, Dr. Villanueva founded the school shortly after World War II to help rebuild Naga. The war brought along with it unique hardships. Education was particularly hard hit. As a result, teachers in Naga were scarce.<br/><br/>

Those who wanted to pursue a career in education were faced with the decision to leave their homes and travel to Manila. Consequently, a career in teaching was reserved for a select few.<br/><br/>

Using his own funds, and what he was able to raise through the aid of some friends, Naga College Foundation’s doors were first opened in 1947 out of a rented house situated along Peñafrancia Avenue. Originally named, “NAGA TEACHERS COLLEGE”, the school began by offering a 2-year course in Education, with 114 enrollees, addressing the area’s great demand for teachers.<br/><br/>

Throughout the years, the school continued to grow, guided by the vision of its founder. In 1951, NAGA TEACHERS COLLEGE became NAGA COLLEGE. The change in name was accompanied by the introduction of elementary and high school education. In 1985, the school was registered as a non-profit organization, changing its name to its present NAGA COLLEGE FOUNDATION.<br/><br/>
          </p>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
  </Carousel>
</div>



    
);



}

export default aboutme;