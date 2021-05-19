import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticleListPage';
import Header from './components/Header';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="insertClassLater">
          <Header />
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/articles-list" component={ArticleListPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>

        </div>

      </Router>

    );
  }
}

export default App;
