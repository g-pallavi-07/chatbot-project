import RobotImage from '../assets/robot.png'
import UserImage from '../assets/user.png'
import './ChatMessage.css';
export function ChatMessage({message , sender}){
    // const {message , sender} = props;
    // const sender = props.sender;
    // if (sender === "robot"){
    //   return(
    //     <div>
    //     <img src ="robot.png" width="50"/>
    //     {message}
    //     </div>
    //   );
    // }
    return(
      <div className={
        sender==='user'
          ? 'chat-message-user' 
          : 'chat-message-robot'
      }>
        {sender ==='robot' && (
          <img src = {RobotImage} 
          className="chat-message-profile"/> 
        )}
        <div className="chat-message-text">
          {message}
        </div>
        {sender === 'user' && (
          <img src ={UserImage}
          className="chat-message-profile"/>
        )}
      </div>
    );
  }
  