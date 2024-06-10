import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import DialoguesContainer from './components/Dialogue/DialoguesContainer';
import Settings from "./components/Settings/Settings";
import News from './components/News/News';
import Music from './components/Music/Music';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

function App(props) {
  // debugger;
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <div className='content'>
          <Routes>

            <Route path='profile' element={<Profile
              store={props.store}
            />} />

            <Route path='dialogues/*' element={<DialoguesContainer
              store={props.store}
            // dialoguesPage={props.store.getState().dialoguesPage}
            // pid={props.store.getState().personalID}
            // dispatch={props.store.dispatch.bind(props.store)}
            />} />

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
