import React, {Component} from 'react'

import config, {storage} from './../firebase-config'

class AdminPortfolio extends Component {
    constructor(props){
        super(props)

        this.state = {
            portfolio : {
    
            }
        }
    
        config.syncState('portfolio', {
            context: this,
            state: 'portfolio',
            asArray: false
        })
    }

    render(){
        return (
            <div className='col-sm-9'>
                <h2>Admi Area - Portfolio</h2>
                <form>
                    <div className="form-group">
                        <label for="inputCityName">City name</label>
                        <input type="text" className="form-control" id="inputCityName" placeholder="New York..." />
                    </div>
                    <div className="form-group">
                        <label for="inputCityDescrition">City descrition</label>
                        <textarea className="form-control" rows="2"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="inputImage">Upload a picture</label>
                        <input type="file" id="inputImage" accept="image/x-png,image/gif,image/jpeg"/>
                        <p className="help-block">Upload a city's picture to show on card</p>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        )
    }
}

export default AdminPortfolio