import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Components/Fonts/Barlow/Barlow-Black.ttf';
import './Components/Fonts/Barlow/Barlow-Bold.ttf';
import './Components/Fonts/Barlow/Barlow-Thin.ttf';
import './Components/Fonts/Barlow/Barlow-SemiBold.ttf';
import './Components/Fonts/Barlow/Barlow-Regular.ttf';
import './Components/Fonts/Barlow/Barlow-Medium.ttf';
import './Components/Fonts/Sarpanch/Sarpanch-Black.ttf';
import './Components/Fonts/Sarpanch/Sarpanch-Bold.ttf';
import './Components/Fonts/Sarpanch/Sarpanch-ExtraBold.ttf';
import './Components/Fonts/Sarpanch/Sarpanch-Medium.ttf';
import './Components/Fonts/Sarpanch/Sarpanch-Regular.ttf';
import './Components/Fonts/Sarpanch/Sarpanch-SemiBold.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
