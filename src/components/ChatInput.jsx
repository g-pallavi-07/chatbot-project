import { useState} from 'react'
import { Chatbot} from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({chatMessages , setChatMessages}){
  const [isLoading ,setIsLoading] = useState(false);
  const [ inputText , setInputText]= useState('');
  
  function saveInputText(event){
    setInputText(event.target.value);
  }
  
  async function sendMessage(){
    if (isLoading || inputText === ''){
      return;
    }
    setIsLoading(true);
    const newChatMessages =[
      ...chatMessages  ,
      {
        message:inputText,
        sender:'user',
        id:crypto.randomUUID()
      }
    ];
    setChatMessages(newChatMessages);
    setInputText('');
    setChatMessages([
      ...newChatMessages  ,
      {
        message:'Loading...',
        sender:'robot',
        id:crypto.randomUUID()
      }
    ]);
    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages  ,
      {
        message:response,
        sender:'robot',
        id:crypto.randomUUID()
      }
    ]);
    setIsLoading(false);

  }
  function onKey(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
    else if (event.key === 'Escape'){
      setInputText('');
    }
  }

  return (
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to chatbot" 
        size="30"
        onChange = {saveInputText}
        onKeyDown = {onKey}
        value={inputText}
        className = "chat-input"
      />
      <button 
        onClick = {sendMessage}
        className ="send-button"
      >Send</button>
    </div>
  );
}