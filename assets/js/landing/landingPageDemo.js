/**
 * Created by faisalshahnewaz on 8/21/16.
 */

var offsetX = document.getElementById("svgDiv").offsetWidth;
var offsetY = document.getElementById("svgDiv").offsetHeight;
var locations = [];

function viewPortValues() {
    offsetX = document.getElementById("svgDiv").offsetWidth;
    offsetY = document.getElementById("svgDiv").offsetHeight;

    locations = [[offsetX*0.06, offsetY*0.25, 1, "USA","assets/images/flags/us.png"], [offsetX*0.15, offsetY*0.4, 1, "USA","assets/images/flags/us.png"], [offsetX*0.2, offsetY*0.4, 1, "USA","assets/images/flags/us.png"], [offsetX*0.27, offsetY*0.4, 1, "USA", "assets/images/flags/us.png"], [offsetX*0.2, offsetY*0.48, 2, "Mexico","assets/images/flags/mx.png"],
        [offsetX*0.17, offsetY*0.34, 3, "Canada","assets/images/flags/ca.png"], [offsetX*0.24, offsetY*0.34, 3, "Canada","assets/images/flags/ca.png"], [offsetX*0.30, offsetY*0.32, 3, "Canada", "assets/images/flags/ca.png"],
        [offsetX*0.17, offsetY*0.34, 3, "Canada","assets/images/flags/ca.png"],
        [offsetX*0.3, offsetY*0.58, 4, "Venezuela","assets/images/flags/ve.png"],
        [offsetX*0.26, offsetY*0.64, 5, "Peru", "assets/images/flags/pe.png"],
        [offsetX*0.35, offsetY*0.64, 6, "Brazil", "assets/images/flags/br.png"], [offsetX*0.32, offsetY*0.68, 6, "Brazil", "assets/images/flags/br.png"],
        [offsetX*0.28, offsetY*0.78, 7, "Argentina", "assets/images/flags/ar.png"],
        [offsetX*0.53, offsetY*0.7, 8, "South Africa","assets/images/flags/za.png"],
        [offsetX*0.56, offsetY*0.41, 9, "Israil", "assets/images/flags/il.png"],
        [offsetX*0.61, offsetY*0.41, 10, "Iran","assets/images/flags/ir.png"],
        [offsetX*0.56, offsetY*0.37, 11, "Turkey", "assets/images/flags/tr.png"],
        [offsetX*0.52, offsetY*0.36, 12, "Romania","assets/images/flags/ro.png"],
        [offsetX*0.54, offsetY*0.33, 13, "Ukraine","assets/images/flags/ua.png"],
        [offsetX*0.49, offsetY*0.32, 14, "Germany","assets/images/flags/de.png"],
        [offsetX*0.46, offsetY*0.34, 15, "France", "assets/images/flags/fr.png"],
        [offsetX*0.44, offsetY*0.37, 16, "Spain","assets/images/flags/es.png"],
        [offsetX*0.45, offsetY*0.27, 17, "UK", "assets/images/flags/gb.png"],
        [offsetX*0.51, offsetY*0.22, 18, "Sweeden", "assets/images/flags/se.png"],
        [offsetX*0.68, offsetY*0.47, 19, "India", "assets/images/flags/in.png"],
        [offsetX*0.7, offsetY*0.39, 20, "China","assets/images/flags/cn.png"], [offsetX*0.76, offsetY*0.42, 20, "China","assets/images/flags/cn.png"], [offsetX*0.74, offsetY*0.35, 20, "China","assets/images/flags/cn.png"],
        [offsetX*0.65, offsetY*0.27, 21, "Russia","assets/images/flags/ru.png"], [offsetX*0.7, offsetY*0.3, 21, "Russia","assets/images/flags/ru.png"], [offsetX*0.75, offsetY*0.28, 21, "Russia","assets/images/flags/ru.png"], [offsetX*0.8, offsetY*0.3, 21, "Russia","assets/images/flags/ru.png"],
        [offsetX*0.815, offsetY*0.38, 22, "South Korea","assets/images/flags/kr.png"],
        [offsetX*0.85, offsetY*0.38, 23, "Japan","assets/images/flags/jp.png"],
        [offsetX*0.78, offsetY*0.6, 24, "Malaysia","assets/images/flags/my.png"],
        [offsetX*0.82, offsetY*0.71, 25, "Australia","assets/images/flags/au.png"], [offsetX*0.86, offsetY*0.67, 25, "Australia","assets/images/flags/au.png"], [offsetX*0.9, offsetY*0.74, 25, "Australia","assets/images/flags/au.png"],
        [offsetX*0.965, offsetY*0.8, 26, "New Zealand","assets/images/flags/nz.png"]

    ];

    setTimeout(viewPortValues, 100);
}



