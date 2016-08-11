/* ------------------------------------------------------------------------------
 *
 *  # Vector maps
 *
 *  Specific JS code additions for maps_vector.html page
 *
 *  Version: 1.0
 *  Latest update: Aug 1, 2015
 *
 * ---------------------------------------------------------------------------- */

$(function() {

    // Country choropleth map
    $.getJSON('assets/data/malware_map/state_data.json', function (data) {

        // Year
        var val = 2009;

        // Values
        statesValues = jvm.values.apply({}, jvm.values(data.states)),
            metroPopValues = Array.prototype.concat.apply([], jvm.values(data.metro.population)),
            metroUnemplValues = Array.prototype.concat.apply([], jvm.values(data.metro.unemployment));

        // Configuration
        $('.usa_map').vectorMap({
            map: 'us_aea_en',
            backgroundColor: 'transparent',
            markerStyle: {
                initial: {
                    r: 6,
                    'fill-opacity': 0.9,
                    'stroke': '#fff',
                    'stroke-width' : 1.5,
                    'stroke-opacity': 0.95
                },
                hover: {
                    'stroke': '#fff',
                    'fill-opacity': 1,
                    'stroke-width': 1.5
                }
            },
            series: {
                regions: [{
                    scale: ['#ff9999', '#e60000'],
                    attribute: 'fill',
                    values: data.states[val],
                    normalizeFunction: 'polynomial'
                }]
            },
            onRegionLabelShow: function(event, label, code) {
                label.html(
                    ''+label.html()+'<br>'+
                    'Number: '+data.states[val][code]
                );
            }
        });

        // Draw map
        var mapObject = $('.usa_map').vectorMap('get', 'mapObject');
    });

});
