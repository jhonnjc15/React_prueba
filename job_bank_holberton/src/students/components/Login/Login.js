import React from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';


class LoginComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = { username: '', password: '' };
	
		// This binding is necessary to make `this` work in the callback
		this.doLogin = this.doLogin.bind(this);
	}

	doLogin() {
		alert(this.state.username);
		alert(this.state.password);
		
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
							<input type="text" placeholder="Usuario" name="username" value={this.state.username} />
						</div>
					</div>
					<div className="Password">
						<div className="label_user">
							<label>Contraseña</label>
						</div>
						<div className="input_user">
							<input type="text" placeholder="Contraseña" name="password" value={this.state.password} />
						</div>
					</div>
					<button className="Button" onClick={doLogin}>Iniciar Sesión</button>
				</div>
			</div>
		);
	}

}

export { Login }