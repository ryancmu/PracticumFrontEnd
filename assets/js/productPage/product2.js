/**
 * Created by faisalshahnewaz on 8/21/16.
 */

var offsetX;
var offsetY;
var locations = [];

function viewPortValues() {
    offsetX = document.getElementById("svgDiv").offsetWidth;
    offsetY = document.getElementById("svgDiv").offsetHeight;

    locations = [[offsetX*0.06, offsetY*0.25, 1, "USA_", "assets/images/Product2/Flag/USA.png"], [offsetX*0.15, offsetY*0.4, 1, "USA1", "assets/images/Product2/Flag/USA.png"], [offsetX*0.2, offsetY*0.4, 1, "USA", "assets/images/Product2/Flag/USA.png"], [offsetX*0.27, offsetY*0.4, 1, "USA2", "assets/images/Product2/Flag/USA.png"], [offsetX*0.2, offsetY*0.48, 2, "Mexico"],
        [offsetX*0.17, offsetY*0.34, 3, "Canada_"], [offsetX*0.24, offsetY*0.34, 3, "Canada"], [offsetX*0.30, offsetY*0.32, 3, "Canada_"],
        [offsetX*0.17, offsetY*0.34, 3, "Canada_"],
        [offsetX*0.3, offsetY*0.58, 4, "Venezuela"],
        [offsetX*0.26, offsetY*0.64, 5, "Peru"],
        [offsetX*0.35, offsetY*0.64, 6, "Brazil"], [offsetX*0.32, offsetY*0.68, 6, "Brazil"],
        [offsetX*0.28, offsetY*0.78, 7, "Argentina"],
        [offsetX*0.53, offsetY*0.7, 8, "South Africa"],
        [offsetX*0.56, offsetY*0.41, 9, "Israil"],
        [offsetX*0.61, offsetY*0.41, 10, "Iran"],
        [offsetX*0.56, offsetY*0.37, 11, "Turkey", "assets/images/Product2/Flag/Bulgaria.png"],
        [offsetX*0.52, offsetY*0.36, 12, "Romania", "assets/images/Product2/Flag/Hungary.png"],
        [offsetX*0.54, offsetY*0.33, 13, "Ukraine"],
        [offsetX*0.49, offsetY*0.32, 14, "Germany"],
        [offsetX*0.46, offsetY*0.34, 15, "France"],
        [offsetX*0.44, offsetY*0.37, 16, "Spain"],
        [offsetX*0.45, offsetY*0.27, 17, "UK"],
        [offsetX*0.51, offsetY*0.22, 18, "Sweeden"],
        [offsetX*0.68, offsetY*0.47, 19, "India"],
        [offsetX*0.7, offsetY*0.39, 20, "China_"], [offsetX*0.76, offsetY*0.42, 20, "China"], [offsetX*0.74, offsetY*0.35, 20, "China_"],
        [offsetX*0.65, offsetY*0.27, 21, "Russia1","assets/images/Product2/Flag/Russia.png"], [offsetX*0.7, offsetY*0.3, 21, "Russia2", "assets/images/Product2/Flag/Russia.png"], [offsetX*0.75, offsetY*0.28, 21, "Russia", "assets/images/Product2/Flag/Russia.png"], [offsetX*0.8, offsetY*0.3, 21, "Russia_", "assets/images/Product2/Flag/Russia.png"],
        [offsetX*0.815, offsetY*0.38, 22, "South Korea"],
        [offsetX*0.85, offsetY*0.38, 23, "Japan"],
        [offsetX*0.78, offsetY*0.6, 24, "Malaysia"],
        [offsetX*0.82, offsetY*0.71, 25, "Australia_"], [offsetX*0.86, offsetY*0.67, 25, "Australia"], [offsetX*0.9, offsetY*0.74, 25, "Australia_"],
        [offsetX*0.965, offsetY*0.8, 26, "New Zealand"]

    ];

    setTimeout(viewPortValues, 100);
}

var locationCountry = ["USA", "USA1", "USA2", "Russia", "Russia1", "Russia2", "Romania" ,"Turkey"];



var color = ["#946746","#8f9747","#4da751","#759747","#3ac9c9"];


var svg = d3.select("#svgDiv")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

function seeLocations(locations) {

    for(i=0; i<locations.length; i++) {
        var myCircle = svg.append("circle")
            .attr("cx",locations[i][0])
            .attr("cy",locations[i][1])
            .attr("r",5)
            .attr("fill", "red")
            .attr("opacity",1);

        var text = svg.append("text")
            .attr("x", locations[i][0])
            .attr("y", locations[i][1])
            .style("fill", "white")
            .text(i);
    }
}

    function FlagSet() {

        d3.selectAll("image").remove();

        for (var i = 0; i < locationCountry.length; i++) {
            for (var j = 0; j < locations.length; j++) {
                if (locations[j][3] == locationCountry[i]) {
                    var flag = svg.append("image")
                        .attr("xlink:href", locations[j][4])
                        .attr("width", 20)
                        .attr("height", 20)
                        .attr("x", locations[j][0] - 10)
                        .attr("y", locations[j][1] - 10);
                }
            }
        }
    }

    function circleAnimation(finalRadius, duration_sec, locationX, locationY, delay_sec, fill_color, stroke_color) {
        var myCircle = svg.append("circle")
            .attr("cx",locationX)
            .attr("cy",locationY)
            .attr("r",0)
            .attr("fill", fill_color)
            .attr("stroke", stroke_color)
            .attr("stroke-width",4)
            .attr("opacity",1);

        myCircle.transition()
            .delay(delay_sec*1000)
            .attr("r",finalRadius)
            .duration(duration_sec*1000)
            .attr("opacity",0)
            .duration(duration_sec*1000)
            .each("end",function() {
                d3.select(this).remove();
            });
    }


    function combineAnimation(locationsX, locationsY) {

        var circleRadious = offsetY * 0.06;

        circleAnimation(circleRadious,1.5,locationsX, locationsY, 0, "none", "#ff0000");
        circleAnimation(circleRadious,1.5,locationsX, locationsY, 0.2, "none", "#ff0000");
        circleAnimation(circleRadious,1.5,locationsX, locationsY, 0.4, "none", "#ff0000");
        circleAnimation(circleRadious,1.2,locationsX, locationsY, 0.3, "#ff0000","none");

    }

    function start() {

        for(var i=0; i<locationCountry.length; i++) {
            for(var j=0; j<locations.length; j++) {
                if(locations[j][3]==locationCountry[i]) {
                    combineAnimation(locations[j][0], locations[j][1]);
                }
            }

        }
        setTimeout(start, 2000);
    }

    viewPortValues();
    setTimeout(FlagSet, 200);
    setTimeout(start, 200);
