
var data = [4, 1, 6, 2, 8, 9];
var body = d3.select("body")
    .selectAll("p")
    .data(data)
    .enter()
    .append("p")
    .text(function(d) { return d + " "; });
