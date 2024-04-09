import '../Hero1/hero1.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from '../Button/Button';


const Hero1 = () =>{
    return (
      <Carousel interval={5000}>
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src='https://firebasestorage.googleapis.com/v0/b/cebate-un-mate.appspot.com/o/Frame.jpg?alt=media&token=e5a67121-433e-4016-a3fb-fc47a873335f'
            alt="First-slide"
          />
          <Carousel.Caption className='HeroCaption hero12'>
            <Button label='Comprar' to='/productos' />
          </Carousel.Caption>
        </Carousel.Item> 

        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1 imgHero3"
            src='https://firebasestorage.googleapis.com/v0/b/termomelga.appspot.com/o/heros%2Fhero2Mobile.jpg?alt=media&token=4cb2bbe6-1b10-4e1b-a40e-31911921aa98'
            alt="Third-slide"
          />
          <Carousel.Caption className='HeroCaption hero12'>
            <Button label='Ver Yerbas' to='/categoria/yerbas'  />
          </Carousel.Caption>
        </Carousel.Item> 
      </Carousel>
    );
}
export default Hero1