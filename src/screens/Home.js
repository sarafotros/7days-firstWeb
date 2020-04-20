import React, { Component } from 'react';
import styles from './styles'

class Home extends Component {
    render() {
        return (
         <div style={styles.body}>
            <div style={styles.header}>
                <div style={styles.left}>
                    <h2>left </h2>
                </div>
                <div style={styles.center}>
                    <h2>Day 1 </h2>
                </div>
                <div style={styles.right}>
                    <h2>right</h2>
                </div>
            </div>
            <div style={styles.main}></div>
            <div style={styles.footer}></div>
        </div>
	 );
      
    }
}
export default Home;