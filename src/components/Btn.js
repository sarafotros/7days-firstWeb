import React, { Component } from 'react'

export default class Btn extends Component {
    render() {
        return (
					<div>
						<button
							style={{ width: 120, height: 40, backgroundColor: this.props.bg }}
							onClick={this.props.onClick}
						>
							{this.props.title}
						</button>
					</div>
				);
    }
}
