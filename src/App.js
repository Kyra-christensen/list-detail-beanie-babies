import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <link to="/">Home</link>
            </li>
            <li>
              <link to="/detail">Home</link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/home">
            {/* this home page route should list all the beanies */}
            <BeaniesPage />
          </Route>
          <Route exact path="/detail"> 
            {/* this route should point to a particulat beanie baby by id and render that specific BeanieDetail page */}
            <BeanieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}