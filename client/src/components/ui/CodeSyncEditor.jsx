import React, { useState, useRef, useEffect } from "react";

import * as monaco from "monaco-editor";

const Editor = ({consoleOn}) => {
    const code_editor = useRef(null);

    var codeEditor = null;

    const [outConsole, setConsole] = useState(true)
    const [position, setPosition] = useState({lang: "", lineNum: 0, col: 0})

    const [codeLines, setCodeLines] = useState(
        [
        "function Hello() {",
        "   console.log('Hello world');",
        "   }",
        "function Person(age) {",
        "	if (age) {",
        "		this.age = age;",
        "	}",
        "}",
        "Person.prototype.getAge = function () {",
        "	return this.age;",
        "};",
    ].join("\n")
    )




    useEffect(() => {
        if (code_editor.current) {
            monaco.editor.defineTheme("pure-black", {
                base: "vs-dark",
                inherit: true,
                rules: [],
                colors: {
                    "editor.background": "#000000",
                },
            }); 
            codeEditor = monaco.editor.create(code_editor.current, {
                value: codeLines,
                language: "javascript",
                automaticLayout: true,
                theme: "pure-black",
                lineNumbers: "on",
                fontFamily: "Jetbrains Mono",
                padding: {
                    top: 8,
                },
            });

            

            //Update the position display for the first time
            setPosition({lang: codeEditor.getModel().getLanguageId(), lineNum: codeEditor.getPosition().lineNumber, col: codeEditor.getPosition().column})
            //Update it after code changes
            codeEditor.onMouseUp(()=>{
                setPosition({ lang: codeEditor.getModel().getLanguageId(), lineNum: codeEditor.getPosition().lineNumber, col: codeEditor.getPosition().column})
            })

            var intervalID = setInterval(()=>{
                console.log(codeEditor.getValue());
               
                setCodeLines(codeEditor.getValue());
                
            }, 10000)

            return () => {
                if (codeEditor) {

                    codeEditor.dispose();
                    clearInterval(intervalID);

                }
            };
        }
    }, []);

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
                        <span>src/App.jsx</span>
                    </div>
                    <div className="editor-info">
                        <span>UTF-8</span>
                        <span>•</span>
                        <span>{position.lang.length >= 2?`${position.lang[0].toUpperCase()}${position.lang.substring(1, position.lang.length)}`:position.lang }</span>
                        <span>•</span>
                        <span>Ln {position.lineNum}, Col {position.col}</span>
                    </div>
                </div>


                <div className="editor-console-cont">
                    <div
                        ref={code_editor}
                        className="code-editor"
                        style={{ height: "100%" }}
                    ></div>
                    {outConsole &&
                    
                        <div className={outConsole?"console":"console hidden"}>
                            <div>
                                <button className="tab-close">×</button>
                            </div>
                            
                        </div>
                    }
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
    );
};

export default Editor;
