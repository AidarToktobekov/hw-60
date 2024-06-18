import Accordion from 'react-bootstrap/Accordion';
import '../../types'


const AddMessages:React.FC<Message> =({message, author, id, datetime})=>{
    const date = new Date(datetime)    
    
    return(
        <>          
            <Accordion.Item eventKey={id}>
                <Accordion.Header>{id}. Author: {author} <span className='ms-3'> date: {date.getHours() + ' : ' + date.getMinutes() + ' - ' + date.getFullYear()}</span></Accordion.Header>
                <Accordion.Body className='text-start fw-bold'> 
                    {message}
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}

export default AddMessages