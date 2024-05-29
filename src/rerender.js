import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import states from './states'
import { addNewPostDB, addNewMessageDB, updateCurrentValuePost } from './states';





const root = ReactDOM.createRoot(document.getElementById('root'));


export const renderSite = (props) => {
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    rerender(props);
}



export const rerender = (props) => {
    // const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <App states={props} addNewPostDB={addNewPostDB} addNewMessageDB={addNewMessageDB} updateCurrentValuePost={updateCurrentValuePost} />
            {/* <App states={props} addNewPostDB={addNewPostDB} addNewMessageDB={addNewMessageDB} updateCurrentValuePost={updateCurrentValuePost} /> */}
        </React.StrictMode>
    );
}
