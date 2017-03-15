import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Example from './components/Example';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Example} />
    </Router>
  );
}

export default RouterConfig;
