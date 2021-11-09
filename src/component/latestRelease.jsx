import {Carousel} from 'react-bootstrap'
import books from '../db/scifi.json'

const Latestrelease =()=>(
   
 <Carousel style={{heigth:"180px"}}>{
   
   books.map(book =>
<Carousel.Item >
    <img 
      className="d-block w-100"
      
      src={book.img}
      alt="First slide"/>
    <Carousel.Caption>
      <h3>{book.title}</h3>
      <p>Category: {book.category}</p>
    </Carousel.Caption>
  </Carousel.Item>
   )
      
   }
    
  
</Carousel>

    )
   


export default Latestrelease