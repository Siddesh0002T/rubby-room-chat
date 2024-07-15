import React from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Hello from './components/Hello';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ChatStartPage from './components/RRChat/ChatStartPage';
import RoomChatPage from './components/RRChat/RoomChatPage';
import ChatRoom from './components/RRChat/ChatRoom';

function App() {
  return (
    <div class="container">
          <Navbar/>
     <BrowserRouter>
      <Routes>
    
        <Route index element={<Home />} />
        <Route path="/HelloWorld" element={<Hello />}></Route>
       <Route path="/About" element={<About />}></Route>
       <Route path="/Services" element={<Services />}></Route>
       <Route path="/Contact" element={<Contact />}></Route>
       <Route path='/ChatStartPage' element={<ChatStartPage />}></Route>
       <Route path='/RoomChatPage' element={<RoomChatPage />}></Route>
       <Route path='/ChatRoom' element={<ChatRoom />}></Route>


        </Routes>
    </BrowserRouter>
    <Footer/>
  </div>    
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);