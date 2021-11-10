import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'
import SingleBook from '../component/singleBook.jsx'
import books from '../db/scifi.json'

const filterBookList=(arr)=>{
let filteredBooks = arr.filter(element => element.title==="Pandemic (The Extinction Files, Book 1)")
SingleBook(filteredBooks);

}

/*
const onChangeFunction= ()=>{
(e)=>

} */




const BookList=()=>(
<Form onSubmit={filterBookList(books)}>
  <Form.Group className="mb-3" >
    <Form.Label>Search a book by name</Form.Label>
    <Form.Control type="text" placeholder="insert a name" />
      </Form.Group>
  
  <Button variant="secondary" type="submit">
    Search
  </Button>
</Form>

    
)

// add here function filterBookList


export default BookList