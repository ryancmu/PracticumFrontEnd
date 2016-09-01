/* ------------------------------------------------------------------------------
 *
 *  # D3.js - line chart with chained transitions
 *
 *  Demo d3.js line chart setup with chained transitions and .tsv data source
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */

$(function () {

    // Create Uniform checkbox
    $(".chained").uniform({
        radioClass: 'choice',
        wrapperClass: 'border-teal'
    });

    // Initialize chart
    chainedTransitions('#d3-chained-transitions', 500);

    // Chart setup
    function chainedTransitions(element, height) {


        // Basic setup
        // ------------------------------

        // Define main variables
        var d3Container = d3.select(element),
            margin = {top: 5, right: 90, bottom: 20, left: 40},
            width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
            height = height - margin.top - margin.bottom - 5;


        // City name
        var city = "Ohio";

        // Format data
        parseDate = d3.time.format("%Y%m%d").parse;



        // Construct scales
        // ------------------------------

        // Horizontal
        var x = d3.time.scale()
            .range([0, width]);

        // Vertical
        var y = d3.scale.linear()
            .range([height, 0]);



        // Create axes
        // ------------------------------

        // Horizontal
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .ticks(6)
            .tickFormat(d3.time.format("%m-%d"));

        // Vertical
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");



        // Create chart
        // ------------------------------

        // Add SVG element
        var container = d3Container.append("svg");

        // Add SVG group
        var svg = container
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



        // Construct chart layout
        // ------------------------------

        // Line
        var line = d3.svg.line()
            .interpolate("linear")
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d[city]); });



        // Load data
        // ------------------------------

        d3.tsv("assets/data/line_transitions/lines_transitions.tsv", function(error, data) {
        //d3.tsv("assets/demo_data/d3/lines/lines_transitions.tsv", function(error, data) {

            // Pull out values
            data.forEach(function(d) {
                d.date = parseDate(d.date);
                d["Ohio"] = +d["Ohio"];
                d["California"] = +d["California"];
                d["Florida"] = +d["Florida"];
            });


            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain([data[0].date, data[data.length - 1].date]);

            // Vertical
            y.domain(d3.extent(data, function(d) { return d[city]; }));


            //
            // Append chart elements
            //

            // Add line
            svg.append("path")
                .datum(data)
                .attr("d", line)
                .attr("class", "d3-line d3-line-medium")
                .style("stroke", "#FF5722");


            // Add text
            svg.append("text")
                .datum(data[data.length - 1])
                .attr("class", "d3-city")
                .attr("transform", transform)
                .attr("x", 3)
                .attr("dy", ".35em");
                //.text(city);


            // Add tooltip
            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .html(function(d) {
                    var dt = (d.date.getMonth() + 1) + '-' + d.date.getDate() + '-' + d.date.getFullYear();
                    return 'Date: ' + dt + '<br />File Count: ' + d[city];
                });

            svg.call(tip);

            // Add points
            svg.selectAll("dot")
                .data(data)
                .enter().append("circle")
                .attr("r", 2.5)
                .attr("cx", function(d) { return x(d.date); })
                .attr("cy", function(d) { return y(d[city]); })
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide);

            // Append axes
            // ------------------------------

            // Horizontal
            svg.append("g")
                .attr("class", "d3-axis d3-axis-horizontal d3-axis-strong")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            // Vertical
            var verticalAxis = svg.append("g")
                .attr("class", "d3-axis d3-axis-vertical d3-axis-strong")
                .call(yAxis);

            // Add text label
            verticalAxis.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 10)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .style("fill", "#999")
                .style("font-size", 12)
                .text("File Numbers");


            // Transitions
            // ------------------------------

            // Do stuff on value change
            d3.selectAll(".chained").on("change", change);

            // Set timeout for auto change
            // var timeout = setTimeout(function() {
            //     d3.select("input[value=\"California\"]").property("checked", true).each(change);
            //     $.uniform.update();
            // }, 2000);

            // Change function
            function change() {
               // clearTimeout(timeout);
                city = this.value;

                // First transition the line & label to the new city.
                var t0 = svg.transition().duration(500);
                svg.selectAll("circle").remove();
                t0.selectAll(".d3-line").attr("d", line);
                t0.selectAll(".d3-city").attr("transform", transform);//.text(city);

                // Then transition the y-axis.
                y.domain(d3.extent(data, function(d) { return d[city]; }));
                var t1 = t0.transition();
                t1.selectAll(".d3-line").attr("d", line);
                t1.selectAll(".d3-city").attr("transform", transform);
                t1.selectAll(".d3-axis-vertical").call(yAxis);

                // Last transition the points
                // Add points
                // var t2 = t1.transition();
                // var t2 = t1.transition();
                svg.selectAll("dot")
                    .data(data)
                    .enter().append("circle")
                    .attr("r", 2.5)
                    .attr("cx", function(d) { return x(d.date); })
                    .attr("cy", function(d) { return y(d[city]); })
                    .on('mouseover', tip.show)
                    .on('mouseout', tip.hide);
            }

            // Transform text
            function transform(d) {
                return "translate(" + x(d.date) + "," + y(d[city]) + ")";
            }



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', resize);

            // Call function on sidebar width change
            $('.sidebar-control').on('click', resize);

            // Resize function
            //
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to
            // be updated on window resize
            function resize() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                // Layout
                // -------------------------

                // Main svg width
                container.attr("width", width + margin.left + margin.right);

                // Width of appended group
                svg.attr("width", width + margin.left + margin.right);


                // Axes
                // -------------------------

                // Horizontal range
                x.range([0, width]);

                // Horizontal axis
                svg.selectAll('.d3-axis-horizontal').call(xAxis);


                // Chart elements
                // -------------------------

                // Line path
                svg.selectAll('.d3-line').attr("d", line);

                // Text
                svg.selectAll(".d3-city").attr("transform", transform);
            }
        });
    }
});
