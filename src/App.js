import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Homepage from './containers/Homepage';
import NotFound from './containers/NotFound';
import store from './store';
import './globalStyles';

export default () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>
);
