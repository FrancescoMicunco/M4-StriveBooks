import { Component } from "react";

class CommentsList extends Component{
   
    state={
        id:null


    }


componentDidMount=()=>{
    
    this.takeComments()
}

componentDidUpdate=(prevProps, prevState)=>{

}

takeComments =async(id)=>{
    let url = "https://striveschool-api.herokuapp.com/api/comments/"

this.setState({id: this.props.book.asin})
console.log(this.state)
    let res = await fetch(url+id, {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzY2NDAwMDcsImV4cCI6MTYzNzg0OTYwN30.1r54LazkgLREzT1_TEIEE0FuSEKO-RcLTPlod70DVo4"
}}) 
    try{
        if(res.ok){
        let data = res.json()
console.log(data)
    }else{
alert("bad request")
    }

    }catch(error){console.log("Something wrong on your connection or server connection")}
}


render = () =>{
 

    return(
        <h1>Comments</h1>

    )
}

}

export default CommentsList