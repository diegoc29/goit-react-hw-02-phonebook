import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ContactForm/>
    <ContactList/>
    <Filter/>
  </React.StrictMode>
);
