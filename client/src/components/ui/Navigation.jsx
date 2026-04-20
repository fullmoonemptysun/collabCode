import {useState} from 'react'
import { Users, Terminal, GitBranch, MessageSquare, Play, Settings, Bell, Search, ChevronDown,  Share2, Lock, Globe } from 'lucide-react';
import Avatar from './Avatar'
const Navigation = ({activeUsers, availableColors, handleRun}) => {
   

    
    const claudeColor = '#DE7356';

    


    return (

     
          
      <nav className="top-nav">
        
        <div className="nav-left">
          <div className="logo">
            <div className="logo-icon">
              <Terminal size={20} />
            </div>
            <span className="logo-text">CodeSync</span>
          </div>

          
          
          {/* will be added when git integration is complete */}
          {/* <div className="project-selector">
            <GitBranch size={14} />
            <span>ai-dashboard-v2</span>
            <ChevronDown size={14} />
          </div> */}
        </div>

        
        <div className="nav-center">
          <div className="search-bar">
            <Search size={16} />
            <input type="text" placeholder="Search files, symbols, commands..." />
            <kbd>ctrl + /</kbd>
          </div>
        </div>

        <div className="nav-right">
          <button className="icon-btn">
            <Bell size={18} />
          </button>
          
          <button onClick={handleRun} className="run-btn">
            <Play size={14} />
            <span>Run</span>
          </button>

          <button className="share-btn">
            <Share2 size={14} />
            <span>Share</span>
          </button>

          <div className="avatar-group">
            {activeUsers.map((usr, idx) => <Avatar version='l' key={usr.id} name={usr.name} marginLeft={idx > 0 ? '-8px' : '0'} bg = {availableColors[idx]} zIndex={activeUsers.length - idx}></Avatar>)}
            
            <button className="avatar-add">+</button>
          </div>
        </div>
      </nav>

    )
}


export default Navigation
