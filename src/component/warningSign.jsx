import Alert from 'react-bootstrap/Alert'

const WarningSign=(props)=>(
    <Alert variant="danger">
    {props.title}
    </Alert>  
)


export default WarningSign