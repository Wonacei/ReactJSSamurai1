import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from './states'
import store from './redux/redux-store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

export const renderSite = (props) => {

    // console.log(props.store)

    root.render(

        <React.StrictMode>
            <App store={props} />
        </React.StrictMode>
    );
}

renderSite(store);

store.subscribe(() => {
    let state = store;
    renderSite(state);
});
// store.subscruber(renderSite);
window.data = store;

reportWebVitals();
