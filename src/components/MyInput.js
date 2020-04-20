import React, { Component } from 'react'

class MyInput extends Component {

    state = {
        error: false,
        inputText: '',
    }
    render() {
        const { onChange } = this.props
        let regex = this.props.regex
        let errorText = this.props.errorText
        let placeholder = this.props.placeholder
        let value = this.props.value
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
							{...this.props}
							onBlur={(e) => {
								let value = e.target.value;
								this.setState({
									error: !regex.test(value),
									inputText: value,
								});
								console.log(value);
							}}
							type="text"
							placeholder={placeholder}
							onChange={onChange}
							style={{
								width: '80%',
								border: 'none',
								borderBottom: '1px solid #000',
							}}
						/>
						{this.state.error ? (
							<span style={{ color: 'red', fontSize: 12, marginTop: 5 }}>
								{errorText}
							</span>
						) : null}
					</div>
				);
    }
}
export default MyInput;
