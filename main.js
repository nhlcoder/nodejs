const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) => {
    var a = 1;
    var b = 2;
    return res.send('Hello Word');
});


app.listen(port, () => {
    console.log(`Example app listen on port http://localhost:${port}`);
});