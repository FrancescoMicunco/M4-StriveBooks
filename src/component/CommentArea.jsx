import {Component} from 'react'
import {Button, Form} from 'react-bootstrap'
// import AddComment from './AddComment'
// import CommentsList from './CommentsList'



export default class CommentArea extends Component{

state={

}

render=()=>{
    return (
<Col sx={12} md={3}>
            <h1>Comments</h1>
            <ul>
              <CommentsList asin={books.asin} />
            </ul>
          </Col>

    
    </div>
    )
}

}