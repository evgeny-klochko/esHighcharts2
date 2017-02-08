var CHARTS = (function (chart) {
  'use strict';

  var maxRate;
  var pointWidth = 19;
  var spacing = 20;
  var growingLabelWidth = 50;

  chart.renderGistogramDividerGrowthrate = function (chartInfo, configInfo) {
    var element;
    var config = configInfo;
    var chartData = chartInfo;
    var colors = config.colors;
    maxRate = config.maxRate;
    var highchart = initGistogram(chartData, config.container, colors);
    var data = highchart.series[1].data;
    highchart.config = config;
    element = COMMON.drawBordersChart(config, highchart, element);
    highchart.element = element;
    COMMON.correctLabelsPos(highchart, config, growingLabelWidth);
    COMMON.setArrowBg(config);
  }
  return chart;

  function initGistogram(data, container, colors) {
    var bgColumns = COMMON.prepareBgColumnsArrayWithNegative(data, maxRate);
    return new Highcharts.Chart({
      chart: {
        renderTo: container,
        type: 'column',
        className: 'gistogram-divider-growthrate',
        events: {
          redraw: function () {
            this.element = COMMON.drawBordersChart(this.config, this, this.element);
            COMMON.correctLabelsPos(this, this.config, growingLabelWidth);
            COMMON.setArrowBg(this.config);
          }
        },
        marginLeft: 10,
        marginRight: 10,
        spacingTop: spacing,
        spacingBottom: spacing
      },
      title: {
        text: ''
      },
      xAxis: {
        tickLength: 0,
        lineColor: 'transparent',
        type: 'category',
        labels: {
          step: 1,
          useHTML: true,
          style: {
            color: colors.bar
          },
          formatter: function() {
            return '<div class="labels">' + this.value + '</div>';
          }
        }
      },
      yAxis: {
        gridLineWidth: 0,
        plotLines: [{
          value: 50,
          color: colors.gridLines,
          dashStyle: 'dot',
          width: 1
        },{
          value: 0,
          color: colors.gridLines,
          dashStyle: 'dot',
          width: 1,
        },{
          value: -50,
          color: colors.gridLines,
          dashStyle: 'dot',
          width: 1,
        }],
        labels: {
          enabled: false
        },
        title: {
          text: ''
        },
      },
      legend: {
          enabled: false
      },
      credits: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        column: {
          stacking: 'percent'
        }
      },
      series: [
        {
          name: 'backgroundPositive',
          className: 'column-background',
          type: 'column',
          states: {
            hover: {
              enabled: false
            }
          },
          color: colors.barBg,
          pointWidth: pointWidth,
          borderRadiusTopRight: 5,
          borderRadiusTopLeft: 5,
          borderWidth: 0,
          data: bgColumns.positive
        }, {
          name: 'backgroundNegative',
          className: 'column-background',
          type: 'column',
          states: {
            hover: {
              enabled: false
            }
          },
          color: colors.barBg,
          pointWidth: pointWidth,
          borderRadiusBottomRight: 5,
          borderRadiusBottomLeft: 5,
          borderWidth: 0,
          data: bgColumns.negative
        }, {
          name: 'columns',
          type: 'column',
          point: {
            events: {
              mouseOver: COMMON.setArrowBgOnOver,
              mouseOut: COMMON.setArrowBgOnOut
            }
          },
          color: colors.bar,
          pointWidth: pointWidth,
          borderWidth: 0,
          data: data,
          dataLabels: {
            enabled: true,
            inside: false,
            style: {
              fontSize: '12px',
              fontFamily: 'open_sanssemibold',
              color: colors.text
            },
            useHTML: true,
            formatter: function() {
              if(this.y > 0) {
                return '<span class="top arrow"><span class="label">+'
                  + this.y
                  + '%</span><span class="after"></span></span>'
              } if(this.y < 0) {
                return '<span class="bottom arrow"><span class="label">'
                  + this.y
                  + '%</span><span class="after"></span></span>'
              }
            }
          }
        }
      ]
  });
}
}(CHARTS || {}));
