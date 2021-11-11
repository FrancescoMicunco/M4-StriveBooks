import {Card, Col} from 'react-bootstrap'
import { Component } from 'react'
import CommentArea from './CommentArea'



class SingleBook extends Component{

    state={
        selected : false,
        border:"",
        isActive: false,
        id:'',
        comments:[]
    }


    // COMPONENT DI MOUNT
  componentDidMount =  ()=>{
      this.fetchFunction()
}

fetchFunction=async ()=>{
const res = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+this.props.book.asin, {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzY2NDAwMDcsImV4cCI6MTYzNzg0OTYwN30.1r54LazkgLREzT1_TEIEE0FuSEKO-RcLTPlod70DVo4"
}
}
)
try{
    if(res.ok){

const books = await res.json()
this.setState({comments:books})
    }else{console.log("something wrong!")}
}catch(error){console.log("Some about connection create an error")}

}

// RENDER AREA 

    render=()=>{
        return(
<>
     <Col sx={3} >
            <Card onClick={()=>this.setState({selected:!this.state.selected})} 
            style={{ border : this.state.selected? '3px solid gray' :'none' }}>
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                <Card.Title>{this.props.book.title}</Card.Title>
                 </Card.Body>
            </Card>


{
    this.state.selected && <CommentArea />
    }
    
</Col>

</>
              
        )}

}
export default SingleBook