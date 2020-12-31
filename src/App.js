import React from 'react';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CustomHeader from './components/header/CustomHeader';
import Home from './pages/Home';

import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <CustomHeader activeIndex='1' isLogin={true}/>
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route path="/login" component={LoginPage}>
          </Route>
          <Route path="/register" component={RegisterPage}>
            <RegisterPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
