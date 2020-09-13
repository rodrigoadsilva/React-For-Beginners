import React from 'react'
import {Link} from 'react-router-dom'

const AdminMenu = props => {
    return (
        <div className='container-fluid'>
            <h2 className='text-center'>Main menu</h2>
            <div className='row'>
                <div className='col-sm-6'>
                    <div className="list-group">
                        <p className="list-group-item active">Select a option</p>
                        <Link to="/" className="list-group-item">Portfolio</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminMenu