import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'

import {auth} from './../firebase-config'
import AdminMenu from './AdminMenu'
import AdminPortfolio from './AdminPortfolio'

class Admin extends Component {
    constructor(props){
        super()

        this.state = {
            isAuthenticated: false,
            isLogging: true,
            user: null
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged(user => {
            this.setState({
                isAuthenticated: !!user,
                isLogging: false,
                user
            })
        })
    }

    render(){
        if(this.state.isLogging){
            return(
                <div className='container-fluid'>
                    
                    <h3 className='text-center'>
                        <span className="glyphicon glyphicon-refresh"/> Waiting...
                    </h3>
                </div>
            )
        }
        if(!this.state.isAuthenticated){
            return <Redirect to='/login'/>
        }
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