import { useState } from 'react'
import './Chatbot.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import bg from '.././../Components/Background/bg.jpg';


function Chatbot() {
    const [messages, setMessages] = useState([
      {
        message: "Aye silly user, I'm ChatGPT duh! What the fuck do you want!",
        sentTime: "just now",
        sender: "ChatGPT"
      }
    ]);
    const [isTyping, setIsTyping] = useState(false);
  
    const handleSend = async (message) => { //msg from the input
      const newMessage = {
        message,
        direction: 'outgoing',
        sender: "user"
      }; 
  
      const newMessages = [...messages, newMessage]; //spread operator to store old msgs and new
      
      //update msg state
      setMessages(newMessages);
  
      //to indicate that bot is typing
      setIsTyping(true);

    };
  
    
  
    return (
        <div className='container' >
          <img src={bg} id='imgg'/>
          <div className='chat-box'>
          <MainContainer>
            <ChatContainer>       
              <MessageList 
                scrollBehavior="smooth" 
                typingIndicator={isTyping ? <TypingIndicator content="Chatbot is typing" /> : null}
              >
                {messages.map((message, index) => {
                  return <Message key={index} model={message} />
                })}
              </MessageList>
              <MessageInput placeholder="Type message here" onSend={handleSend} />        
            </ChatContainer>
          </MainContainer>
          </div>
      
      </div>
    )
  }
  
  export default Chatbot