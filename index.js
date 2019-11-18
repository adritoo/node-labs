// Import a module
const http = require('http')
// ./handles.js
const handles = require('./handles')
const server = http.createServer(handles.serverHandle).listen(3000)


//http://localhost:3000/