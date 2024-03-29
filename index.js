import express from "express";
import cors from 'cors';

const app = express();
app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/sendData', (req,res) =>{
    return res.status(200).json({
        message: 'Hello from the other side'
    })
})

const port = 3001;
app.listen(port , () => {console.log(`Server is working on port ${port}`);})