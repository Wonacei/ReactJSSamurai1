import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogue/Dialogues';
import Settings from "./components/Settings/Settings";
import News from './components/News/News';
import Music from './components/Music/Music';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <div className='content'>
          <Routes>
            <Route path='profile' element={<Profile posts={props.posts} />} />
            <Route path='dialogues/*' element={<Dialogues dialogues={props.dialogues} messages={props.messages} />} />
            <Route path='settings' element={<Settings />} />
            <Route path='news' element={<News />} />
            <Route path='music' element={<Music />} />
          </Routes>

        </div>

      </div>
    </BrowserRouter>


  );
}



export default App;
