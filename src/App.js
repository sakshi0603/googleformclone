// import Header from'./component/Header.js'
import './App.css';
// import Templet from './component/Template.js';
// import MainBody from './component/MainBody.js';
// import FormHeader from'./component/FormHeader.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './component/Main.js';
// import Tablet from'./component/Tablet.js';
import  Form from './component/Form.js';
function App() {
  return (
    <>
<BrowserRouter>
    <Routes>
      <Route path="/Form/:id" element={<Form/>}/>  
      <Route path='/' element={<Main/>} />   
    </Routes>
    </BrowserRouter>
  
   </>
  );
}

export default App;
