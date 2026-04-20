import { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";

const App = () => {
    const code_editor = useRef(null);
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
            const cEditor = monaco.editor.create(code_editor.current, {
                value: jsCode,
                language: "javascript",
                automaticLayout: true,
                theme: "vs-dark",
            });

            return () => {
                if (cEditor) {
                    cEditor.dispose();
                }
            };
        }
    }, []);

    return (
        <div className="container-1">
            <h1>Hello code!</h1>
            <div className="container-2">
                <div className="container-3">
                    <div className="container-4">
                        <div
                            ref={code_editor}
                            style={{ height: "500px" }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
