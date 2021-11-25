const http = require('http');
const fs = require('fs').promises;
const host = '10.0.0.5';
const port = 80;

var Gpio = require('onoff').Gpio; 
var led = new Gpio(17, 'out');
var estado = 0;

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};
const server = http.createServer(requestListener);

server.listen(port, host, () => 
    {
    console.log('Server is running on http://%s:%d', host, port);
    }
);

function toogle() {
    estado = !estado;
    if (estado) {
        //led.writeSync(1);
        alert("ON");
    }
    else {
        // led.writeSync(0);
        alert("OFF");
    }
}
