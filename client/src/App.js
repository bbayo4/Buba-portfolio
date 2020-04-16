
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
//core
import Header from './core/Header';
import Footer from './core/Footer';

//pages
import HomePage from './pages/home/HomePage';
import ResumePage from './pages/resume/ResumePage';
import AdventurePage from './pages/adventures/Adventures';
import AdventureListPage from './pages/adventures/AdventureListPage';
import BlogPage from './pages/blogs/BlogPage';
import BlogListPage from './pages/blogs/BlogListPage'
import ContactPage from './pages/contacts/ContactPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <main id="main">
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/resume" component={ResumePage} />
                <Route path="/adventure-list" component={AdventureListPage} />
                <Route path="/adventure/:name" component={AdventurePage} />
                <Route path="/blogs-list" component={BlogListPage} />
                <Route path="/blog/:name" component={BlogPage} />
                <Route path="/contacts" component={ContactPage} />
                {/* <Route component={NotFoundPage} />  */}
              </Switch> 
            </main>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
