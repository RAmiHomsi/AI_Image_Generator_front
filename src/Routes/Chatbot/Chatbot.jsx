import { useState } from 'react'
import './Chatbot.css'
import axios from 'axios';


function Chatbot() {
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async () => {
    if (!userInput) return;

    const updatedMessages = [...messages, { role: 'user', content: userInput }];

    setMessages(updatedMessages);
    setUserInput('');

    setIsTyping(true);

    try {
      const response = await axios.post('http://localhost:3999/api/chat', {
        content: userInput,
        systemContent: 'You are a helpful programming assistant',
      });

      console.log(response)

      const botResponse = response.data.data;
      const updatedMessagesWithBot = [...updatedMessages, { role: 'bot', content: botResponse }];

      setMessages(updatedMessagesWithBot);
      setIsTyping(false);

    } catch (error) {
      console.error('Error sending request:', error);
      setIsTyping(false);
    }
  };

  return (
    <main>
      <section>
        {messages.map((chat, index) => (
          <p key={index} className={chat.role === 'user' ? 'user_msg' : ''}>
            <span>
              <b>{chat.role}</b>
            </span>
            <span>:</span>
            <span>{chat.content}</span>
          </p>
        ))}
      </section>

      <div className={isTyping ? '' : 'hide'}>
        <p>
          <i>{isTyping ? 'Typing...' : ''}</i>
        </p>
      </div>

      <div className="container">
        <input type="text" placeholder="Type here" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
        <button type="submit" className="send-btn" onClick={handleSubmit}>Send</button>
      </div>
    </main>
  );
}

export default Chatbot;