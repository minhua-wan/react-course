import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import './App.css'



function App() {

  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      key: "key1"
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      key: "key2"
    },
    {
      message: "Can you get me todays date?",
      sender: "user",
      key: "key3"
    },
    {
      message: "Today is September 27",
      sender: "robot",
      key: "key4"
    }
  ]);


  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>
  )
}


export default App
