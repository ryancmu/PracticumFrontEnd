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
            var connect_pie = ec.init(document.getElementById('connect_pie'), limitless);
            var connect_column = ec.init(document.getElementById('connect_column'), limitless);

            // Pie options
            connect_pie_options = {

                // Add title
                title: {
                    text: 'Top 6 file type',
                    textStyle: {fontSize: 20},
                    // subtext: 'Open source data',
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
                    textStyle: {fontSize: 15},
                    data: ['zip','exe','dll','rar','msi', 'other']
                },

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [{
                    name: 'File Type',
                    type: 'pie',
                    radius: '75%',
                    center: ['50%', '57.5%'],
                    data: [
                        {value: 1253, name: 'zip'},
                        {value: 5817, name: 'exe'},
                        {value: 929, name: 'dll'},
                        {value: 374, name: 'rar'},
                        {value: 219, name: 'msi'},
                        {value: 271, name: 'other'}
                    ],
                }]
            };

            // Column options
            connect_column_options = {

                // Setup grid
                grid: {
                    x: 40,
                    x2: 47,
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
                    data: ['zip','exe','dll','rar','msi', 'other']
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
                    data: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    splitArea: {show: true}
                }],

                // Add series
                series: [
                    {
                        name: 'zip',
                        type: 'bar',
                        stack: 'Total',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: 'exe',
                        type: 'bar',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'dll',
                        type: 'bar',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'rar',
                        type: 'bar',
                        stack: 'Total',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'msi',
                        type: 'bar',
                        stack: 'Total',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    },
                    {
                        name: 'other',
                        type: 'bar',
                        stack: 'Total',
                        data: [120, 932, 901, 643, 145, 122, 420]
                    }
                ]
            };

            // Connect charts
            connect_pie.connect(connect_column);
            connect_column.connect(connect_pie);

            // Apply options
            // ------------------------------
            connect_pie.setOption(connect_pie_options);
            connect_column.setOption(connect_column_options);

            // Resize charts
            // ------------------------------
            window.onresize = function () {
                setTimeout(function (){
                    connect_pie.resize();
                    connect_column.resize();
                }, 200);
            }
        }
    );
});
