'use strict';

var CHARTS = (function (chart) {


  chart.renderLine = function (chartInfo, chartInfo2, configInit) {
    var chartData = chartInfo;
    var chartData2 = chartInfo2;
    var config = configInit;
    var colors = config.colors;
    var highchart = initLine(chartData, chartData2, config.container, config);
    removeHandles(config.handles);
  }

  return chart;

  function initLine(data, data2, container, config) {
    var max;
    var min;
    var mid;
    var maxText;
    var minText;
    var midText;
    var navigatorMargin = 20;
    var navigatorHeight = 30;
    var legendItemMargin = 30;
    var spacingLeft = 40;
    var plotLinesFont = '11px';

    if (config.compact) {
      navigatorMargin = -5;
      navigatorHeight = 20;
      legendItemMargin = 10;
      plotLinesFont = '10px';
      spacingLeft = 35;
    }

    return new Highcharts.stockChart({
        chart: {
          renderTo: container,
          className: 'gg',
          spacingLeft: spacingLeft,
          spacingBottom: 0,
          events: {
            load: function () {
              this.yAxis[0].removePlotBandOrLine()


              max = this.yAxis[0].max;
              min = this.yAxis[0].min;
              mid = Math.round((max + min) / 2);

              maxText = max;
              minText = min;
              midText = Math.round((maxText + minText) / 2);


              this.yAxis[0].addPlotLine({
                value: max,
                color: config.colors.gridLines,
                dashStyle: 'dot',
                width: 1,
                label: {
                  align: 'left',
                  text: '$ ' + maxText,
                  style: {
                    fontSize: plotLinesFont,
                    color: config.colors.text
                  },
                  x: -spacingLeft,
                  y: 4
                }
              });
              this.yAxis[0].addPlotLine({
                value: mid,
                color: config.colors.gridLines,
                dashStyle: 'dot',
                width: 1,
                label: {
                  align: 'left',
                  text: '$ ' + mid,
                  style: {
                    fontSize: plotLinesFont,
                    color: config.colors.text
                  },
                  x: -spacingLeft,
                  y: 4
                }
              });
              this.yAxis[0].addPlotLine({
                value: min,
                color: config.colors.gridLines,
                dashStyle: 'dot',
                width: 1,
                label: {
                  align: 'left',
                  text: '$ ' + minText,
                  style: {
                    fontSize: plotLinesFont,
                    color: config.colors.text
                  },
                  x: -spacingLeft,
                  y: 4
                }
              });
            },
            render: function() {
             this.yAxis[0].removePlotBandOrLine()


              max = this.yAxis[0].max;
              min = this.yAxis[0].min;
              mid = Math.round((max + min) / 2);

              maxText = max;
              minText = min;
              midText = Math.round((maxText + minText) / 2);


              this.yAxis[0].addPlotLine({
                value: max,
                color: config.colors.gridLines,
                dashStyle: 'dot',
                width: 1,
                label: {
                  align: 'left',
                  text: '$ ' + maxText,
                  style: {
                    fontSize: plotLinesFont,
                    color: config.colors.text,
                  },
                  x: -spacingLeft,
                  y: 4
                }
              });
              this.yAxis[0].addPlotLine({
                value: mid,
                color: config.colors.gridLines,
                dashStyle: 'dot',
                width: 1,
                label: {
                  align: 'left',
                  text: '$ ' + mid,
                  style: {
                    fontSize: plotLinesFont,
                    color: config.colors.text,
                  },
                  x: -spacingLeft,
                  y: 4
                }
              });
              this.yAxis[0].addPlotLine({
                value: min,
                color: config.colors.gridLines,
                dashStyle: 'dot',
                width: 1,
                label: {
                  align: 'left',
                  text: '$ ' + minText,
                  style: {
                    fontSize: plotLinesFont,
                    color: config.colors.text,
                  },
                  x: -spacingLeft,
                  y: 4
                }
              });
            }
          }
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
          max: config.rangeEnd, //  end of selected range
          range: config.range,
          labels: {
            enabled: false
          }
        },
        yAxis: {
          gridLineWidth: 0,
          opposite: false,
          showLastLabel: true,
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
          enabled: true,
          align: 'left',
          padding: 10,
          itemDistance: legendItemMargin,
          itemStyle: {
            width: 90,
            fontSize: 10,
            color: config.colors.text
          },
          symbolWidth: 20,
          width: 300,
          y: 1,
          x: -10
        },
        navigator: {
          maskInside: false,
          height: navigatorHeight,
          margin: navigatorMargin, // space between plotArea and navigator
          maskFill: 'rgba(102, 133, 194, 0.1)',
          xAxis: {
            tickWidth: 0,
            lineWidth: 0,
            tickInterval: 30 * 24 * 3600 * 1000,
            gridLineWidth: 0,
            startOnTick: true,
            showFirstLabel: true,
            endOnTick: true,
            labels: {
              align: 'center',
              style: {
                  color: config.colors.text
              },
              x: 3,
              y: 15
            }
          },
          series: {
            type: 'areaspline',
            color: config.colors.navigator,
            areaspline: {
              events: {
                click: function () {
                  console.log('click');
                }
            },
            },
            fillColor : {
              linearGradient : [0, 0, 0, 300],
              stops : [
                [0, Highcharts.Color(config.colors.navigator).setOpacity(0.4).get('rgba')],
                [0.1, Highcharts.Color('#ffffff').setOpacity(0).get('rgba')],
                [1, Highcharts.Color('#ffffff').setOpacity(0).get('rgba')]
              ]
            }
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

  function removeHandles(isDisplay) {
    var $handles;
    if (!isDisplay) {
      $handles = $('.highcharts-navigator-handle');
      $handles.css('display', 'none');
    }
  }

  function correctHandles(highchart) {
    var $element = $('.highcharts-navigator-handle');
    var handles = highchart.navigator.handles;
    $($element[0]).attr({transform: 'translate(' + (handles[0].translateX - 6) + ',' + (handles[0].translateY - 29) + ') scale(0.9)'});
    $($element[1]).attr({transform: 'translate(' + (handles[1].translateX - 6) + ',' + (handles[1].translateY - 29) + ') scale(0.9)'});
  }

}(CHARTS || {}));