viewPortValues();

var color = ["#946746","#8f9747","#4da751","#759747","#3ac9c9", "#00b7f0","#FF8600","#603311", "#FF6103", "#FF3D0D", "#FFD700","#99CC32"];
var portNumber = [1025, 65535];
var infection = ["Trojan-Skelky","Trojan-FHNH", "JS-Nemucod","Android/Fictus.A","Generic VB.c","W32/Vbbot","W32/Spybot.bfr!IO","ZvuZona","Artemis!7AE","Exploit-SWF.x","Artemis!A857A4E","BrowseFox-FUT","W32/Spybot.bfr!","W32/Spybot.bfr!1D","W32/Spybot.bfr!KT"];
var userAgent = ["Direct Connect","Lime Wire", "Shareaza","Frost Wire", "Direct Connect","Dexter Wire", "BitRope P2P", "Direct Connect","Bear Share Turbo", "Emerald", "Direct Connect"];
var fileName = ["cam.dll", "lannetscan.exe", "GameOfThrones.exe", "Adobe.dmg", "Установка.exe", "Almost Heroes S01E08.dll", "Mount.exe", "Warcraft.exe", "FightClub.exe", "KM Player.dmg"];

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

function type3AnimationLayer1(sourceX, sourceY, endX, endY, delay, randomColor) {

    var circle = svg.append("circle")
                    .attr("cx", sourceX)
                    .attr("cy", sourceY)
                    .attr("r", 3)
                    .attr("fill", color[randomColor]);

    var line = svg.append("line")
        .attr("x1", sourceX)
        .attr("y1", sourceY)
        .attr("x2", sourceX)
        .attr("y2", sourceY)
        // .attr("stroke-dasharray", 5)
        .attr("stroke", color[randomColor])
        .attr("stroke-width", 2);

    randomDelay = Math.floor((Math.random()*(8)) + 0);

    circle.transition()
        .delay(delay*1000+randomDelay*100)
        .attr("cx", endX)
        .attr("cy", endY)
        .duration(1000)
        .each("end", function() {

            //beacon animations
            circleAnimation(40,1.5,endX, endY,0, "none", color[randomColor]);
            circleAnimation(40,1.5,endX, endY,0.2, "none", color[randomColor]);
            circleAnimation(40,1.5,endX, endY,0.4, "none", color[randomColor]);
            circleAnimation(40,1.2,endX, endY,0.3, color[randomColor],"none");

            d3.select(this).remove();
        });
}


