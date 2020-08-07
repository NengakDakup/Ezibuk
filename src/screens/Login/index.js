import React, {Component} from 'react';
import {connect} from 'react-redux';
import validator from 'validator';

import Spinner from '@bit/wirunekaewjai.components.spinner';

// my custom components
import Input from '../../components/utilities/Input';
import Brand from '../../assets/images/brand.jpg';

// actions
import {showToast, showBlocker, hideBlocker} from '../../actions/index';

class Login extends Component {
    state = {
        email: null,
        password: null, 
        loading: false,
        errors: {
            email: null,
            password: null
        }
    };

    setValue(kind, val){
        this.setState({[kind]: val});
    }

    formSubmit(e){
        e.preventDefault();
        this.setLoading(true);
        
        if(!validator.isEmail(this.state.email)){
            this.setState({errors: {email: 'Please Enter a Valid Email'}});
            this.setLoading(false);
        } else {
            this.resetError();
            this.sendToBackend();

        }
    }

    sendToBackend(){
        setTimeout(() => {
            this.props.history.push('/customer-home');
        }, 3000);
        // if(true){
        //     this.setLoading(false);
        //     this.props.auth.loguser;
        //     this.redirectToPAGE BASED ON USERS ACCOUNT TYPE
        // } else {
        //     this.setLoading(false);
        //     this.resetError;
        //     or this display toast
        // }
    }

    setLoading(val){
        if(val){
            this.setState({loading: true});
            this.props.showBlocker();
        } else {
            this.setState({loading: false});
            this.props.hideBlocker();
        }

    }

    resetError(){
        this.setState({errors: {email: null, password: null}});
    }

    toast(){
        this.props.showToast({
            message: 'This is Just to Test if it is working well',
            icon: 'warning',
            color: 'green'
        })
    }

    render(){
        const {email, password , loading} = this.state;
        return(
            <div className="container slide">
                <div className="login-top"></div>
                <div className="login-bottom">
                	<p className="font-sm light m-0">Sign in or Sign up to continue</p>
                	<form onSubmit={(e) => this.formSubmit(e)}>
                		<div className="form-group">
                			<i className="fa fa-envelope primary"></i>
                			<Input className="animated" type="text" for="email" placeholder="Email Address" setValue={this.setValue.bind(this)} error={this.state.errors.email} />
                		</div>
                        <div className="form-group">
                			<i className="fa fa-key primary"></i>
                			<Input className="animated" type="password" for="password" placeholder="Password" setValue={this.setValue.bind(this)} error={this.state.errors.password} />
                		</div>
                        <div className="form-group">
                            <button 
                                className={(email && password) && !this.state.loading? 'btn btn-primary' : 'btn btn-primary disabled'}
                                disabled={(email && password) && !this.state.loading? false : true} >
                                { loading? <Spinner color="#fff" size={28} width={2}/> : 'Login'}
                            </button>
                            <button className="btn btn-secondary" style={{marginTop: '5px'}} onClick={() => this.props.history.push('/signup')}>Create an Account</button>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <a><u>Forgot Your Password?</u></a>
                        </div>
                	</form>
                    <div style={{width: '100%', alignItems: 'center'}}>
                        <div>
                            <p className="font-sm light">Or Continue With</p>
                        </div>
                        <div className="flex-row" style={{width: '100%', paddingTop: '15px'}}>
                            <button onClick={() => this.toast()} className="btn btn-outline-facebook" style={{flex: 1, margin: '0 10px', backgroundColor: 'transparent'}}>
                                Facebook
                            </button>
                            <button className="btn btn-outline-google" style={{flex: 1, margin: '0 10px', backgroundColor: 'transparent'}}>
                                Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showToast: (payload) => { dispatch(showToast(payload)) },
        showBlocker: (payload) => { dispatch(showBlocker(payload)) },
        hideBlocker: (payload) => { dispatch(hideBlocker(payload)) },
    }
}

export default connect(null, mapDispatchToProps)(Login)
