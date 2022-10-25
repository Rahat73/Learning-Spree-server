const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Learning-Spree API running');
});

app.listen(port, () => {
    console.log('Learning-Spree API running on port', port);
});