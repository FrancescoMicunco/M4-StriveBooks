import {Carousel} from 'react-bootstrap'
import books from '../db/scifi.json'

const Latestrelease =()=>(
   
 <Carousel>{
   
   books.filter(book=> book.price<8).map(e =>(
<Carousel.Item>
    <img 
      className="d-block w-100"
      src={book.img}
      alt="First slide"/>
    <Carousel.Caption>
      <h3>{book.title}</h3>
      <p>Category: {book.category}</p>
    </Carousel.Caption>
  </Carousel.Item>
   ))
      
   }
    
  
</Carousel>

    )
   


export default Latestrelease