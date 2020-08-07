import React, { Component } from 'react';

class Input extends Component {
    state = {
        active: false
    }
    render(){
        const { error } = this.props;
        const color = error? 'red' : '#35255e';
        return (
            <div>
                <input style={{borderColor: color, color: color}} className={this.props.className} type={this.props.type} placeholder={this.props.placeholder} onChange={(e) => this.props.setValue(this.props.for, e.target.value)}/>
                <span className="input-error">{error}</span>
            </div>
        );
    }
} 

export default Input;