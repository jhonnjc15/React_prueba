import React from 'react';
import './Login.css';
//import { useHistory } from 'react-router-dom';
import { withRouter } from "react-router-dom"


class LoginComponent extends React.Component {
	

	constructor(props) {
		super(props);
		this.state = { username: '', password: '' };

		// This binding is necessary to make `this` work in the callback
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.doLogin = this.doLogin.bind(this);
	}

	doLogin() {
		//alert(this.state.username);
		//alert(this.state.password);
		//const history = useHistory();

		const url = "https://192.168.1.60:5000/api/student/login";
		const data = {
			"username": this.state.username,
			"password": this.state.password
		};
		//const token = localStorage.getItem("token");
		fetch(url, {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				//headers: { 'Content-Type': 'application/json', 'Token': token },
				body: JSON.stringify(data),
			})
			.then(res => res.json())
			.then(
				(result) => {
					//this.setState({
					//	isLoaded: true,
					//	items: result.items
					//});
					alert(result);
					if (result.data.ok) {
						const token = result.data.token;
						localStorage.setItem("token", token);
					}
					this.props.history.push("path/to/push");
					//history.push("/path/to/push");
				},
				(error) => {
					//this.setState({
					//	isLoaded: true,
					//	error
					//});
					alert("Error al hacer login.");
					this.props.history.push("path/to/push");
				}
			);
	}

	handleUsernameChange(event) {
		this.setState({username: event.target.value});
	}
	handlePasswordChange(event) {
		this.setState({password: event.target.value});
	}

	render() {
		//let history = useHistory();
		//let mode = "estudiante"
		return (
			<div className='containerPrincipal'>
				<div className="form-group">
					<div className="User">
						<div className="label_user">
							<label for="user">Usuario</label>
						</div>
						<div className="input_user">
							<input type="text" placeholder="Usuario" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
						</div>
					</div>
					<div className="Password">
						<div className="label_user">
							<label>Contraseña</label>
						</div>
						<div className="input_user">
							<input type="text" placeholder="Contraseña" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
						</div>
					</div>
					<button className="Button" onClick={this.doLogin}>Iniciar Sesión</button>
				</div>
			</div>
		);
	}

}

export { LoginComponent }