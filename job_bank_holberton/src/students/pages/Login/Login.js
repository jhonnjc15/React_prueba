import React from 'react';
import './Login.css';
import { IconHolberton } from '../../components/IconHolberton/IconHolberton';
import { LoginComponent } from '../../components/Login/Login';

class StudentLogin extends React.Component {
	
	render() {
		return (
			<div className='Login2Container'>
				<div className='Icon'>
					<IconHolberton />
				</div>
				<div className='BoxLogin'> 
					<LoginComponent />
				</div>
			</div>
		);
	}

}

export { StudentLogin };