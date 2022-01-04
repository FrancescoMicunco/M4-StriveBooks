import {Container, Row, Form} from 'react-bootstrap'
import { useState } from 'react';


const SearchForm = ({title})=>{

const [Item, setItem] = useState('');
return (

  <Container>
    <Row>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Search by Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={Item}
            onChange={(e) => {
            setItem(e.target.value);
              
            }}
          />
        </Form.Group>
      </Form>
    </Row>
  </Container>
);
}

export default SearchForm;
