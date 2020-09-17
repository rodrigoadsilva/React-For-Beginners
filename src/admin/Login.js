import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import { auth } from './../firebase-config'

class Login extends Component {
    constructor(props) {
        super()
        
        this.state = {
            isAuthenticated: false,
            isLogging: false,
            error: false,
            errorMessage: null
        }
        this.user = null
        this.pass = null

        this.authUser = this.authUser.bind(this)
    }

    authUser(){
        this.setState({isLogging: true, error: false, errorMessage: null})
        auth.signInWithEmailAndPassword(this.user.value, this.password.value)
            .then(user => {
                console.log('Usuário logado: ', user)
                this.setState({isAuthenticated: true})
            })
            .catch(err => {
                console.log(err)
                this.setState({error: true, isLogging: false, isAuthenticated: false, errorMessage: err.message})
            })

    }

    render() {
        if(this.state.isAuthenticated){
            return <Redirect to='/admin'/>
        }
        return (
            <div className='container-fluid'>
                <h1 className="text-center" style={{paddingBottom: "30px", color: 'black'}}>Login</h1>
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="inputUser" className="col-sm-2 control-label">USER</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputUser" ref={ref => this.user = ref} placeholder="name@email.com" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword" className="col-sm-2 control-label">PASS</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword" ref={ref => this.password = ref} placeholder="***" />
                                    <small className='form-text text-danger text-muted text-center'>{this.state.errorMessage}</small>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="button" disabled={this.state.isLogging} className="btn btn-primary btn-block" onClick={this.authUser}>Enter</button>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login