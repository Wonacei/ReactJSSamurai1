import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './states'
// import { addNewPostDB, addNewMessageDB, updateCurrentValuePost, subscruber } from './states';

// import { renderSite } from './rerender';

// import { addNewPostDB, addNewMessageDB } from './states';

// const renderSite = () => {
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
//       <App states={states} addNewPostDB={addNewPostDB} addNewMessageDB={addNewMessageDB} />
//     </React.StrictMode>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

// const renderSite = (props) => {
//     // const root = ReactDOM.createRoot(document.getElementById('root'));
//     rerender(props);
// }

export const renderSite = (props) => {
    // const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <App store={props} />
            {/* <App states={props} addNewPostDB={addNewPostDB} addNewMessageDB={addNewMessageDB} updateCurrentValuePost={updateCurrentValuePost} /> */}
        </React.StrictMode>
    );
}


renderSite(store);
store.subscruber(renderSite);














window.data = store;


// subscruber(renderSite);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
