import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AutoScrollToTop from '../components/AutoScrollToTop';
import Layout from '../components/Layout';
import Profile from '../Pages/Candidatos/Profile';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Jobs from '../Pages/Jobs';
import Register from '../Pages/Register';
import JobsDetails from '../Pages/JobsDetails';
import About from '../Pages/About';

import '../styles/app.scss';

const App = () => {
  return (
    <Router>
      <AutoScrollToTop />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-in" component={Login} />
          <Route exact path="/sign-up" component={Register} />
          <Route exact path="/candidatos/profile" component={Profile} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/jobs/details/:id" component={JobsDetails} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
