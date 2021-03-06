import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/configureStore';
import App from './containers/App';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = configureStore()

ReactDom.render(
    <Provider store={store}>
        <MuiThemeProvider>      
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)