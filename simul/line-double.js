'use strict';

var CHARTS = (function (chart) {


  chart.renderLine = function (chartInfo, chartInfo2, configInit) {
    var chartData = chartInfo;
    var chartData2 = chartInfo2;
    var config = configInit;
    var colors = config.colors;
    var extrems = findExtremes(chartData, chartData2);
    var highchart = initLine(chartData, chartData2, config.container, extrems, config);
    removeHandles(config.handles);
  }

  return chart;

  function initLine(data, data2, container, extrems, config) {

    return new Highcharts.stockChart({
        chart: {
          renderTo: container,
          spacingLeft: 35,
          spacingTop: 0,
          spacingBottom: 0,
          marginBottom: 10
        },
        rangeSelector: {
          enabled: false
        },
        title: {
          text: '',
        },
        xAxis: {
          tickLength: 0,
          lineColor: 'transparent',
          max: new Date('2017/4/30').getTime(), //  end of selected range
          range: 30 * 24 * 3600 * 1000,
          labels: {
            enabled: false
          }
        },
        yAxis: {
          visible: config.axis,
          max: extrems.max,
          min: extrems.min,
          gridLineWidth: 0,
          opposite: false,
          showLastLabel: true,
          plotLines: [{
            value: extrems.max,
            color: config.colors.gridLines,
            dashStyle: 'dot',
            width: 1,
            label: {
              text: '$' + extrems.max,
              align: 'left',
              style: {
                color: config.colors.text,
              },
              x: -35,
              y: 4
            }
          },{
            value: extrems.tickInterval,
            color: config.colors.gridLines,
            dashStyle: 'dot',
            width: 1,
            label: {
              text: '$' + extrems.tickInterval,
              align: 'left',
              style: {
                color: config.colors.text,
              },
              x: -35,
              y: 4
            }
          },{
            value: extrems.min,
            color: config.colors.gridLines,
            dashStyle: 'dot',
            width: 1,
            label: {
              text: '$' + extrems.min,
              align: 'left',
              style: {
                color: config.colors.text,
              },
              x: -35,
              y: 4
            }
          }],
          labels: {
            enabled: false
          },
        },
        credits: {
          enabled: false
        },
        tooltip: {
          enabled: false
        },
        scrollbar: {
            enabled: false
        },
        legend: {
          enabled: config.legend,
          align: 'left',
          padding: 6,
          itemDistance: 10,
          itemStyle: {
            width: 90,
            fontSize: 10,
            color: config.colors.text
          },
          symbolWidth: 20,
          width: 260
        },
        navigator: {
          enabled: config.navigator,
          maskInside: false,
          height: 20,
          margin: 25,
          maskFill: 'rgba(102, 133, 194, 0.2)',
          yAxis: {

          },
          xAxis: {
            tickWidth: 0,
            lineWidth: 0,
            gridLineWidth: 0,
            labels: {
              align: 'center',
              style: {
                  color: '#888'
              },
              x: 3,
              y: 15
            }
          },
          series: {
            type: 'areaspline',
            fillColor : {
              linearGradient : [0, 0, 0, 300],
              stops : [
                [0, Highcharts.Color('#ccf5ff').setOpacity(1).get('rgba')],
                [0.1, Highcharts.Color('#fff').setOpacity(1).get('rgba')],
                [1, Highcharts.Color('#fff').setOpacity(1).get('rgba')]
              ]
            }
          }
        },
        plotOptions: {
          series: {
            pointInterval: 24 * 3600 * 1000, // hourly data
            enableMouseTracking: false,
            states: {
              hover: {
                enabled: false
              }
            }
          },
          line: {
            marker: {
              enabled: false
            }
          }
        },
        series: [{
            name: config.lineName,
            color: config.colors.line,
            data: data
        }, {
            name: config.lineName2,
            color: config.colors.line2,
            data: data2
        }]
    });
  }

  function findExtremes(data, data2) {
    var extrems = {};
    var filtered = [];
    var filtered2 = [];
    data.forEach(function (item, index, arr) {
      filtered.push(item[1]);
    });
    data2.forEach(function (item, index, arr) {
      filtered2.push(item[1]);
    });
    var max1 = Math.max.apply(null, filtered);
    var max2 = Math.max.apply(null, filtered2);
    var min1 = Math.min.apply(null, filtered);
    var min2 = Math.min.apply(null, filtered2);
    var max = Math.max(max1, max2);
    var min = Math.min(min1, min2);
    max = max + 20;
    min = min - 20;
    var tickInterval = Math.round((max + min) / 2);
    return extrems = {
      max: max,
      min: min,
      tickInterval: tickInterval
    };
  }

  function removeHandles(isDisplay) {
    var $handles;
    if (!isDisplay) {
      $handles = $('.highcharts-navigator-handle');
      $handles.css('display', 'none');
    }
  }

}(CHARTS || {}));



/*

  max: 300,
  opposite: false,
  showLastLabel: true,
  labels: {
    format: '${value}',
    align: 'left',
    x: -35,
    y: 4
  },
  tickInterval: 50,
  gridLineDashStyle: 'dot',
  gridLineWidth: 2,

*/