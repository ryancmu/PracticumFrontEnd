/**
 * Created by Zhijie on 8/24/16.
 */
$(document).ready(function () {
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
            var line = ec.init(document.getElementById('p4detailline'), limitless);

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

                title : {
                    text: '',
                },

                // Add tooltip
                tooltip : {
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
                    show : true,
                    orient: 'vertical',
                    x: 'right',
                    y: 35,
                    feature : {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        magicType : {
                            show: true,
                            title: {
                                line: 'Switch to line chart',
                                bar: 'Switch to bar chart'
                            },
                            type: ['line', 'bar']
                        },
                        restore : {
                            show: true,
                            title: 'Restore'
                        },
                        saveAsImage : {
                            show: true,
                            title: 'Same as image'
                        }
                    }
                },

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['2015.10','2015.11','2015.12','2016.01','2016.02','2016.03','2016.04','2016.05','2016.06','2016.07','2016.08','2016.09']
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
                        data: [44666, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    },
                    {
                        name: 'SHA1',
                        type: 'line',
//												stack: 'Total',
                        data: [2970, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    },
                    {
                        name: 'File Names',
                        type: 'line',
//												stack: 'Total',
                        data: [2971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    },
                    {
                        name: 'Infection Types',
                        type: 'line',
//												stack: 'Total',
                        data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    }
                ]
            };

            // Apply options
            // ------------------------------
            line.setOption(connect_column_options);

            // Resize charts
            // ------------------------------
            window.onresize = function () {
                setTimeout(function (){
                    line.resize();
                }, 200);
            }
        }

    );
});
