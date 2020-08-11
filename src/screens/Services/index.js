import React, { Component } from 'react';
import Header from '../../components/Header';

class Services extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: ['Car Repair', 'Car Washing', 'Laundry Services', 'Fix Genarator Problem', 'Take Lesson for Kids on Mathematics', 'Fix Spoilt Bulb', 'Fix Genarator Issue']
        }
    }
    render(){
        const {service} = this.props.match.params;
        return (
            <div className="container slide">
                <Header 
                    history={this.props.history}
                    light={false} />
                <div style={{flex: 0.4, backgroundColor: '#35255e', color: '#fff', alignItems: 'center', justifyContent: 'center', position: 'fixed', top: 0, left: 0, width: '100%', height: '40%'}}>
                    <h3 style={{textAlign: "center"}}>{service}</h3>
                </div>
                <div style={{flex: 0.6, position: 'fixed', top: '40%', left: 0, width: '100%', height: '60%'}}>
                    <ul style={{maxHeight: '100%', overflowY: 'scroll', listStyleType: 'none', margin: '0px', padding: '0px' }}>
                        {this.state.items.map(item => (
                            <li style={{display: 'flex', alignItems: 'center', paddingLeft: 20, borderBottom: '1px solid #ccc', overflow: 'hidden'}} className="ripple-effect">
                                <p style={{flex: 0.9}} className="light">{item}</p>
                                <i style={{flex: 0.1}} className="fa fa-chevron-right light"></i>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default Services;