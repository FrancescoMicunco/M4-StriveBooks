import Form from 'react-bootstrap/Form'
import SingleBook from '../component/singleBook.jsx'
import books from '../db/scifi.json'

const filterBookList=(arr, query)=>{
let queryBookResult=arr.filter(bookQuery => bookQuery.title.include(query))
console.log(queryBookResult)
/* .map(book=>
    <SingleBook element={book}/>
       )*/
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


export default BookList