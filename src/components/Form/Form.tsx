import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const FormMessage =()=>{

    const url = 'http://146.185.154.90:8000/messages';
    const [messageAuthorValue, setMessageAuthorValue] = useState('')
    const [messageTextValue, setMessageTextValue] = useState('')

    const messageText = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setMessageTextValue(e.target.value);
    }
    const messageAuthor = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setMessageAuthorValue(e.target.value);
    }

    const addNewMessage = async()=> {
        const data = new URLSearchParams();
        data.set('message', messageTextValue);
        data.set('author', messageAuthorValue);
      
        const response = await fetch(url, {
            method: 'post',
            body: data,
        })
        setMessageAuthorValue('')
        setMessageTextValue('')
    }

    
    return(
        <>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="name" value={messageAuthorValue} placeholder="Author" onChange={messageAuthor}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder='Message' rows={3} value={messageTextValue} onChange={messageText}/>
                </Form.Group>
                <Button className='mb-5' variant="primary" onClick={addNewMessage}>
                    Submit
                </Button>
        </>
    )
}

export default FormMessage