import React, { useState } from 'react';
import { Users, Terminal, GitBranch, MessageSquare, Play, Settings, Bell, Search, ChevronDown,  Share2, Lock, Globe } from 'lucide-react';
import Sidebar from './Sidebar'
import Editor from './CodeSyncEditor'
import RightPanel from './RightPanel';
import Navigation from './Navigation';

export default function CodeMain() {

  const availableColors =  ['#d3d3d3', '#41f447', '#00ffff', '#ff3f5f']

  
  const activeUsers = [
    { id: 1, name: 'Sarah Chen', color: availableColors[0], line: 12 },
    { id: 2, name: 'Marcus Kim', color: availableColors[1],  line: 24 },
    { id: 3, name: 'Alex Rivera',color: availableColors[2],  line: 8 },
    { id: 4, name: 'Claude Code',color: availableColors[3], line: 11},
  ];
  
  const messages = [
    { id: 1, authorID: 1, text: 'Updated the data fetching logic. Can you review?', time: '2m ago' },
    { id: 2, authorID: 2, text: 'Looks good! Just added error handling to the Chart component.', time: '1m ago' }
  ];

  const codeLines = [
    { num: 1, content: 'import React, { useState, useEffect } from "react";' },
    { num: 2, content: '' },
    { num: 3, content: 'export default function DataVisualization() {' },
    { num: 4, content: '  const [data, setData] = useState([]);' },
    { num: 5, content: '  const [loading, setLoading] = useState(true);' },
    { num: 6, content: '' },
    { num: 7, content: '  useEffect(() => {' },
    { num: 8, content: '    fetchData().then(response => {' },
    { num: 9, content: '      setData(response.data);' },
    { num: 10, content: '      setLoading(false);' },
    { num: 11, content: '    });' },
    { num: 12, content: '  }, []);' },
    { num: 13, content: '' },
    { num: 14, content: '  return (' },
    { num: 15, content: '    <div className="container">' },
    { num: 16, content: '      {loading ? (' },
    { num: 17, content: '        <Spinner />' },
    { num: 18, content: '      ) : (' },
    { num: 19, content: '        <Chart data={data} />' },
    { num: 20, content: '      )}' },
    { num: 21, content: '    </div>' },
    { num: 22, content: '  );' },
    { num: 23, content: '}' },
    { num: 24, content: '' }
  ];




  return (
    <div className="platform-container">
      {/* Background Elements */}
      <div className="grid-background"></div>
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>



      <Navigation availableColors={availableColors} activeUsers={activeUsers}></Navigation>

    
      {/* Main Content Area */}
      <div className="main-content">
        {/* Sidebar */}
        <Sidebar></Sidebar>
        

        {/* Editor Area */}
        <Editor codeLines={codeLines}></Editor>

        <RightPanel availableColors={availableColors} activeUsers={activeUsers} messages={messages}></RightPanel>
      

       
      </div>

      
        
      
    </div>
  );
}


