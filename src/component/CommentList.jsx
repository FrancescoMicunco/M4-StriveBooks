import React, {Component} from 'React'
import ListComment from './ListComment.jsx'
class CommentList extends Component{

render(){
    return (
       
            <ul>
               {this.props.map(comment =><ListComment comment={comment}/>)}
  </ul>
               ) 
          
        

    
}

}


export default CommentList