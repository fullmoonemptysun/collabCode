import React, { useState } from 'react';
import { Users, Terminal, GitBranch, MessageSquare, Play, Settings, Bell, Search, ChevronDown,  Share2, Lock, Globe } from 'lucide-react';



const Editor = ({codeLines}) => {
    

    return (
          <main className="editor-area">
                  <div className="editor-tabs">
                    <div className="tab active">
                      <span>App.jsx</span>
                      <button className="tab-close">×</button>
                    </div>
                    <div className="tab">
                      <span>Chart.jsx</span>
                      <button className="tab-close">×</button>
                    </div>
                    <div className="tab">
                      <span>index.css</span>
                      <button className="tab-close">×</button>
                    </div>
                  </div>
        
                  <div className="editor-main">
                    <div className="editor-header">
                      <div className="file-path">
                        {/* <Lock size={12} /> */}
                        <span>src/App.jsx</span>
                      </div>
                      <div className="editor-info">
                        <span>UTF-8</span>
                        <span>•</span>
                        <span>React</span>
                        <span>•</span>
                        <span>Ln 12, Col 24</span>
                      </div>
                    </div>
        
                    <div className="code-editor">
                      <div className="line-numbers">
                        {codeLines.map(line => (
                          <div key={line.num} className="line-number">
                            {line.num}
                          </div>
                        ))}
                      </div>
        
                      <div className="code-content">
                        {codeLines.map(line => (
                          <div key={line.num} className="code-line">
                            <pre>
                              <code>{line.content || ' '}</code>
                            </pre>
                          </div>
                        ))}
                      </div>
                    </div>
        
                    {/* Mini Map */}
                    {/* <div className="minimap">
                      {codeLines.map(line => (
                        <div 
                          key={line.num} 
                          className={`minimap-line ${line.content ? 'has-content' : ''}`}
                        ></div>
                      ))}
                    </div> */}
                  </div>
                </main>
    )
}


export default Editor
