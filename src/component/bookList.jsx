import { Container, Row, Card, Col } from 'react-bootstrap'
//import Form from 'react-bootstrap/Form'
import SingleBook from '../component/singleBook.jsx'



const BookList = ( {books} )=>(
<Container>
<Row>
    {books.map((e)=>
    <SingleBook book={e}/>
       
    )}
</Row>

</Container>

)
/* const filterBookList=(arr, query)=>{
let queryBookResult=arr.filter(bookQuery => bookQuery.title.include(query))
console.log(queryBookResult)
/* .map(book=>
    <SingleBook element={book}/>
       )
} 

const BookList=()=>(
<Form >
  <Form.Group className="mb-3" >
    <Form.Label>Search a book by name</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="insert a name" 
    // value="this.state.value"
    onChange={(e)=>{
                filterBookList(books, e.target.value)
    }
    }
           />
      </Form.Group>
</Form>

    
)
 */

export default BookList