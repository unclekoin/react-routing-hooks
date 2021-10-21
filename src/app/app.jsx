import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Stats from './components/stats';
import Posts from './pages/posts';

function App() {
  return (
    <div className="app">
      <Navbar />
      <h1>React Routing</h1>
      <Switch>
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
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
