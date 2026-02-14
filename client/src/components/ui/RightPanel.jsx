import React from 'react'
import {useState} from 'react'
import { Users, Terminal, GitBranch, MessageSquare, Play, Settings, Bell, Search, ChevronDown,  Share2, Lock, Globe } from 'lucide-react';

import Avatar from './Avatar'
import UserStatusCard from './UserStatusCard';
import ChatMsg from './ChatMessage';

const RightPanel = ({ availableColors, activeUsers, messages}) => {
    const [activeTab, setActiveTab] = useState('users');

    return (
         
        <aside className="right-panel">

        {/*panel tabs*/}
          <div className="panel-tabs">
            <button 
              className={activeTab === 'chat' ? 'active' : ''} 
              onClick={() => setActiveTab('chat')}
            >
              <MessageSquare size={16} />
              Chat
            </button>
            <button 
              className={activeTab === 'users' ? 'active' : ''} 
              onClick={() => setActiveTab('users')}
            >
              <Users size={16} />
              Users
            </button>
          </div>

          {/*content*/}
          <div className="panel-content">
            {activeTab === 'users' && (
              <div className="users-list">
                <h4>Active Users ({activeUsers.length})</h4>
                {activeUsers.map(user => (
                  <UserStatusCard key={user.id} line={user.line} name={user.name} bg={availableColors[user.id - 1]}></UserStatusCard>
                ))}
              </div>
            )}

            {activeTab === 'chat' && (
              <div className="chat-area">
                <div className="chat-messages">
                  {messages.map((message, midx)=> <ChatMsg  key={message.id} authorID={message.authorID} users={activeUsers} time={message.time} text={message.text}></ChatMsg>)}
                </div>

                <div className="chat-input">
                  <input type="text" placeholder="Send a message..." />
                  <button>Send</button>
                </div>
              </div>
            )}
          </div>
        </aside>


        
    )



}


export default RightPanel
