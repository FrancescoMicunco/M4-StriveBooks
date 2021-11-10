import Badge from 'react-bootstrap/Badge'

const MyBadge=({text, color})=>(
   <h2> <Badge bg={color} text="light"> {text}</Badge></h2>
)

export default MyBadge