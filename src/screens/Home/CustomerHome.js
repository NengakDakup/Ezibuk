import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import CustomerNavigation from '../../components/Navigation/CustomerNavigation';

class CustomerHome extends Component {
    render(){
        const services = ['Beauty', 'Health', 'Pest Control', 'Car and Bike', 'Computer', 'Electronic', 'Domestic', 'Plumbing', 'Appliances', 'Laundry', 'Cooking', 'Agriculture'];
        return (
            <div className="container">
                <div className="customer-home-top">
                    <div style={{display: 'flex', flexDirection: 'column', flex: '1'}}>
                        <p style={{fontSize: '12px'}}>Location For Service</p>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <i className="fa fa-map-marker"></i>
                            <p className="m-0 ml-2">Jos Nigeria</p>
                            <i className="fa fa-caret-down ml-2"></i>
                        </div>
                    </div>
                    <div style={{flex: 1, flexDirection: 'column-reverse', maxWidth: '144px', paddingBottom: '20px'}}>
                        <p className="text-uppercase text-light">How can we help you today?</p>
                    </div>
                    <input type="text" placeholder="Search For A Service" className="search-service" />
                </div>
                <div className="customer-home-bottom">
                    <ul className="services-container">
                        {
                            services.map(item => 
                                <li className="service-item-card ripple-effect" onClick={() => this.props.history.push(`/services/${item}`)}>
                                    <i className="fa fa-user"></i>
                                    <p className="text-center">{item}</p>    
                                </li>
                            )
                        }
                    </ul>
                </div>
                <CustomerNavigation />
            </div>
        )
    }
}

export default CustomerHome;