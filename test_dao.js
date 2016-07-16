var Web3 = require("web3");
var http = require("http");

var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"))

var TestContract = [{"constant":true,"inputs":[],"name":"value","outputs":[{"name":"","type":"int256"}],"type":"function"}];
var contract = web3.eth.contract(TestContract).at("0x98a1b8c74c91e35e2399bf72deb9cf39a7a558f0");

console.log(contract.value().toNumber());

//contract.get(1234, {from: web3.eth.accounts[0]})

function find_atc() {
    console.log("IN find_atc");
}
