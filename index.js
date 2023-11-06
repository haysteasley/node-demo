//import express lbrary and assign it o a variable
import express from 'express'

//create an instance of an express application
const app = express();

//set the port the application will run
const port = process.env.PORT || 3001

//set up resonse for the root path of the application
app.get('/', (req,res) => {
    res.send("Draw a duck")
})

//set up the application to listen on the specified post
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})