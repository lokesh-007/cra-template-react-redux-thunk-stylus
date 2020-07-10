import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import { ExamplePage } from '../modules/Example/pages/ExamplePage';

import './App.styl';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="route-wrapper">
          <Router>
            <div className="scroll-wrapper">
              <Switch>
                <Route path="/" component={ExamplePage}/>
              </Switch>
              <footer className="footer-wrapper">
                <span className="footer-item author-info">
                  Made with <span className="heart-icon">	&#9829; </span> by <a href="https://lokeshp.com" target="_blank" rel="noopener noreferrer"> Lokesh Prabakaran </a>
                </span>
              </footer>
            </div>
          </Router>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);