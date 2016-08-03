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

            var basic_pie_type = ec.init(document.getElementById('basic_pie_type'), limitless);
            var basic_pie_protocol = ec.init(document.getElementById('basic_pie_protocol'), shine);
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

            basic_pie_type_options = {

                // Add title
                title: {
                    text: 'File Type Percentage (Top 5)',
                    // subtext: 'Open source information',
                    x: 'center'
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)",
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['exe', 'zip', 'dll', 'rar', 'VBS']
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
                                    max: 6606435
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
                    name: 'Type',
                    type: 'pie',
                    radius: '60%',
                    center: ['50%', '57.5%'],
                    data: [
                        {value: 6606435, name: 'exe'},
                        {value: 2962102, name: 'zip'},
                        {value: 219115, name: 'dll'},
                        {value: 51100, name: 'rar'},
                        {value: 21563, name: 'VBS'}
                    ]
                }]
            };

            basic_pie_protocol_options = {

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
                        {value: 1221527, name: 'BackDoor'},
                        {value: 1004587, name: 'GenericR'},
                        {value: 406533, name: 'W32/HLLP'},
                        {value: 369860, name: 'W32/Sality'},
                        {value: 354955, name: 'Generic BackDoor'}
                    ]
                }]
            };

            // Apply options
            // ------------------------------

            basic_pie_type.setOption(basic_pie_type_options);
            basic_pie_protocol.setOption(basic_pie_protocol_options);


            // Resize charts
            // ------------------------------

            window.onresize = function () {
                setTimeout(function (){
                    basic_pie_type.resize();
                    basic_pie_protocol.resize();
                }, 200);
            }
        }
    );
});
