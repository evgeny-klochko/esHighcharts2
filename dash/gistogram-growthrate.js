var CHARTS = (function (chart) {
  'use strict';
  var maxRate;
  var pointWidth = 19;
  var growingLabelWidth = 50;

  chart.renderGistogramGrowthrate = function (chartInfo, configInfo) {
    var config = configInfo;
    var chartData = chartInfo;
    var colors = config.colors;
    maxRate = config.maxRate;
    var highchart = initGistogram(chartData, config, colors);
    var data = highchart.series[1].data;
    highchart.config = config;
    COMMON.drawBackgroundGradient(highchart, config);
    COMMON.correctLabelsPos(highchart, config, growingLabelWidth);
    COMMON.setArrowBg(config);
  }

  return chart;

  function initGistogram(data, config, colors) {
    var bgColumnArray = COMMON.prepareBgColumnsArrayWithNegative(data, maxRate);

    return new Highcharts.Chart({
      chart: {
        renderTo: config.container,
        type: 'column',
        className: 'gistogram-growthrate',
        events: {
          redraw: function () {
            COMMON.drawBackgroundGradient(this, this.config);
            COMMON.correctLabelsPos(this, this.config, growingLabelWidth);
            COMMON.setArrowBg(this.config);
          }
        },
        marginLeft: 0,
        marginRight: 0,
        spacingTop: 20,
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
          text: null
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
          color: '#fff',
          pointWidth: pointWidth,
          borderRadiusTopRight: 5,
          borderRadiusTopLeft: 5,
          borderWidth: 0,
          data: bgColumnArray.positive
        }, {
          name: 'backgroundNegative',
          className: 'column-background',
          type: 'column',
          color: '#fff',
          pointWidth: pointWidth,
          borderRadiusBottomRight: 5,
          borderRadiusBottomLeft: 5,
          borderWidth: 0,
          data: bgColumnArray.negative
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
              if (this.y > 0) {
                return '<span class="top arrow"><span class="label">+' + this.y + '%</span><span class="after"></span></span>'
              } if (this.y < 0) {
                return '<span class="bottom arrow"><span class="label">' + this.y + '%</span><span class="after"></span></span>'
              }
            }
          }
        }
      ]
    });
  }
}(CHARTS || {}));
