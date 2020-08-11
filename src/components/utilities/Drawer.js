import React, { Component } from 'react';
import Swipe from 'react-easy-swipe';
import {connect} from 'react-redux';

import { hideDrawer } from '../../actions';


class Drawer extends Component {
    constructor(props){
        super(props);
        this.state = {
            elementHeight: 400,
            swipedY: 0
        }
    }

    componentDidMount() {
        const elementHeight = this.divElement.clientHeight;
        this.setState({ elementHeight });
    }

    onSwipeStart = (event) => {
        console.log('Start swiping...', event);
    }
    
    onSwipeMove = (position, event) => {
        let el = document.querySelector('.drawer > div');
        if(Math.sign(position.y) === 1 && el.scrollTop === 0){
            this.setState({swipedY: position.y - el.scrollTop})
        }
    }
    
    onSwipeEnd = (event) => {
        const half = this.state.elementHeight * 0.7;
        if(this.state.swipedY > half){
            this.setState({swipedY: this.state.elementHeight})
            //hide the drawer
            this.props.hideDrawer();
        } else {
            this.setState({swipedY: 0})
        }
    }

    render(){
        return (
            <div className="">
                <div className="fader"></div>
                <Swipe
                    onSwipeStart={this.onSwipeStart}
                    onSwipeMove={this.onSwipeMove}
                    onSwipeEnd={this.onSwipeEnd} >
                        <div 
                            className="drawer slide" 
                            ref={ (divElement) => { this.divElement = divElement } } 
                            style={{height: this.state.elementHeight - this.state.swipedY}}>
                                <div className="drawer-body">
                                    <ul>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li><li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li><li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li><li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li><li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>
                                        <li>LKHJIUHiuhiuhiuh</li>

                                    </ul>
                                </div>
                        </div>
                </Swipe>
                

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideDrawer: (payload) => { dispatch(hideDrawer(payload)) },
    }
}

export default connect(null, mapDispatchToProps)(Drawer);