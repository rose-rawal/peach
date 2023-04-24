import React from 'react';
import * as ReactDom from 'react-dom/client'
import './index.css';
import App from './App';
import { AppProvider } from './context';
const container=document.getElementById("root");
const root=ReactDom.createRoot(container)
root.render(
    <React.StrictMode>
        <AppProvider>
            <App/>
        </AppProvider>
    </React.StrictMode>
)


