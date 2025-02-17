import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
<<<<<<< HEAD

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
=======
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
>>>>>>> upstream/development
    </React.StrictMode>
);
