'use strict';

var CHARTS = (function (chart) {


  chart.renderSmallLine = function (chartInfo, chartInfo2, configInit, container) {
    var chartData = chartInfo;
    var chartData2 = chartInfo2;
    var config = configInit;
    var colors = config.colors;
    var highchart = initLine(chartData, chartData2, config, container);
  }

  return chart;

  function initLine(data, data2, config, container) {

    return new Highcharts.stockChart({
        chart: {
          renderTo: container,
          spacingLeft: 5,
          spacingRight: 5,
          spacingTop: 5,
          spacingBottom: 5
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
          labels: {
            enabled: false
          }
        },
        yAxis: {
          visible: false,
          gridLineWidth: 0,
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
            enabled: false,
            liveRedraw: false
        },
        legend: {
          enabled: false
        },
        navigator: {
          enabled: false,
          yAxis: {

          },
          xAxis: {
            tickWidth: 0,
            lineWidth: 0,
            gridLineWidth: 0
          }
        },
        plotOptions: {
          series: {
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
}(CHARTS || {}));
