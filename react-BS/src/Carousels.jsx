import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item style={{height:'500px'}} >
        <img src='https://images.pexels.com/photos/29973761/pexels-photo-29973761.jpeg' height='600px' width='100%' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  style={{height:'500px'}}>
      <img src='https://images.pexels.com/photos/33570532/pexels-photo-33570532.jpeg' height='600px' width='100%' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  style={{height:'500px'}}>
      <img src='https://images.pexels.com/photos/29862073/pexels-photo-29862073.jpeg' height='600px' width='100%' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;