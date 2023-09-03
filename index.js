const express = require("express");
var cors = require('cors')
const mongoose = require('mongoose');
const app = express();

app.use(cors())
app.use(express.json({ limit: '50mb' }));

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://TarunKumar:Password@cluster0.ktnj73e.mongodb.net/', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('DataBase Connected')).catch(err => console.log(err))

app.get("/", (req, res) => {
    res.send("Express");
})
app.listen(3000, () => console.log("Server running"));