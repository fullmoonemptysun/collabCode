import { useState } from 'react'
import './index.css'

import CodeMain from './components/ui/CodeSync'


const App = () => {
    return(
        <CodeMain></CodeMain>
    )
}



// const App = () => {
//     return(
//     <div className='dark bg-background flex h-screen w-screen flex-col gap-2 p-2'>
//      <Header pageTitle="CodeSync"></Header>
//      <Toolbar></Toolbar>
//      <div className=' justify-evenly flex gap-1 h-3/4'>
//         <Editor ></Editor>
//         <Output></Output>
//      </div>
//    </div>
//     )
// }




export default App
