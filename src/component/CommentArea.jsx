import {Component} from 'react'
import {Button} from 'react-bootstrap'

export default class CommentArea extends Component{

state={

}

render=()=>{
    return (
    <>
    <h5 className="mr-3" style={{backgroundColor:'yellow'}}>  CommentArea</h5>
    <Button variant="secondary" size="sm">Add comment</Button>
    <Button variant="primary" size="sm">Comment list </Button>
    </>
    )
}

}