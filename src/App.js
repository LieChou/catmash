import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Vote from './containers/vote/Vote';
import Ranking from './containers/ranking/Ranking';
import { connect } from 'react-redux';
import Loading from './Loading';
import { getCats } from './store/action/creators/Cats';


class App extends Component {

    constructor(props) {
        super(props);

        this.props.getCats();
    }

    render() {
        return (

            <Router>
                {
                    this.props.cats ?
                        <Switch>
                            <Route exact path="/vote" component={Vote} />
                            <Route exact path="/rank" component={Ranking} />
                            <Redirect from="*" to="vote" />
                        </Switch>
                        :
                        < Loading />
                }
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cats: state.cats.cats,
    }
}

const mapDispatchToProps = dispatch => ({
    getCats: () => dispatch(getCats()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App); 