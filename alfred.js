var Web3 = require("web3");
var http = require("http");

var web3 = new Web3();
var PORT = 7453;

web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"))

var TestContract = [{"constant":true,"inputs":[],"name":"value","outputs":[{"name":"","type":"int256"}],"type":"function"}];
var contract = web3.eth.contract(TestContract).at("0x98a1b8c74c91e35e2399bf72deb9cf39a7a558f0");

console.log(contract.value().toNumber());

var server = http.createServer(function(request, response) {
    console.log(request.method);
    console.log(request.headers);
    console.log(request.url);

    response.writeHead(200);
    response.write("Hello form server");
    response.end();
});

server.listen(PORT);
console.log("Listening on http://localhost:" + PORT + "/");