function type3AnimationInit(location, type) {

    var staticCircle = svg.append("circle")
        .attr("cx", locations[location[0]][0])
        .attr("cy", locations[location[0]][1])
        .attr("r",3)
        .attr("fill", "#00CD00");

    circleAnimation(40,1.5,locations[location[0]][0], locations[location[0]][1], 0, "none", "#00CD00");
    circleAnimation(40,1.5,locations[location[0]][0], locations[location[0]][1], 0.2, "none", "#00CD00");
    circleAnimation(40,1.5,locations[location[0]][0], locations[location[0]][1], 0.4, "none", "#00CD00");
    circleAnimation(40,1.2,locations[location[0]][0], locations[location[0]][1], 0.3, "#00CD00","none");

    // var widthSmall = 5;
    // var X1 = locations[location[0]][0]-widthSmall;
    // var Y1 = locations[location[0]][1]+widthSmall;
    // var X2 = locations[location[0]][0]+widthSmall;
    // var Y2 = locations[location[0]][1]+widthSmall;
    // var X3 = locations[location[0]][0];
    // var Y3 = locations[location[0]][1]-widthSmall;
    //
    // svg.append("polygon")
    //     .attr("fill", "red")
    //     .attr("points",""+X1+","+Y1+","+X2+","+Y2+","+X3+","+Y3+"");

    if(type.localeCompare("type3")==0) {
        // console.log("type="+type);
        // var staticCircle1 = svg.append("circle")
        //     .attr("cx", locations[location[0]][0])
        //     .attr("cy", locations[location[0]][1])
        //     .attr("r",10)
        //     .attr("stroke", "green")
        //     .attr("stroke-width", 3)
        //     .attr("fill", "none");
        var width = 15;
        var yW = width * 0.5;
        var xW = width * 0.866;
        var x1 = locations[location[0]][0]-xW;
        var y1 = locations[location[0]][1]+yW;
        var x2 = locations[location[0]][0]+xW;
        var y2 = locations[location[0]][1]+yW;
        var x3 = locations[location[0]][0];
        var y3 = locations[location[0]][1]-width;

        svg.append("polygon")
            .attr("fill", "none")
            .attr("stroke", "#00CD00")
            .attr("stroke-width",3)
            .attr("points",""+x1+","+y1+","+x2+","+y2+","+x3+","+y3+"");
    }

    for(var i=1; i<location.length;i++) {
        var randomValue = Math.floor((Math.random()*(4)) + 3);
        for(j=1; j<=randomValue; j++) {
            type3AnimationLayer1(locations[location[0]][0], locations[location[0]][1], locations[location[i]][0], locations[location[i]][1], j/2, 1);
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

function circleShotAnimation(startX, startY, endX, endY, randomColor, locations1, type) {

    var myCircle1 = svg.append("circle")
        .attr("cx",startX)
        .attr("cy",startY)
        .attr("r",4)
        .attr("fill",color[randomColor])
    var myCircle2 = svg.append("circle")
        .attr("cx",startX)
        .attr("cy",startY)
        .attr("r",3)
        .attr("fill",color[randomColor])
    var myCircle3 = svg.append("circle")
        .attr("cx",startX)
        .attr("cy",startY)
        .attr("r",2)
        .attr("fill",color[randomColor])
    var myCircle4 = svg.append("circle")
        .attr("cx",startX)
        .attr("cy",startY)
        .attr("r",1)
        .attr("fill",color[randomColor])


    var strokeWidth = Math.floor((Math.random()*3) + 1);
    // var lineColor = "#00b7f0";
    var lineColor = color[randomColor];
    if(type.localeCompare("type1")==0) {
        lineColor = color[randomColor];
    }
    var line = svg.append("line")
        .attr("x1", startX)
        .attr("y1", startY)
        .attr("x2", startX)
        .attr("y2", startY)
        // .attr("stroke-dasharray", 5)
        .attr("stroke", lineColor)
        .attr("stroke-width", strokeWidth);


    var distance = Math.sqrt( Math.pow((startX - endX), 2) + Math.pow((startY - endY), 2) );
    var speed = 170;
    var duration = distance/speed;

    myCircle1.transition()
        .attr("cx", endX)
        .attr("cy", endY)
        .duration(duration*1000)
        .each("end", function() {

            //beacon animations
            circleAnimation(40,1.5,endX, endY,0, "none", color[randomColor]);
            circleAnimation(40,1.5,endX, endY,0.2, "none", color[randomColor]);
            circleAnimation(40,1.5,endX, endY,0.4, "none", color[randomColor]);
            circleAnimation(40,1.2,endX, endY,0.3, color[randomColor],"none");

            d3.select(this).remove();

            //trigger the next one
            if(locations1.length > 1) {
                for(var i=1; i<locations1.length; i++) {
                    circleShotAnimation(locations[locations1[0]][0], locations[locations1[0]][1],
                        locations[locations1[i][0]][0], locations[locations1[i][0]][1], randomColor, locations1[i], type);
                }
            }

        });

    line.transition()
        .delay(150)
        .attr("x2", endX)
        .attr("y2", endY)
        .duration(duration*1000)
        .each("end", function() {
            if(type.localeCompare("type1")==0) {
                tempCount++;
            }

            var staticCircle = svg.append("circle")
                .attr("cx", endX)
                .attr("cy", endY)
                .attr("r",3)
                .attr("fill", "red");
            console.log("tempCount="+tempCount+" totalCount="+totalLocationcount);
            if(tempCount === totalLocationcount) {

                line.transition()
                    .delay(2500)
                    .each("end", function() {
                        console.log("temp count");
                        if(type.localeCompare("type1")==0) {
                            console.log("temp count type1");
                            svg.selectAll("line").remove();
                            svg.selectAll("circle").remove();
                            svg.selectAll("polygon").remove();
                            svg.selectAll("rect").remove();
                            start();
                        }
                    });

            }

        });

    myCircle2.transition()
        .delay(0.02*1000)
        .attr("cx", endX)
        .attr("cy", endY)
        .duration(duration*1000)
        .each("end", function() {
            d3.select(this).remove();
        });

    myCircle3.transition()
        .delay(0.03*1000)
        .attr("cx", endX)
        .attr("cy", endY)
        .duration(duration*1000)
        .each("end", function() {
            d3.select(this).remove();
        });

    myCircle4.transition()
        .delay(0.035*1000)
        .attr("cx", endX)
        .attr("cy", endY)
        .duration(duration*1000)
        .each("end", function() {
            d3.select(this).remove();
        });


}

var locations1 = [[0],
    [[1],
        [[2],
            [3],[6],[7]
        ],
        [[4],
            [9],[10],[12],[13]
        ]
    ],
    [[8],
        [22],
        [[23],
            [20],[24]
        ]
    ]
];

var type2Locations1 =   [[29],
                            [19],[15],[25],[26],[27],[32],[33]
                        ];

var type3Locations1 = [[14],[11],[35],[37],[38]];

var locations2 = [[18],
    [[15],
        [25]
    ],
    [17],[19],
    [[20],
        [23],[24]
    ],
    [21], [22],
    [[29],
        [26],[31],[16],
        [[28],
            [27],[33]
        ]
    ]
];

var type2Locations2 =   [[9],
                            [10],[11],[12],[13],[4],[8],[3]
                        ];

var locations3 = [[30],
    [[22],
        [8],[3],[1],[10],[11]
    ],
    [23],[16],[36],[25],[38]
];

var locations4 = [[26],
    [25],[36],[38],[15],[18],[22],[23],[1],[2],[3],[4],[8],[6]
];

var locations5 = [[28],
    [[26],
        [16],[25]
    ],
    [[27],
        [36],[37]
    ],
    [[19],
        [[22],
            [7],[3],[9],[11]
        ],
        [15]
    ]
];
var locations6 = [[3],
    [4],[1],[8],[6],[7],[10],[11],[12],[21],[16],[36]
];

var locations7 = [[14],
    [9],[10],[13],
    [[3],[4],[1],[8]],
    [[22],[23],[19],[15]],
    [[25],[16],[29],[28],[27],[35]],
    [34],[36]
];

var locations8 = [[14],
    [15],[18],[20],[21],
    [[22],
        [35],[39],[2],[7]
    ],
    [16],[30],[26],
    [[27],
        [25],[29],[31],[32],[34]
    ]
];

var locations9 = [[25],
    [19],[20],[22],[29],[30],[31],
    [[27],
        [35],[39]
    ]
];

var locations10 = [[27],
    [25],[26],[31],[34],[36],[37],[7],
    [[3],
        [14],[20],[22]
    ],
    [[4],
        [13],[12],[11]
    ]
];

var locationArray = [locations2];
var type2LocationArray = [type2Locations2];
var type3LocationArray = [type3Locations1];


var tempCount = 0;
function combineAnimation(locations1, type) {
    // console.log("type="+type);
    if(type.localeCompare("type1")==0) {
        totalLocationcount = 0;
    }

    if(type.localeCompare("type1")==0) {
        // console.log("type="+type);
        totalCountofLocation(locations1);
    }
    if(type.localeCompare("type1")==0) {
        tempCount = 1;
    }


    var staticCircle = svg.append("circle")
        .attr("cx", locations[locations1[0]][0])
        .attr("cy", locations[locations1[0]][1])
        .attr("r",3)
        .attr("fill", "red");

    if(type.localeCompare("type1")==0) {
        // console.log(type);
        staticCircle.attr("fill","red");
        // console.log("type="+type);
        var staticCircle1 = svg.append("circle")
            .attr("cx", locations[locations1[0]][0])
            .attr("cy", locations[locations1[0]][1])
            .attr("r",10)
            .attr("stroke", "red")
            .attr("stroke-width", 3)
            .attr("fill", "none");

        circleAnimation(40,1.5,locations[locations1[0]][0], locations[locations1[0]][1], 0, "none", "red");
        circleAnimation(40,1.5,locations[locations1[0]][0], locations[locations1[0]][1], 0.2, "none", "red");
        circleAnimation(40,1.5,locations[locations1[0]][0], locations[locations1[0]][1], 0.4, "none", "red");
        circleAnimation(40,1.2,locations[locations1[0]][0], locations[locations1[0]][1], 0.3, "red","none");
    }

    if(type.localeCompare("type2")==0) {
        // console.log(type);
        staticCircle.attr("fill","#FCD116");

        svg.append("rect")
            .attr("fill", "none")
            .attr("stroke", "#FCD116")
            .attr("stroke-width",3)
            .attr("x", locations[locations1[0]][0]-9)
            .attr("y", locations[locations1[0]][1]-9)
            .attr("width", 18)
            .attr("height", 18);

        circleAnimation(40,1.5,locations[locations1[0]][0], locations[locations1[0]][1], 0, "none", "#FCD116");
        circleAnimation(40,1.5,locations[locations1[0]][0], locations[locations1[0]][1], 0.2, "none", "#FCD116");
        circleAnimation(40,1.5,locations[locations1[0]][0], locations[locations1[0]][1], 0.4, "none", "#FCD116");
        circleAnimation(40,1.2,locations[locations1[0]][0], locations[locations1[0]][1], 0.3, "#FCD116","none");
    }



    if(type.localeCompare("type1")==0) {
        document.getElementById("SourceValue").innerHTML = "";
        document.getElementById("Flag").style.backgroundImage = "url('"+ locations[locations1[0]][4] +"')";
        document.getElementById("InfectionValue").innerHTML = "";
        document.getElementById("UserAgentValue").innerHTML = "";
        document.getElementById("PortValue").innerHTML = "";

        var randomInfection = Math.floor((Math.random()*(infection.length-1)) + 0);
        var randomUserAgent = Math.floor((Math.random()*(userAgent.length-1)) + 0);
        var randomPortNumber = Math.floor((Math.random()*(portNumber[1])) + portNumber[0]);

        digitalText(locations[locations1[0]][3], "SourceValue", 50);
        digitalText(infection[randomInfection], "InfectionValue", (locations[locations1[0]][3].length*70+50));
        digitalText(userAgent[randomUserAgent], "UserAgentValue", (locations[locations1[0]][3].length*70+"Trojan".length*70+50+50));
        digitalText(randomPortNumber+"", "PortValue", (locations[locations1[0]][3].length*70+"Trojan".length*70+"Direct Connect".length*70+50+50+50));

    }

    for(var i=1; i<locations1.length; i++) {
        var randomColor = Math.floor((Math.random()*(color.length)) + 0);
        circleShotAnimation(locations[locations1[0]][0], locations[locations1[0]][1],
            locations[locations1[i][0]][0], locations[locations1[i][0]][1], randomColor, locations1[i], type);
    }
}

var totalLocationcount = 0;
function totalCountofLocation(location) {
    for(var i=0; i<location.length; i++) {
        if(location.length==1) {
            totalLocationcount++;

        } else if(location.length>1) {
            totalCountofLocation(location[i]);
        }
    }
}

function init() {
    var randomLocation = Math.floor((Math.random()*(locationArray.length)) + 0);

    combineAnimation(locationArray[randomLocation], "type1");
    combineAnimation(type2LocationArray[randomLocation], "type2");
    type3AnimationInit(type3LocationArray[randomLocation], "type3");
}
function start() {
    setTimeout(init, 500);
}

function digitalText(text, element, delay)
{
    var textScroller = document.getElementById(element);

    for(c = 0; c < text.length; c++)
    {
        setTimeout(element+".innerHTML += '" + text[c] + "'", delay + c*70);
    }
}

function tableTicker() {
    $(function() {
        $('#tableData').vTicker('init', {
            speed: 300,
            pause: 500,
            showItems: 4,
            padding: 5

        });
    });
}


    display_c();
    seeLocations(locations);
    start();
    // digitalText("United States", "SourceValue");
    tableTicker();
