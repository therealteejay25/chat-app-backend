const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;


app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "App started succesfully..."
    })
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});