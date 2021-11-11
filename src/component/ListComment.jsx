import React, {Component} from 'React'

class ListComment extends Component{

render(){
    return (
        <div>
            <li>
                {this.props.comment}
            </li>
        </div>

    )
}

}


export default ListComment