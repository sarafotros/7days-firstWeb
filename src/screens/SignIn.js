import React, { Component } from 'react';
import styles from './styles';
import MyInput from '../components/MyInput'
import Btn from '../components/Btn'

export default class SignIn extends Component {

    state = {
        username: 'username',
        showMsg: false,
    }
    myBtnClick = () =>{
        this.setState({
            showMsg: true
        })     
    }

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
                        onChange={(e) => { 
                            this.setState({
                                username: e.target.value
                            })
                        }}
					/>
					<MyInput
						regex={/^07[0-9]{9}$/}
						errorText="invalid Mobile Number format"
						placeholder="phone number"
					/>

					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
						}}
					>
						<Btn title="Submit" onClick={this.myBtnClick} />
                     {this.state.showMsg ? (<span> welcome {this.state.username}</span>): null}
					
					</div>
				</div>
			);
    }
}
