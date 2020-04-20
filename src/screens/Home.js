import React, { Component } from 'react';
import styles from './styles';
import SignIn from './SignIn';
import Btn from '../components/Btn'

class Home extends Component {
	state = {
		counter: 0,
	};
	render() {
		return (
			<div style={styles.body}>
				<div style={styles.header}>
					<div style={styles.left}>
						<span style={{ marginLeft: 50, color: 'black', fontSize: 26 }}>
							{this.state.counter}
						</span>
					</div>
					<div style={styles.center}>
						<h2>Day 1 </h2>
					</div>
					<div style={styles.right}>
						<Btn
							title="counter"
							onClick={() => {
								this.setState((state) => ({
									counter: state.counter + 1,
								}));
							}}
						/>
					</div>
				</div>
				<div style={styles.main}>
					<SignIn />
				</div>
				<div style={styles.footer}></div>
			</div>
		);
	}
}
export default Home;