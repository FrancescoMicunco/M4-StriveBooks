import Alert from './react-bootstrap/Alert'

const warningSign=(props)=>(
    <Alert variant="danger">
    {props.title}
    </Alert>  
)


export default warningSign