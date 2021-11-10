import Badge from 'react-bootstrap/Badge'

const MyBadge=({text, color})=>(
    <Badge bg={color}>{text}</Badge>
)

export default MyBadge