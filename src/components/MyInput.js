import React, { Component } from 'react'

class MyInput extends Component {

    state = {
        error: false,
        email: '',
    }
    render() {

        let regex = this.props.regex
        let errorText = this.props.errorText
        return (
					<div
						style={{
							color: 'black',
							width: '100%',
							padding: 15,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<input
							onBlur={(e) => {
								let value = e.target.value;
								this.setState({
									error: !regex.test(value),
									email: value,
								});
								console.log(value);
								console.log(this.state.email);
							}}
							type="text"
							style={{
								width: '80%',
								border: 'none',
								borderBottom: '1px solid #000',
							}}
						></input>
                {this.state.error ? <span style={{ color: 'red', fontSize: 12, marginTop: 5 }}>{errorText}</span> : null}
					</div>
				);
    }
}
export default MyInput;
