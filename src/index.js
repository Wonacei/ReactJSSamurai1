import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './states'

const root = ReactDOM.createRoot(document.getElementById('root'));

export const renderSite = (props) => {

    root.render(
        <React.StrictMode>
            <App store={props} />
        </React.StrictMode>
    );
}

renderSite(store);
store.subscruber(renderSite);
window.data = store;

reportWebVitals();
