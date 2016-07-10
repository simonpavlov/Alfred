var http = require("http");
var PORT = 7453;

var server = http.createServer();
server.on("request", function(request, response){
    console.log(request.method);

    switch (request.method) {
        case 'HEAD':
            response.writeHead(200);
            response.write('HEAD response');
            response.end();
            break
        case 'GET':
            var coordinate = GETRequestParse(request.url);
            var responseText = procRequest(coordinate);
            if(responseText != null){
                response.writeHead(200);
                response.write(responseText);
                response.end();
            } else {
                response.writeHead(500);
                response.end();
            }
            break;
        default:
            response.writeHead(501);
            response.end();
    }
});

function GETRequestParse(url) {
    console.log("GET request: " + url);
    res = {};
    paramsObj = {};
    var params = url.split('?')[1].split('&');
    params.forEach(function(param){
        param = param.split('=');
        console.log(param);
        if(param[0] != 'lat' && param[0] != 'lng') {
            console.log('***');
            res = null;
        }
        paramsObj[param[0]] = +param[1];
    });
    console.log(JSON.stringify(paramsObj));
    if(res != null) res = paramsObj;

    return res;
}

function procRequest(coordinate) {
    console.log("Coordinate: " + JSON.stringify(coordinate));
    if(!coordinate){
        return null;
    }
    res = {
        id: "0x79a9ba9bf4",
        name: "Test ATC",
        perimeter: [
            {lat: 59.89873582670883, lng: 30.264046601951126},
			{lat: 59.90170036428617, lng: 30.269991047680378},
			{lat: 59.904817626983764, lng: 30.26839211583138},
			{lat: 59.90707758975418, lng: 30.259357094764713},
			{lat: 59.90601260377334, lng: 30.256667844951153},
			{lat: 59.90298674767275, lng: 30.25417808443308},
			{lat: 59.90122941209721, lng: 30.250471271574497},
			{lat: 59.899861914715544, lng: 30.251800306141376},
			{lat: 59.90001290883071, lng: 30.258453860878944}
        ],
        drones: [
            {id: "0x8f6df6aa123", homebase: {lat: 59.903322, lng: 30.267378}, status: "AVAILABLE"},
            {id: "0x31abc5890dd", homebase: {lat: 59.900617, lng: 30.262357}, status: "AVAILABLE"},
            {id: "0xa341234bb31", homebase: {lat: 59.904850, lng: 30.258881}, status: "AVAILABLE"}
        ]
    }
    return JSON.stringify(res);
}

function f(){
    console.log('IN f()');
}

server.listen(PORT);
console.log("Listening on http://localhost:" + PORT + "/");
