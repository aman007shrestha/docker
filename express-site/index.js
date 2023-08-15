const app = require('./app');
const debug = require('debug')('04:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set("port", port);


const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);




function normalizePort(val){
    const port = parseInt(val, 10);
    if (isNaN(port)){
        // named Pipe
        return val
    }
    if (port >= 0){
        return port;
    }
    return false;
}

// Event listerner for HTTP server error event

function onError(error){
    if (error.syscall !== 'listen'){
        throw error

    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : "Port " + port;
    // handle specific listen error with friendly messages
    switch (error.code) {
        case 'EACESS':
            console.error(bind + ' requires elevated privilegs');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Event listener for HTTP server listening event
function onListening(){
    const addr = server.address();
    const bind = typeof addr === "string" ? 'pipe ' + addr : 'port ' + addr.port;
    debug("Listening on "+ bind); 
}