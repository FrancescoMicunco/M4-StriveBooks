import {Carousel} from 'react-bootstrap'
import item from '../db/scifi.json'

const Latestrelease =()=>(
   
 <Carousel>{
   
   item.filter(e=> e.price<8).map(e =>(
<Carousel.Item>
    <img 
      className="d-block w-100"
      src={e.img}
      alt="First slide"/>
    <Carousel.Caption>
      <h3>{e.title}</h3>
      <p>Category: {e.category}</p>
    </Carousel.Caption>
  </Carousel.Item>
   ))
      
   }
    
  
</Carousel>

    )
   


export default Latestrelease