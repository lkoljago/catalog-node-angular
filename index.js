const app = require('./app');
const port = process.env.PORT || 9000;
const colors = require('colors');

app.listen(port, () => console.log(`server listening on port ${port}`.blue))