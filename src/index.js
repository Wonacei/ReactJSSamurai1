import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsDB = [
  { id: '1', text: 'Начинаю учить JS', like: '28' },
  { id: '2', text: 'ью кровь собаки', like: '3' },
  { id: '3', text: 'Я скоро в отпуск!', like: '16' },
  { id: '4', text: 'Отдыхаю распластавшись', like: '5' },
  { id: '5', text: 'В лето самая жара', like: '99' },
]

let dialoguesDB = [
  { name: 'Gargantua', id: '01' },
  { name: 'Pantikruel', id: '02' },
  { name: 'Deakmirion', id: '03' },
  { name: 'Luciliy', id: '04' },
  { name: 'Jojobo', id: '05' }
]

let messagesDB = [
  { id: '1', message: 'HI' },
  { id: '2', message: 'ты где' },
  { id: '3', message: 'нету там' },
  { id: '4', message: 'за шкафом' },
  { id: '5', message: 'врунишка' },
  { id: '6', message: 'врунишка' },
  { id: '7', message: 'врунишка' },
  { id: '8', message: 'врунишка' },
  { id: '9', message: 'врунишка' },
  { id: '10', message: 'врунишка' },
  { id: '11', message: 'byeeeee' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={postsDB} dialogues={dialoguesDB} messages={messagesDB} />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
