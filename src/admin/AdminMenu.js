import React from 'react'
import {Link} from 'react-router-dom'

const AdminMenu = props => {
    return (
        <div className='col-sm-3'>
            <div className='list-group'>
                <h4 className='list-group-item active'>Menu</h4>
                <Link to={`/Admin/portfolio`} className='list-group-item'>Portfolio</Link>
            </div>
        </div>
    )
}

export default AdminMenu