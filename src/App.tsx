import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Accordion from 'react-bootstrap/Accordion';
import AddMessages from './components/messages/messages.tsx'
import FormMessage from './components/Form/Form.tsx'


const App=()=> {

  const url = 'http://146.185.154.90:8000/messages';
  
  const [messagesList, setMessagesList] = useState([])
  
  const getResponse = async()=> {
    const response = await fetch(url);
    const messages = await response.json();
    setMessagesList(messages);
  }
  getResponse()

  return (
    <>
      <div className="">
        <FormMessage></FormMessage>
        <Accordion defaultActiveKey='4'>
          {messagesList.map((message:Message, index)=>{
            return(
              <AddMessages key={message.id} id={String(index+1)} author={message.author} message={message.message} datetime={message.datetime}></AddMessages>
            )
            })
          }
        </Accordion>
      </div>
    </>
  )
}

export default App
