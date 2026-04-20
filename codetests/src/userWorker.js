import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';


self.MonacoEnvironment = {
    getWorker(_, label){
        if(label === "javascript" || label === "typescript"){
            return new tsWorker();
        }

        return new editorWorker();
    }
}
