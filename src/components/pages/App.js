import React from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import Home from 'components/pages/Home'
import Unauthorized from 'components/pages/static/Unauthorized'
import NotFound from 'components/pages/static/NotFound'
import SignIn from 'components/pages/auth/SignIn'
import Profile from 'components/pages/Profile'

const AuthRoute = ({ component: Component, isAuthenticated, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/sign_in",
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	);
};

const App = ({location}) => {
    return (
      <Switch location={location}>
        <Route
          path="/"
          exact
          component={Home}
        />
					<Route path="/sign_in" exact component={SignIn} />
					<AuthRoute
						path="/profile"
						exact
						component={Profile}
						isAuthenticated={false}
					/>
					<Route path="/401" exact component={Unauthorized} />
					<Route component={NotFound} />
      </Switch>
    );
}

export default withRouter(App);
