import React, { Component } from 'react';
import styles from './styles';
import MyInput from '../components/MyInput'


export default class SignIn extends Component {


    render() {
      return (
				<div style={styles.form}>
					<h1 style={{ textAlign: 'center' }}>Form</h1>
					<MyInput
						regex={/^[a-z0-9]{3,}@[a-z]{2,}\.[a-z]{2,4}$/i}
						errorText="invalid E-mail format"
						placeholder="email"
					/>
					<MyInput
						regex={/^[a-z0-9]{2,}$/}
						errorText="cannot include space"
						placeholder="username"
					/>
					<MyInput
						regex={/^07[0-9]{9}$/}
						errorText="invalid Mobile Number format"
						placeholder="phone number"
					/>
				</div>
			);
    }
}
