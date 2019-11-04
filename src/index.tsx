import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './routes';
import { Provider } from 'react-redux';
import store from './stores/store';
import '../src/translation/i18n';

import './index.css';

ReactDOM.render(<Provider store={store}><AppRoute /></Provider>, document.getElementById('root'));