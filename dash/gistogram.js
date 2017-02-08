var CHARTS = (function (chart) {
  'use strict';

  var maxRate;
  var pointWidth = 19;
  var plotLinesWidth = 1;
  var growingLabelWidth = 50;

  chart.renderGistogram = function (chartInfo, configInfo) {
    var config = configInfo;
    var chartData = chartInfo;
    maxRate = config.maxRate;
    var highchart = initGistogram(chartData, config.container, config.colors);
    var data = highchart.series[1].data;
    highchart.config = config;

    if (config.background !== false) {
      COMMON.drawBackgroundGradient(highchart, config);
    }

    COMMON.correctLabelsPos(highchart, config, growingLabelWidth);
  }

  return chart;

  function initGistogram(data, container, colors) {
    var bgColumnArray = COMMON.prepareBgColumnsArrayDelta(data, maxRate);

    return new Highcharts.Chart({
      chart: {
        renderTo: container,
        type: 'column',
        className: 'gistogram',
        events: {
          redraw: function () {
            if (this.config.background !== false) {
              COMMON.drawBackgroundGradient(this, this.config);
            }
            COMMON.correctLabelsPos(this, this.config, growingLabelWidth);
          }
        },
        marginLeft: 0,
        marginRight: 0,
        spacingTop: 20,
        spacingBottom: 20
      },
      title: {
          text: ''
      },
      xAxis: {
        tickLength: 37,
        tickWidth: plotLinesWidth,
        tickColor: colors.gridLines,
        lineColor: 'transparent',
        type: 'category',
        labels: {
          step: 1,
          useHTML: true,
          style: {
            color: colors.bar
          },
          formatter: function() {
            var labelValue = this.value;
            var oldValue;
            var newValue;
            var pointValue;
            var growth;
            
            if(this.isLast) {
              return '<div class="labels">' + this.value + '</div>';
            } else {
              pointValue = COMMON.findByName(data, this.value);
              if (pointValue) {
                oldValue = pointValue.current;
                newValue = pointValue.next;
                growth = Math.round((newValue - oldValue) / oldValue * 100);
              }
              if (growth > 0) {
                return '<div class="labels">' + this.value + '<div class="growing plus"><span class="plusSymbol">+</span>' + growth + '%</div>' + '</div>';
              } else {
                return '<div class="labels">' + this.value + '<div class="growing minus">' + growth + '%</div>' + '</div>';
              }
            }
          }
        }
      },
      yAxis: {
        gridLineWidth: 0,
        maxPadding: 0,
        plotLines: [
          {
            value: maxRate,
            color: colors.gridLines,
            dashStyle: 'dot',
            width: plotLinesWidth
          }, {
            value: maxRate / 2,
            color: colors.gridLines,
            dashStyle: 'dot',
            width: plotLinesWidth,
          }, {
            value: 0,
            color: colors.gridLines,
            dashStyle: 'dot',
            width: plotLinesWidth,
          }
        ],
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
          stacking: 'normal'
        }
      },
      series: [
        {
          name: 'background',
          className: 'column-background',
          type: 'column',
          color: colors.barBg,
          pointWidth: pointWidth,
          borderRadiusTopRight: 5,
          borderRadiusTopLeft: 5,
          borderWidth: 0,
          data: bgColumnArray
        }, {
          name: 'columns',
          type: 'column',
          color: colors.bar,
          pointWidth: pointWidth,
          borderWidth: 0,
          borderRadiusBottomRight: 5,
          borderRadiusBottomLeft: 5,
          data: data,
          dataLabels: {
            enabled: true,
            inside: false,
            y: 5,
            style: {
              fontSize: '12px',
              fontFamily: 'open_sanssemibold',
              color: colors.text
            }
          }
        }
      ]
    });
  }
}(CHARTS || {}));
