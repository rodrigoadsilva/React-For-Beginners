import React, {Component} from 'react'


import config, {storage} from './../firebase-config'

class AdminPortfolio extends Component {
    constructor(props){
        super()

        this.registerJob = this.registerJob.bind(this)
    }

    registerJob(e){
        const imageFile = this.image.files[0]
        const {name, size, type} = imageFile
        const ref = storage.ref(name)
        ref.put(imageFile).then(
            img => {
                img.ref.getDownloadURL().then(downloadURL => {
                    const newPortfolio = {
                        title: this.title.value,
                        descrition: this.descrition.value,
                        image: downloadURL
                    }
                    config.push('portfolio', {
                        data: newPortfolio
                    })
                })
            }
        )

        e.preventDefault()
    }

    render(){
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