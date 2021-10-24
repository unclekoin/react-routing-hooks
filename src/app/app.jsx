import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Stats from './components/stats';
import Posts from './pages/posts';
import NotFound from './pages/404';
import Services from './pages/services';

function App() {
  return (
    <div className="app">
      <Navbar />
      <h1>React Routing</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/posts/:postId?/:display?" component={Posts} />
        <Route path="/dashboard/stats" component={Stats} />
        <Route
          path="/dashboard"
          // props => history, location, match
          // conditions
          render={(props) => {
            return true && <Dashboard isAdmin={false} {...props} />;
          }}
        />
        <Route path="/services" component={Services} />
        <Route path="/404" component={NotFound} />
        <Redirect from="/admin" to="/dashboard" />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
