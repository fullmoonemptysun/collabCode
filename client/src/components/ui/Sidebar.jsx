import React, { useState } from 'react';
import { Users, Terminal, GitBranch, MessageSquare, Play, Settings, Bell, Search, ChevronDown, Circle,  Share2, Lock, Globe } from 'lucide-react';




const Sidebar = ({}) => {




    return (

<aside className="sidebar">
          <div className="sidebar-header">
            <h3>Explorer</h3>
            <button className="icon-btn-sm">
              <Settings size={14} />
            </button>
          </div>

          <div className="file-tree">
            <div className="file-item folder expanded">
              <ChevronDown size={14} />
              <span>📁 src</span>
            </div>
            <div className="file-item file active" style={{ paddingLeft: '28px' }}>
              <span>📄 App.jsx</span>
              <Circle size={6} fill="#00D9FF" />
            </div>
           
          </div>

          <div className="sidebar-footer">
            <div className="status-item">
              <Globe size={12} />
              <span>main</span>
            </div>
          </div>
        </aside>
    )

    
}


export default Sidebar
