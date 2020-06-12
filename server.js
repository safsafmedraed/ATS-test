const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const productrouter = require('./routes/products');

app.use(express.json({ extended: false }));
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
);
const uri = process.env.ATLAS_URI;
mongoose.connect(uri || "mongodb+srv://safsafraed:sVW5Wa3JAj6rclLj@quizard-q5cbk.mongodb.net/ATS", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('***database works!!***');
})


app.use('/', productrouter)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port : ${PORT} `);
})
