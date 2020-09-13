import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import AdminMenu from './AdminMenu'

class Admin extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='container'>
                <h1>Administration Area</h1>
                <Route path='/' component={AdminMenu}/>
            </div>
        )
    }
}

export default Admin