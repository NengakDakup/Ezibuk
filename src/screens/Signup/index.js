import React, {Component} from 'react';
import {connect} from 'react-redux';
import validator from 'validator';

import {showToast, showBlocker, hideBlocker} from '../../actions/index';

import Spinner from '@bit/wirunekaewjai.components.spinner';
// my custom components
import Input from '../../components/utilities/Input';
import Header from '../../components/Header';
import Brand from '../../assets/images/brand.jpg';


class Signup extends Component {
    state = {
        name: null,
        email: null,
        phone: null,
        location: null,
        password: null, 
        password2: null,
        loading: false,
        errors: {
            name: null,
            email: null,
            phone: null,
            location: null,
            password: null,
            password2: null
        }
    };

    setValue(kind, val){
        this.setState({[kind]: val});
    }

    formSubmit(e){
        e.preventDefault();
        this.setLoading(true);

        const {err, errors} = this.validateInput();

        if(err){
            this.setState({errors: errors});
            this.setLoading(false);
        } else {
            this.resetError();
            this.sendToBackend();
        }
    }

    validateInput(){

        const errors = {
            err: false,
            name: null,
            email: null,
            phone: null,
            location: null,
            password: null,
            password2: null
        }
        
        if(!validator.isEmail(this.state.email)){
            errors.email = 'Please Enter a Valid Email';
            errors.err = true;
        } 

        if(!validator.isInt(this.state.phone) || this.state.phone.length < 10){
            errors.phone = 'Please Enter a Valid Phone Number';
            errors.err = true;
        }

        if(this.state.password.length < 4){
            errors.password = 'Please Enter More than Four Characters';
            errors.err = true;
        }

        if(this.state.password2 !== this.state.password){
            errors.password2 = 'Passwords Do not Match';
            errors.err = true;
        }

        return {err: errors.err, errors: errors};
    }

    sendToBackend(){
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
        this.setState({
            errors: {
                name: null,
                email: null,
                phone: null,
                location: null,
                password: null,
                password2: null
            }
        });
    }

    render(){
        const {name, email, phone, location, password , password2, loading} = this.state;
        const bool = ((name && email && phone && location && password && password2) && !this.state.loading);
        return(
            <div className="container slide">
                <Header 
                    title="Sign up"
                    history={this.props.history}
                    light={true} />
                <div className="signup-bottom">
                	<p className="font-sm light m-0">Create a New Account</p>
                	<form onSubmit={(e) => this.formSubmit(e)}>
                        <div className="form-group">
                			<i className="fa fa-user primary"></i>
                			<Input className="animated" type="text" for="name" placeholder="Your Full Name" setValue={this.setValue.bind(this)} error={this.state.errors.name}/>
                		</div>
                		<div className="form-group">
                			<i className="fa fa-envelope primary"></i>
                			<Input className="animated" type="text" for="email" placeholder="Email Address" setValue={this.setValue.bind(this)} error={this.state.errors.email} />
                		</div>
                        <div className="form-group">
                			<i className="fa fa-phone primary"></i>
                			<Input className="animated" type="number" for="phone" placeholder="Mobile Number" setValue={this.setValue.bind(this)} error={this.state.errors.phone} />
                		</div>
                        <div className="form-group">
                			<i className="fa fa-globe primary"></i>
                			<Input className="animated" type="text" for="location" placeholder="Your Location" setValue={this.setValue.bind(this)} error={this.state.errors.location} />
                		</div>
                        <div className="form-group">
                			<i className="fa fa-lock primary"></i>
                			<Input className="animated" type="password" for="password" placeholder="Password" setValue={this.setValue.bind(this)} error={this.state.errors.password} />
                		</div>
                        <div className="form-group">
                			<i className="fa fa-lock primary"></i>
                			<Input className="animated" type="password" for="password2" placeholder="Confirm Password" setValue={this.setValue.bind(this)} error={this.state.errors.password2} />
                		</div>
                        <div className="form-group">
                            <button 
                                className={bool? 'btn btn-primary' : 'btn btn-primary disabled'}
                                disabled={bool? false : true} >
                                {this.state.loading? <Spinner color="#fff" size={28} width={2}/> : 'Create Your Account'}
                            </button>
                        </div>
                	</form>
                    <div style={{width: '100%', alignItems: 'center'}}>
                        <div>
                            <p class="font-sm light">Or Signup With</p>
                        </div>
                        <div className="flex-row" style={{width: '100%', paddingTop: '15px'}}>
                            <button className="btn btn-outline-facebook" style={{flex: 1, margin: '0 10px', backgroundColor: 'transparent'}}>
                                Facebook
                            </button>
                            <button className="btn btn-outline-google" style={{flex: 1, margin: '0 10px', backgroundColor: 'transparent'}} onClick={() => this.setState({loading: true})}>
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

export default connect(null, mapDispatchToProps)(Signup)