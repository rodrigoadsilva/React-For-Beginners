import React from 'react'

const ItemPortfolio = props => {
    return (
        <div className='col-sm-4'>
            <div className='thumbnail'>
                <img src='https://via.placeholder.com/150x100' Alt='The Placeholder' width='150' height='100' />
                <p><strong>{props.itemContent.title}</strong></p>
                <p>{props.itemContent.descrition}</p>
            </div>
        </div>
    )
}

export default ItemPortfolio