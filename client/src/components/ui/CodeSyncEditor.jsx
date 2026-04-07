import React, { useState, useRef, useEffect } from "react";

import * as monaco from "monaco-editor";

const Editor = () => {
    const code_editor = useRef(null);

    const [codeLines, setCodeLines] = useState([]);

    var jsCode = [
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
    ].join("\n");


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
            var codeEditor = monaco.editor.create(code_editor.current, {
                value: jsCode,
                language: "javascript",
                automaticLayout: true,
                theme: "pure-black",
                lineNumbers: "on",
                fontFamily: "Jetbrains Mono",
                padding: {
                    top: 8,
                },
            });

            console.log(codeEditor.getScrollTop());

            return () => {
                if (codeEditor) {
                    codeEditor.dispose();
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
                        <span>React</span>
                        <span>•</span>
                        <span>Ln 12, Col 24</span>
                    </div>
                </div>

                <div
                    ref={code_editor}
                    className="code-editor"
                    style={{ height: "100%" }}
                ></div>

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
