import { Component } from "react";
import { Button } from 'react-bootstrap'



export default class AddComment extends Component{

    render=()=>{
        return(
            <Button variant="secondary" size="sm" className="mb-2 ml-2" 
                onclick={e=> this.console.log(e)}>
                Add comment
            </Button>
        
        
            )
}//end of render







} //end of default