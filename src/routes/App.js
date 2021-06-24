import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AutoScrollToTop from '../components/AutoScrollToTop';
import Layout from '../components/Layout';
import Home from '../Pages/Home';

import '../styles/app.scss';

const App = () => {
  return (
    <Router>
      <AutoScrollToTop />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
