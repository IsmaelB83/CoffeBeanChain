// Node modules
import React from 'react';
import ReactDOM from 'react-dom/client';
// Own modules
// Components
import App from './App';
// Styles
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

// Create root and render main App
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);