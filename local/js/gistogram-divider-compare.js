var CHARTS = (function (chart) {
  'use strict';

  var maxRate;
  var pointWidth = 19;
  var spacing = 20;
  var growingLabelWidth = 50;

  chart.renderGistogramDividerCompare = function (chartInfo, chartInfo2, configInfo) {
    var borderElement;
    var config = configInfo;
    var chartData = chartInfo;
    var chartData2 = chartInfo2;
    var colors = config.colors;
    maxRate = config.maxRate;
    var highchart = initGistogram(chartData, chartData2, config.container, config);
    var data = highchart.series[1].data;
    highchart.config = config;
    borderElement = COMMON.drawBordersPlotCompare(highchart, config, spacing, pointWidth, borderElement);
    highchart.borderElement = borderElement;
    COMMON.correctLabelsPos(highchart, config, growingLabelWidth);
    hideFirstLabel(config.container);
    centerFirstLabel(data, config.container);
  }
  return chart;

  function hideFirstLabel(container) {
    var elementName = '#' + container;
    var $firstLabel = $(elementName).find('.highcharts-series-2').find('.highcharts-data-label').first();
    $firstLabel.hide();
  }

  function centerFirstLabel(data, container) {
    var elementName = '#' + container;
    var $firstLabel = $(elementName).find('.highcharts-xaxis-labels').find('span').first();
    var left = data[0].barX - 4;
    $firstLabel.css('left', left);
  }

  function initGistogram(data, data2, container, config) {
    var bgColumnArray = COMMON.prepareBgColumnsArrayDelta(data, maxRate);

    return new Highcharts.Chart({
      chart: {
        renderTo: container,
        type: 'column',
        className: 'gistogram-divider',
        events: {
          redraw: function () {
            this.borderElement = COMMON.drawBordersPlotCompare(this, this.config, spacing, pointWidth, this.borderElement);
            COMMON.correctLabelsPos(this, this.config, growingLabelWidth);
            hideFirstLabel(this.config.container);
            centerFirstLabel(this.series[1].data, this.config.container);
          },
          load: function(event) {
            $('.highcharts-legend-item rect').attr('height', '2').attr('y', '10');
            $('.highcharts-legend-item rect').attr('width', '30').attr('x', '-20');
          }
        },
        marginLeft: 4,
        marginRight: 4,
        spacingTop: spacing,
        spacingBottom: 0
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
          y: 15,
          style: {
            color: config.colors.bar,
          },
        }
      },
      yAxis: {
        gridLineWidth: 0,
        maxPadding: 0,
        plotLines: [{
          value: maxRate,
          color: config.colors.gridLines,
          dashStyle: 'dot',
          width: 1
        },{
          value: maxRate / 2,
          color: config.colors.gridLines,
          dashStyle: 'dot',
          width: 1,
        },{
          value: 0,
          color: config.colors.gridLines,
          dashStyle: 'dot',
          width: 1,
        }],
        labels: {
          enabled: false
        }
      },
      legend: {
        align: 'left',
        itemDistance: 30,
        itemStyle: {
          width: 110,
          fontSize: 10,
          color: config.colors.text
        },
        symbolWidth: 10,
        width: 350
      },
      credits: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          groupPadding: 0.1
        },
        series: {
          dataLabels: {
            allowOverlap: true
          },
          events: {
            legendItemClick: function () {
                return false;
            }
          }
        },
        allowPointSelect: false,
      },
      series: [
        {
          name: 'background',
          showInLegend: false,
          stack: 0,
          className: 'column-background',
          type: 'column',
          states: {
            hover: {
              enabled: false
            }
          },
          color: config.colors.barBg,
          pointWidth: pointWidth,
          borderRadiusTopRight: 5,
          borderRadiusTopLeft: 5,
          borderWidth: 0,
          data: bgColumnArray
        }, {
          name: config.barName,
          stack: 0,
          type: 'column',
          color: config.colors.bar,
          pointWidth: pointWidth,
          borderWidth: 0,
          borderRadiusBottomRight: 5,
          borderRadiusBottomLeft: 5,
          data: data,
          dataLabels: {
            enabled: true,
            inside: false,
            y: 4,
            style: {
              fontSize: '12px',
              fontFamily: 'open_sanssemibold',
              color: config.colors.text
            }
          }
        }, {
          name: config.barName2,
          stack: 1,
          type: 'column',
          color: config.colors.bar2,
          pointWidth: pointWidth,
          borderWidth: 0,
          borderRadiusBottomRight: 5,
          borderRadiusBottomLeft: 5,
          data: data2,
          dataLabels: {
            enabled: true,
            inside: false,
            y: 4,
            style: {
              fontSize: '12px',
              fontFamily: 'open_sanssemibold',
              color: config.colors.text
            }
          }
        }
      ]
    });
  }
}(CHARTS || {}));
