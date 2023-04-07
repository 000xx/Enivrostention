import {initializeBlock, useBase, useRecords} from '@airtable/blocks/ui';
import React, {useState} from 'react';

//import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App';





    initializeBlock(() => 
    <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
    </React.StrictMode>);
