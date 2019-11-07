import React from 'react';
import { Route } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './Layout/Layout'
import { Navigation } from './Layout/Nav'
import { Home } from './Home/Home';
import { About } from './About/About';

function App() {
  return (
    <div>
      <div>
        <Navigation></Navigation>
      </div>
      <div className="dark App App-header">
        <Layout>
          <Route exact path='/' component={Home} />  
          <Route exact path='/about' component={About} />  
        </Layout>      
      </div>
    </div>
  );
}

export default App;
