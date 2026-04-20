import React, { useState, useRef } from "react";
import {
    Users,
    Terminal,
    GitBranch,
    MessageSquare,
    Play,
    Settings,
    Bell,
    Search,
    ChevronDown,
    Share2,
    Lock,
    Globe,
} from "lucide-react";
import Sidebar from "./Sidebar";
import Editor from "./CodeSyncEditor";
import RightPanel from "./RightPanel";
import Navigation from "./Navigation";
import executionService from "../../services/executionService";

export default function CodeMain() {
    const availableColors = ["#d3d3d3", "#41f447", "#00ffff", "#ff3f5f"];

    const activeUsers = [
        { id: 1, name: "Sarah Chen", color: availableColors[0], line: 12 },
        { id: 2, name: "Marcus Kim", color: availableColors[1], line: 24 },
        { id: 3, name: "Alex Rivera", color: availableColors[2], line: 8 },
        { id: 4, name: "Claude Code", color: availableColors[3], line: 11 },
    ];

    const [codeLines, setCodeLines] = useState(
        [
            "function Hello() {",
            "   console.log('Hello world');",
            "   }",
            "Hello()",
        ].join("\n"),
    );

    
    const editorRef = useRef(null)
    

    const [consoleData, setConsoleData]  = useState([]);

    const messages = [
        {
            id: 1,
            authorID: 1,
            text: "Updated the data fetching logic. Can you review?",
            time: "2m ago",
        },
        {
            id: 2,
            authorID: 2,
            text: "Looks good! Just added error handling to the Chart component.",
            time: "1m ago",
        },
    ];

    const handleRun = () => {

        //bring out the console
        
        editorRef.current.setConsole(true)


        //update code state
        console.log(editorRef.current.getValue())
        setCodeLines(editorRef.current.getValue())

        
        //send code for execution
        executionService
            .executeCode(editorRef.current.getValue())
            .then((response) => {
                console.log(response.data);
                setConsoleData(response.data);
            })
            .catch((error) => {
                console.log(error); //handle error (display a modal with the error)
            });
    };

    return (
        <div className="platform-container">
            {/* Background Elements */}
            <div className="grid-background"></div>
            <div className="glow-orb glow-orb-1"></div>
            <div className="glow-orb glow-orb-2"></div>

            <Navigation
                handleRun={handleRun}
                availableColors={availableColors}
                activeUsers={activeUsers}
            ></Navigation>

            {/* Main Content Area */}
            <div className="main-content">
                {/* Sidebar */}
                <Sidebar></Sidebar>

                {/* Editor Area */}
                <Editor editorRef = {editorRef} consoleData={consoleData} setCodeLines={setCodeLines} codeLines={codeLines}></Editor>

                <RightPanel
                    availableColors={availableColors}
                    activeUsers={activeUsers}
                    messages={messages}
                ></RightPanel>
            </div>
        </div>
    );
}
