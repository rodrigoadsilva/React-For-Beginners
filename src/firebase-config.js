const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
    apiKey: "AIzaSyAqoEKHL-AQ3lTa16oz6Jo4uus8-0_1aWg",
    authDomain: "rodrigoudemy-portfolio.firebaseapp.com",
    databaseURL: "https://rodrigoudemy-portfolio.firebaseio.com",
    projectId: "rodrigoudemy-portfolio",
    storageBucket: "rodrigoudemy-portfolio.appspot.com",
    messagingSenderId: "302594527242",
    appId: "1:302594527242:web:e1c04e1425245cf6c18ff3"
}

const app = firebase.initializeApp(FirebaseConfig)
const config = Rebase.createClass(app.database())

export const storage = app.storage()
export const auth = app.auth()

export default config