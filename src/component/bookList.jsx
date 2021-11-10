import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'
import SingleBook from '../component/singleBook.jsx'
import books from '../db/scifi.json'

const filterBookList=(arr)=>{
arr.filter(element => element.title.include().map(e=>
    <container>
        <row>
            <div className="card">
                <img src={e.img} alt="" />
                <h5>{e.title}</h5>
            </div>
        </row>
    </container>
    
    ))


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