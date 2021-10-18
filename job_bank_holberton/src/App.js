import React from 'react';
import './App.css';

import { StudentLogin } from './students/pages/Login/Login';

import { Login1 } from './Paginas/Login1/Login1';
import { Login2 } from './Paginas/Login2/Login2';
import { NotFoundPage } from './Paginas/NotFoundPage';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import { Puesto } from "./Paginas/PuestoStdView/Puesto";
import { PuestosDeTrabajo } from "./Paginas/PuestosDeTrabajo/PuestosDeTrabajo"


function App() {
	
	/*<Route path="/student/home" component={StudentLogin} />
	<Route path="/student/profile" component={StudentLogin} />

	<Route path="/partner/login" component={PartnerLogin} />
	<Route path="/partner/home" component={PartnerLogin} />
	<Route path="/partner/profile" component={PartnerLogin} />

	<Route path="/admin/login" component={AdminLogin} />
	<Route path="/admin/home" component={AdminLogin} />
	<Route path="/admin/jobs" component={AdminLogin} />*/
	
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login1} />

				<Route path="/student/login" component={StudentLogin} />

				<Route exact path="/puesto" component={Puesto} />
				<Route exact path="/estudiante/puestos-de-trabajo" component={PuestosDeTrabajo} />

				<Route path="/404" component={NotFoundPage} />
				<Route path="*">
					<Redirect to="/404" />
				</Route>
			</Switch>
		</Router>
	);
}

function LoginUser() {
	return (
		<Switch>
			<Route exact path="/login/estudiante" component={Login2} />
			<Route exact path="/login/empresa" component={Login2} />

			<Route exact path="/login/admin" component={Login2} />
			<Route path="*">
				<Redirect to="/404" />
			</Route>
		</Switch>
	)
}
export default App;
