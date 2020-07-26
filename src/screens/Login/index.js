import React, {Component} from 'react'

class Login extends Component {
    render(){
        return(
            <div className="container">
                <div className="login-top">
                	<p className="title white">Login</p>
                </div>
                <div className="login-bottom">
                	<p className="font-sm light">Sign in or Sign up to continue</p>
                	<form>
                		<div className="form-group">
                			<i>I</i>
                			<input className="animated" type="text" placeholder="Email Address" />
                		</div>
                	</form>
                </div>
            </div>
        )
    }
}

export default Login