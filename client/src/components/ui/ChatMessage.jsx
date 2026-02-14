
import Avatar from "./Avatar";

const ChatMsg = ({ users, text, authorID, time}) => {
    console.log(authorID)
    console.log(users[authorID-1].name)
    return (

        //ONLY WORKS BECAUSE THE AUTHORIDs are not 0. WILL BREAK IF 0. 

        //FIX THE STRUCTURE OF ACTIVE USERS TO FINALIZE THIS AND FIX THINGS

        
        <div className="chat-message">
            <Avatar name={users[authorID - 1].name} bg={users[authorID - 1].color} version="c" >
                
            </Avatar>
            <div className="message-content">
                <div className="message-header">
                    <span className="message-author">{users[authorID - 1].name}</span>
                    <span className="message-time">{time}</span>
                </div>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default ChatMsg;
