import React, {Component} from 'react';
import {connect} from 'react-redux';

import {hideToast} from '../../actions/index';

class Toast extends Component {
    componentDidMount(){
        setTimeout(() => {
            this.props.hideToast();
        }, 3000);
    }

    render(){
        const {message, icon, color} = this.props.data;
        return (
            <div className="my-toast slide" style={{backgroundColor: color}}>
                <i className={`fa fa-${icon}`}></i>
                <span>{message}</span>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        hideToast: (payload) => { dispatch(hideToast(payload)) },
    }
}

export default connect(null, mapDispatchToProps)(Toast)
