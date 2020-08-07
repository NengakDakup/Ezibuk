import React, {Component} from 'react'

class Header extends Component {
	render(){
		const color = this.props.light? '#111' : '#fff';
		return (
			<div className={this.props.light? 'header header-light' : 'header'}>
				<button className="ripple-effect" onClick={() => this.props.history.goBack()} style={{backgroundColor: 'transparent', border: 'none', outline: 'none', color: '#fff'}}>
					<i className="fa fa-chevron-left font-md" style={{color: color, marginTop: '3px', fontSize: '24px'}}></i>
				</button>
				<span className="font-sm" style={{paddingLeft: '10px'}}>{this.props.title}</span>
			</div>
		);
	}
}

export default Header;