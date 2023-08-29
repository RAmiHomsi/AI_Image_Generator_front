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

      const botResponse = response.data;
      const updatedMessagesWithBot = [...updatedMessages, { role: 'bot', content: botResponse }];
      console.log(botResponse)

      setMessages(updatedMessagesWithBot);
      setIsTyping(false);

    } catch (error) {
      console.error('Error sending request:', error);
      setIsTyping(false);
    }
  };

return (
  <div className='w-screen max-h-screen '>
    <div className='Chat w-12/12 h-[93vh] max-h-[93vh] m-auto flex flex-col justify-start overflow-scroll overflow-x-hidden bg-gray-500/50 pt-20' >
      {messages.map((chat, index) => (
        <div key={index} className={chat.role === "user" ?' bg-blue-300 p-2 pb-2 text-left text-blue-800 text-2xl' : 'pl-2 text-left p-2 text-white text-2xl bg-green-300 text-green-800 '}>
          {chat.role + " : " + chat.content}
          {/* <div className='w-12/12 h-[1px] bg-white'></div> */}
        </div>
      ))}
    </div>

    <div className={isTyping ? '' : 'hide'}>
        <p>
          <i>{isTyping ? 'Typing...' : ''}</i>
        </p>
      </div>

    <div className="w-12/12 flex flex-row justify-center m-auto">
      <input
        className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        type="text"
        placeholder="Type here"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        type="submit"
        className="focus:outline-none text-white ml-2 mt-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
  </div>
);
      }
export default Chatbot;

 {/* <div>
      <section>
        {messages.map((chat, index) => (
          <p key={index}  className={chat.role === 'user' ? 'w-8/12 flex flex-row justify-between m-auto' : 'w-8/12 flex flex-row justify-between m-auto'}>
            <span className='spann'>
              <b>{chat.role + " :"}</b>
            </span>
            <span className='spann'>{chat.content}</span>
          </p>
        ))}
      </section>

      <div className={isTyping ? '' : 'hide'}>
        <p>
          <i>{isTyping ? 'Typing...' : ''}</i>
        </p>
      </div>

      <div className=" w-8/12 flex flex-row justify-between m-auto">
        <input className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder="Type here" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
        <button type="submit" className="focus:outline-none text-white ml-2 mt-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleSubmit}>Send</button>
      </div>
    </div> */}