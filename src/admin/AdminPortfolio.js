import React, {Component} from 'react'


import config, {storage} from './../firebase-config'

class AdminPortfolio extends Component {
    constructor(props){
        super()

        this.state = {
            isRegistering: false,
            registeringDefaultImage: false
        }

        this.registerJob = this.registerJob.bind(this)
    }

    registerJob(e){
        const itemPortfolio = {
            title: this.title.value,
            descrition: this.descrition.value,
            image: this.image
        }
        if(itemPortfolio.image.value === ''){
            this.setState({isRegistering: true, registeringDefaultImage: true})
            const newPortfolio = {
                title: itemPortfolio.title,
                descrition: itemPortfolio.descrition,
                image: 'https://via.placeholder.com/200x150?text=Image+not+submit'
            }
            config.push('portfolio', {
                data: newPortfolio
            })
            setTimeout(function () {
                this.setState({isRegistering: false})
              }.bind(this), 2000)
            
        }
        else{
            this.setState({isRegistering: true, registeringDefaultImage: false})
            const imageFile = itemPortfolio.image.files[0]
            // eslint-disable-next-line
            const {name} = imageFile // Is possible collect size and type from file
            const imageStorage = storage.ref(name)
            imageStorage.put(imageFile).then(
                img => {
                    img.imageStorage.getDownloadURL().then(downloadURL => {
                        const newPortfolio = {
                            title: itemPortfolio.title,
                            descrition: itemPortfolio.descrition,
                            image: downloadURL
                        }
                        config.push('portfolio', {
                            data: newPortfolio
                        })
                        this.setState({isRegistering: false})
                    })
                }
            )
        }

        e.preventDefault()
    }

    render(){
        if(this.state.isRegistering){
            return(
                <div className='container-fluid'>
                    
                    <h3 className='text-center'>
                        <span className="glyphicon glyphicon-refresh"/> Waiting...
                        <br/>
                        {this.state.registeringDefaultImage && <small className='form-text text-danger text-muted text-center'>Submitting a placeholder as a City picture</small>}
                    </h3>
                </div>
            )
        }
        return (
            <div className='col-sm-9'>
                <h2>Portfolio</h2>
                <form onSubmit={this.registerJob}>
                    <div className="form-group">
                        <label htmlFor="inputCityName">City name</label>
                        <input type="text" className="form-control" id="inputCityName" placeholder="New York..." ref={(ref) => this.title = ref}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputCityDescrition">City descrition</label>
                        <textarea className="form-control" rows="2" ref={(ref) => this.descrition = ref}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputImage">Upload a picture</label>
                        <input type="file" id="inputImage" accept="image/x-png,image/jpeg"  ref={(ref) => this.image = ref}/>
                    </div>
                    <button type="submit" className="btn btn-success">Register job</button>
                </form>
            </div>
        )
    }
}

export default AdminPortfolio