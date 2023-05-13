import Image from "next/image";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'


function Slide() {
  
  return (
    <div>
      <Carousel className="w-4/4 m-auto ">
        <div>
          <Image width={300} height={200} src="/images/carosual_1.jpeg" alt='alt' />
        </div>
        <div>
          <Image width={300} height={200} src="/images/carosual_2.jpeg" alt='alt' />
        </div>
        <div>
          <Image width={300} height={200} src="/images/carosual_3.jpeg" alt='alt' />
        </div>
        
      </Carousel>
    </div>
  )
}

export default Slide;
