import React, {Component} from 'react'
import { connect } from 'react-redux'

import {changeName} from '../../actions'

// Components
import Header from '../../components/Header'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: null
        }
    }
    componentWillMount() {
        const {signedIn} = this.props.data.userDetails;
        if(!signedIn){
            this.props.history.push('/login');
        }
    }
    render(){
        return(
            <div className="app">
                <Header />
                Home Page
                <p>{this.props.data.userDetails.name}</p>
                <input type="text" placeholder="Enter Your Name" onChange={(e) => this.setState({name: e.target.value})}/>
                <button onClick={() => this.props.changeName(this.state.name)}>Change Name</button>
            </div>
        )
    }
}

//fetch what you want from the store
const mapStateToProps = (state) => {
    return {
        data: state 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (payload) => { dispatch(changeName(payload)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)