import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import Nav from './Nav/Nav';
import petsArr from '../../assets/pets.json';

const Home = lazy(() =>
    import('./Home/Home' /* webpackChunkName: "home-page" */),
);
const About = lazy(() =>
    import('./About/About' /* webpackChunkName: "about-page" */),
);
const Pets = lazy(() =>
    import('./Pets/Pets' /* webpackChunkName: "pets-page" */),
);
const Pet = lazy(() =>
    import('./Pets/Pet/Pet' /* webpackChunkName: "pet-page" */),
);

class App extends Component {
    state = {
        pets: [],
    };

    componentDidMount() {
        this.setState({ pets: petsArr });
    }

    handleGoBack = () => {
        const { history } = this.props;

        history.push('/pets');
    };

    render() {
        const { pets } = this.state;

        return (
            <div>
                <header>
                    <Nav />
                </header>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route
                            path="/pets/:id"
                            render={props => (
                                <Pet
                                    {...props}
                                    pets={pets}
                                    goBack={this.handleGoBack}
                                />
                            )}
                        />
                        <Route
                            path="/pets"
                            render={props => <Pets {...props} pets={pets} />}
                        />
                        <Route path="/about" component={About} />
                        <Route component={Home} />
                    </Switch>
                </Suspense>
            </div>
        );
    }
}

App.propTypes = {
    history: PropTypes.object.isRequired,
};

export default withRouter(App);
