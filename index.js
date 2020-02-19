require('dotenv').config();   // for testing

const server = require('./api/server.js');

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(
    `\n** ✨ magic happening on port ${port} ✨ **\n`
));
