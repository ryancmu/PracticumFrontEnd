/* ------------------------------------------------------------------------------
 *
 *  # Echarts - pies and donuts
 *
 *  Pies and donuts chart configurations
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */

$(function () {

    // Set paths
    // ------------------------------

    require.config({
        paths: {
            echarts: 'assets/js/plugins/visualization/echarts'
        }
    });


    // Configuration
    // ------------------------------

    require(
        [
            'echarts',
            'echarts/theme/limitless',
            'echarts/theme/shine',
            'echarts/chart/pie',
            'echarts/chart/funnel'
        ],


        // Charts setup
        function (ec, limitless, shine) {


            // Initialize charts
            // ------------------------------

            //var basic_pie_filetype = ec.init(document.getElementById('basic_pie_filetype'), limitless);
            var basic_pie_infection = ec.init(document.getElementById('basic_pie_infection'), shine);
            // var nested_pie = ec.init(document.getElementById('nested_pie'), limitless);
            // var infographic_donut = ec.init(document.getElementById('infographic_donut'), limitless);
            // var rose_diagram_hidden = ec.init(document.getElementById('rose_diagram_hidden'), limitless);
            // var rose_diagram_visible = ec.init(document.getElementById('rose_diagram_visible'), limitless);
            // var lasagna_donut = ec.init(document.getElementById('lasagna_donut'), limitless);
            // var pie_timeline = ec.init(document.getElementById('pie_timeline'), limitless);
            // var multiple_donuts = ec.init(document.getElementById('multiple_donuts'), limitless);


            // Charts setup
            // ------------------------------

            //
            // Basic pie options
            //


            basic_pie_infection_options = {

                // Add title
                title: {
                    text: 'Infection Percentage (Top 5)',
                    // subtext: 'Open source information',
                    x: 'center'
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['BackDoor', 'GenericR', 'W32/HLLP', 'W32/Sality', 'Generic BackDoor']
                },

                // Display toolbox
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        dataView: {
                            show: true,
                            readOnly: false,
                            title: 'View data',
                            lang: ['View chart data', 'Close', 'Update']
                        },
                        magicType: {
                            show: true,
                            title: {
                                pie: 'Switch to pies',
                                funnel: 'Switch to funnel',
                            },
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    y: '20%',
                                    width: '50%',
                                    height: '70%',
                                    funnelAlign: 'left',
                                    max: 1221527
                                }
                            }
                        },
                        restore: {
                            show: true,
                            title: 'Restore'
                        },
                        saveAsImage: {
                            show: true,
                            title: 'Same as image',
                            lang: ['Save']
                        }
                    }
                },

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [{
                    name: 'Protocol',
                    type: 'pie',
                    radius: '60%',
                    center: ['50%', '57.5%'],
                    data: [
                        {value: 15221, name: 'BackDoor'},
                        {value: 704, name: 'GenericR'},
                        {value: 643, name: 'W32/HLLP'},
                        {value: 561, name: 'W32/Sality'},
                        {value: 354, name: 'Generic BackDoor'}
                    ]
                }]
            };

            // Apply options
            // ------------------------------


            basic_pie_infection.setOption(basic_pie_infection_options);


            // Resize charts
            // ------------------------------

            window.onresize = function () {
                setTimeout(function (){
                    basic_pie_infection.resize();
                }, 200);
            }
        }
    );
});
