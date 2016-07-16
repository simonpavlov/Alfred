contract TestATC {
    struct Point {
        int lat;
        int lon;
    }

    Point[] areaPolygon;

    function area(uint _ix) constant returns (int, int)
    { return (areaPolygon[_ix].lat, areaPolygon[_ix].lon)}

    string public name = "Simple ATC";

    function TestContract() {
        areaPolygon.push(Point(1,2));
        areaPolygon.push(Point(-3,4));
    }
}
