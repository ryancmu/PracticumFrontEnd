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

            var basic_pie_filetype = ec.init(document.getElementById('basic_pie_filetype'), limitless);
            var basic_pie_infection = ec.init(document.getElementById('basic_pie_infection'), shine);

            // Charts setup
            // ------------------------------

            //
            // Basic pie options
            //

            basic_pie_filetype_options = {

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
                        {value: 6435, name: 'exe'},
                        {value: 2102, name: 'zip'},
                        {value: 1911, name: 'dll'},
                        {value: 1012, name: 'rar'},
                        {value: 563, name: 'VBS'}
                    ]
                }]
            };

            basic_pie_infection_options = {

                // Add title
                title: {
                    text: 'Infection Percentage (Top 5)',
                    x: 'center'
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
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
                                    max: 122127
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

            };

            // Apply options
            // ------------------------------

            basic_pie_filetype.setOption(basic_pie_filetype_options);
            basic_pie_infection.setOption(basic_pie_infection_options);


            // Resize charts
            // ------------------------------

            window.onresize = function () {
                setTimeout(function (){
                    basic_pie_filetype.resize();
                    basic_pie_infection.resize();
                }, 200);
            }
        }
    );
});
