
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState(["hi there", "hello"]);
  const wsRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");
    ws.onmessage = (event) => {
      setMessages(m => [...m, event.data])
    }
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red"
        }
      }))
    }
    return () => {
      ws.close()
    }
  }, []);

  return (
  <div className=' flex justify-center '>
    <div className='h-screen roombody t-0 rounded-lg w-[350px]'>
      <div className='  h-[90vh]'>
        {messages.map(message => <div className=' pl-4 pt-8 '> 
          <span className='bg-white text-black rounded p-4 '>            
            {message} 
          </span>
        </div>)}
      </div>
      <div className=' bg-white flex rounded '>
        <input ref={inputRef} id="message" className=" rounded flex-1 p-4  "></input>
        <button onClick={() => {
          const message = inputRef.current?.value;
          wsRef.current.send(JSON.stringify({
            type: "chat",
            payload: {
              message: message
            }
          }))

        }} className=' pointer rounded bg-purple-600 text-white p-4'>
          Send 
        </button>
      </div>
    </div>
    </div>
  )
}

export default App