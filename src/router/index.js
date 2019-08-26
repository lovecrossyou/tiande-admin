import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from '@/views/layout/Index';
import Login from '@/views/Login';
import SignUp from '@/views/SignUp'

import AuthRouter from '@/views/auth/AuthRouter';
const Router = () => {
	return (
		<HashRouter>
			<Switch>
				<Route component={Login} exact path="/login" />
				<Route component={SignUp} exact path="/signup" />
				<AuthRouter path="/" component={Layout} />
			</Switch>
		</HashRouter>
	);
};

export default Router;
