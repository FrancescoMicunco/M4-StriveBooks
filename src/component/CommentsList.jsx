import { Component } from "react";

class CommentsList extends Component{
   
    state={
        asin:null,
        comments:[]
    }



componentDidUpdate=(prevProps)=>{
if(this.props.prevProps.asin!== this.state.asin){
    this.takeComments()
}

}

takeComments =async()=>{
    let url = "https://striveschool-api.herokuapp.com/api/comments/"
let headers = {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzY2NDAwMDcsImV4cCI6MTYzNzg0OTYwN30.1r54LazkgLREzT1_TEIEE0FuSEKO-RcLTPlod70DVo4"
}



this.setState({id: this.props.asin})

    let res = await fetch(url+1626392242, {
headers }) 
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
        this.state.comments.map(comment =>
            <li>{this.comment}</li>
        )

    )
}

}

export default CommentsList