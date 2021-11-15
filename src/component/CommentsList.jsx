import { Component } from "react";

class CommentsList extends Component{
   
    state={
        id:null,
        comments:[]
    }


componentDidMount=()=>{
    
    this.takeComments()
}

componentDidUpdate=(prevProps, prevState)=>{

}

takeComments =async()=>{
    let url = "https://striveschool-api.herokuapp.com/api/comments/"

this.setState({id: this.props.id})

    let res = await fetch(url+this.state.id, {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzY2NDAwMDcsImV4cCI6MTYzNzg0OTYwN30.1r54LazkgLREzT1_TEIEE0FuSEKO-RcLTPlod70DVo4"
}}) 
    try{
        if(res.ok){
        let data = await res.json()
this.state.comments=data
    }else{
alert("bad request")
    }

    }catch(error){console.log("Something wrong on your connection or server connection")}
}

render = () =>{
 
    return(
        this.comments.map(comment =>
            <li>{this.state.comments}</li>
        )

    )
}

}

export default CommentsList