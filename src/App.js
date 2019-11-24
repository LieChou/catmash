import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Vote from './containers/Vote';
import Ranking from './containers/Ranking';

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/vote" component={Vote} />
                    <Route exact path="/rank" component={Ranking} />
                    <Redirect from="*" to="vote" />
                </Switch>
            </Router>
        )
    }

}

export default App; 