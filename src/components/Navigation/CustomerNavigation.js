import React, { Component } from 'react';
import {connect} from 'react-redux';
import { showDrawer } from '../../actions';

class CustomerNavigation extends Component {
    render(){
        return (
            <div className="bottom-navigation">
                <div className="navigation-item">
                <i className="fa fa-clipboard"></i>
                    <p>Requests</p>
                </div>
                <div className="navigation-item" onClick={() => this.props.showDrawer()}>
                    <i className="fa fa-bell"></i>
                    <p>Notification</p>
                </div>
                <div className="navigation-item active-navigation">
                    <i className="fa fa-home"></i>
                    <p>Services</p>
                </div>
                <div className="navigation-item">
                    <i className="fa fa-user"></i>
                    <p>Profile</p>
                </div>
                <div className="navigation-item">
                    <i className="fa fa-comment-dots"></i>
                    <p>Chat</p>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showDrawer: (payload) => { dispatch(showDrawer(payload)) },
    }
}

export default connect(null, mapDispatchToProps)(CustomerNavigation);
