import * as React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel';

import { CarouselItem } from 'react-bootstrap';


import image1 from './image/the-founder.jpg';
import image2 from './image/lolo-mel.jpg';
function About(){

return (


  <div>
  <Carousel>
    <Carousel.Item>
      <div className='carouselpics'>
        <img src={image1} alt="Image 1" style={{ width: '500px', height: '600px' , margin:'50px'}} />
        <Carousel.Caption>
          <h3>Founder</h3>
          <p className='info' style={{ position: 'absolute', top: '100%', left: '60%', transform: 'translate(-20%, -200%)', fontStyle:'italic' ,fontSize: '13px' }} >
            Dr. Melchor T. Villanueva was born on January 6, 1907. {'\n'}Undaunted by his parent’s meager income and their family’s{'\n'} social status, the young Villanueva pursued his high school studies in Manila at the Philippine Normal School while working as a barber in downtown Manila and as a farmhand in a bangus culture farm in Malabon during weekends. After graduating from high school, he accepted a teaching job that financed his college studies at the University of the Philippines, until he finished his Masteral Degree at the same university in 1937<br/>

            In that same year, Dr. Villanueva was first engaged with the Bicolanos when he accepted a provincial teaching assignment at the Camarines Sur High School in Naga. He then taught in Ateneo de Naga and Colegio de Sta. Isabel. He pursued his doctoral studies as a Fullbright Scholar at the University of Iowa and Missouri State University in the United States of America where he earned the Degree of Doctor of Education.<br/>

            When World War II struck, Dr. Villanueva served valiantly as a lieutenant in the guerilla movement under Col. Agustin Marking’s Fil-American troops. For his courage and heroism, he was presented with the prestigious Presidential Gold Medal Award.<br/><br/>

            Outside teaching, Dr. Villanueva loved music, played the violin and became a conductor of the Philippine Normal College Orchestra. In the field of sports, he was a boxer and weightlifter, lifting well into his nineties. He passed away on June 13, 2000 at the age of 93, leaving behind a lasting legacy of education and service in Naga.
          </p>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className='carouselpics'>
        <img src={image2} alt="Image 2" style={{ width: '500px', height: '600px', margin:'50px'}} />
        <Carousel.Caption>
          <h3>The College</h3>
          <p className='info' style={{ position: 'absolute', top: '100%', left: '60%', transform: 'translate(-20%, -200%)',fontStyle:'italic',fontSize:'13px' }} >
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

export default About;