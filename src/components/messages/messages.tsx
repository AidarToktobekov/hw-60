import Accordion from 'react-bootstrap/Accordion';
import '../../types'


const AddMessages:React.FC<Message> =({message, author, id, datetime})=>{
    return(
        <>          
                <Accordion.Item eventKey={id}>
                    <Accordion.Header>{id} Author: {author} date: {datetime}</Accordion.Header>
                    <Accordion.Body>
                        {message}
                    </Accordion.Body>
                </Accordion.Item>
        </>
    )
}

export default AddMessages