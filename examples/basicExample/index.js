import React from 'react';
import ReactDOM from 'react-dom';
import { BuilderProvider } from 'react-builder';

import App from './App';
import typographies from './template/typographies.json';
import data from './template/data.json';

ReactDOM.render(
    <BuilderProvider
        typographies={typographies}
        data={data}
    >
        <App />
    </BuilderProvider>
, document.getElementById('root'));
