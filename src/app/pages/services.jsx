import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Service from '../components/service';
import Edit from "../components/edit";

const Services = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/services/edit">Edit</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/services/edit" component={Edit} />
        <Route path="/services" component={Service} />
      </Switch>
    </div>
  );
};

export default Services;
