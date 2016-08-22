/* ------------------------------------------------------------------------------
 *
 *  # Echarts - chart combinations
 *
 *  Chart combination configurations
 *
 *  Author: Zhijie
 *  Version: 1.0
 *  Latest update: August 19, 2016
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
        // Add necessary charts
        [
            'echarts',
            'echarts/theme/limitless',
            'echarts/chart/line',
            'echarts/chart/bar',
            'echarts/chart/pie',

            'echarts/chart/scatter',
            'echarts/chart/k',
            'echarts/chart/radar',
            'echarts/chart/gauge'
        ],

        // Charts setup
        function (ec, limitless) {
            // Initialize charts
            // ------------------------------
            var connect_column = ec.init(document.getElementById('connect_column'), limitless);

            // Column options
            connect_column_options = {
                // Setup grid
                // grid: {
                //     x: 40,
                //     x2: 47,
                //     y: 35,
                //     y2: 25
                // },
                grid: {
                    x: 54,
                    x2: 55,
                    y: 35,
                    y2: 25
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                // Add legend
                legend: {
                    textStyle: {fontSize: 15},
                    data: ['Count','SHA1','File Names','Infection Types']
                },

                // Add toolbox
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    x: 'right',
                    y: 35,
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        magicType: {
                            show: true,
                            title: {
                                line: 'Switch to line chart',
                                bar: 'Switch to bar chart',
                                stack: 'Switch to stack',
                                tiled: 'Switch to tiled'
                            },
                            type: ['line', 'bar', 'stack', 'tiled']
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

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['2015.09','2015.10','2015.11','2015.12','2016.01','2016.02','2016.03','2016.04','2016.05','2016.06','2016.07','2016.08']
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    splitArea: {show: true}
                }],

                // Add series
                series: [
                    {
                        name: 'Count',
                        type: 'line',
                        stack: 'Total',
                        data: [0, 24352, 257822, 71489, 64443, 82552, 21364, 0, 0, 0, 0, 0]
                    },
                    {
                        name: 'SHA1',
                        type: 'line',
                        stack: 'Total',
                        data: [0, 13397, 19966, 19241, 17656, 20460, 14305, 0, 0, 0, 0, 0]
                    },
                    {
                        name: 'File Names',
                        type: 'line',
                        stack: 'Total',
                        data: [0, 13397, 19966, 19241, 17656, 20460, 14305, 0, 0, 0, 0, 0]
                    },
                    {
                        name: 'Infection Types',
                        type: 'line',
                        stack: 'Total',
                        data: [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
                    },

                ]
            };

            // Connect charts
            // connect_column.connect(connect_pie);
            // connect_column.connect(connect_column2);
            // connect_column2.connect(connect_column);

            // Apply options
            // ------------------------------
            connect_column.setOption(connect_column_options);

            // Resize charts
            // ------------------------------
            window.onresize = function () {
                setTimeout(function (){
                    connect_column.resize();
                }, 200);
            }
        }
    );
});
