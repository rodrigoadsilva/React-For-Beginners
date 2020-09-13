import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import AdminMenu from './AdminMenu'
import AdminPortfolio from './AdminPortfolio'

class Admin extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='container-fluid'>
                <h1 className='text-center'>Administrative Area</h1>
                <div className='row'>
                    <Route path={`/`} component={AdminMenu}/>
                    <Route path={`${this.props.match.url}/portfolio`} component={AdminPortfolio}/>
                </div>
            </div>
        )
    }
}

export default Admin