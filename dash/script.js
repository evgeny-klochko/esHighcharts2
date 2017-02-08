(function () {
  'use strict';
  $(document).ready(function() {
    //waterfall
    var chartDataWaterfall = [
      {
        name: '2015',
        y: 2000
      }, {
        name: 'Economy',
        y: -1030
      }, {
        name: 'Demographic',
        y: 318
      }, {
        name: 'Inflation',
        y: 1102
      }, {
        name: 'Distribution',
        y: -182
      }, {
        name: 'Pricing',
        y: -212
      }, {
        name: 'Unit size',
        y: 341
      }, {
        name: 'Advertising',
        y: 56
      },{
        name: 'Shake of Snacking',
        y: 240
      }, {
        name: 'Remainder',
        y: 362
      }, {
        name: '2020F',
        isSum: true
      }
    ];
    var chartDataWaterfall2 = [
      {
        name: '2015',
        y: 2500
      }, {
        name: 'Economy',
        y: -130
      }, {
        name: 'Demographic',
        y: 318
      }, {
        name: 'Inflation',
        y: 1102
      }, {
        name: 'Distribution',
        y: -182
      }, {
        name: 'Pricing',
        y: -212
      }, {
        name: 'Unit size',
        y: 341
      }, {
        name: 'Advertising',
        y: 56
      },{
        name: 'Shake of Snacking',
        y: 240
      }, {
        name: 'Remainder',
        y: 362
      }, {
        name: '2020F',
        isSum: true
      }
    ];
    var chartDataWaterfall3 = [
      {
        name: '2015',
        y: 1000
      }, {
        name: 'Economy',
        y: -130
      }, {
        name: 'Demographic',
        y: 318
      }, {
        name: 'Inflation',
        y: 1102
      }, {
        name: 'Distribution',
        y: -182
      }, {
        name: 'Pricing',
        y: -212
      }, {
        name: 'Unit size',
        y: 341
      }, {
        name: 'Advertising',
        y: 56
      },{
        name: 'Shake of Snacking',
        y: 240
      }, {
        name: 'Remainder',
        y: 362
      }, {
        name: '2020F',
        isSum: true
      }
    ];
    var waterfallColors = {
      barUp: '#55c398',
      barDown: '#e45641',
      barOutside: '#44b3c2',
      barBg: '#ecf0f7',
      gridLines: '#c3cad6',
      textUp: '#55c398',
      textDown: '#e45641',
      textOutside: '#888e95'
    };
    var configW2 = {
      colors: waterfallColors,
      container: 'chart-waterfall-summary-sales',
      maxRate: 5000,
      growthData: [10, 20, -4, 17, 15, 12, 14, -22, 12]
    }
    var configW3 = {
      colors: waterfallColors,
      container: 'chart-waterfall-summary-volume',
      maxRate: 5000,
      growthData: [10, 20, -4, 17, 15, 12, 14, -22, 12]
    }
    var configW4 = {
      colors: waterfallColors,
      container: 'chart-waterfall-summary-price',
      maxRate: 5000,
      growthData: [20, 20, -4, 17, 15, 12, 14, -22, 12]
    }
    var configW5 = {
      colors: waterfallColors,
      container: 'chart-waterfall-dashbord-sales',
      maxRate: 5000,
      growthData: [30, 20, -4, 17, 15, 12, 14, -22, 12]
    }
    var configW6 = {
      colors: waterfallColors,
      container: 'chart-waterfall-dashbord-volume',
      maxRate: 5000,
      growthData: [40, 20, -4, 17, 15, 12, 14, -22, 12]
    }
    var configW7 = {
      colors: waterfallColors,
      container: 'chart-waterfall-dashbord-price',
      maxRate: 5000,
      growthData: [50, 20, -4, 17, 15, 12, 14, -22, 12]
    }
    //grouped
    var chartData = [
      {
        name: '2013',
        y: 53.85
      }, {
        name: '2015',
        y: 65.81
      }, {
        name: '2020F',
        y: 96.14
      }
    ];
    var chartData2 = [
      {
        name: '2013',
        y: 4.85
      }, {
        name: '2015',
        y: 5.71
      }, {
        name: '2020F',
        y: 5.86
      }
    ];
    var chartData3 = [
      {
        name: '2013',
        y: 1.85
      }, {
        name: '2015',
        y: 2.71
      }, {
        name: '2020F',
        y: 7.86
      }
    ];
    var config = {
      colors: {
        bar: '#f1a94e',
        barBg: '#fff',
        text: '#888e95',
        gridLines: '#aaa'
      },
      container: 'chart-gistogram-sales',
      maxRate: 150
    }
    var config2 = {
      colors: {
        bar: '#e45641',
        barBg: '#fff',
        text: '#888e95',
        gridLines: '#aaa'
      },
      container: 'chart-gistogram-volume',
      maxRate: 150
    }
    var config3 = {
      colors: {
        bar: '#44b3c2',
        barBg: '#fff',
        text: '#888e95',
        gridLines: '#aaa'
      },
      container: 'chart-gistogram-price',
      maxRate: 150
    }

    //growth
    var chartDataGrowth = [
      {
        name: '12/14',
        y: 22
      }, {
        name: '12/17',
        y: -50
      }
    ];
    var config4 = {
      colors: {
        bar: '#f1a94e',
        text: '#888e95',
        gridLines: '#c3cad6'
      },
      maxRate: 100,
      container: 'chart-gistogram-growth-sales'
    }
    var config5 = {
      colors: {
        bar: '#e45641',
        text: '#888e95',
        gridLines: '#c3cad6'
      },
      maxRate: 100,
      container: 'chart-gistogram-growth-volume'
    }
    var config6 = {
      container: 'chart-gistogram-growth-price',
      colors: {
        bar: '#44b3c2',
        text: '#888e95',
        gridLines: '#c3cad6'
      },
      maxRate: 100
    }

//  divider
    var chartDataWide = [
      {
        name: '2013',
        y: 3.85
      }, {
        name: '2014',
        y: 4.71
      }, {
        name: '2015',
        y: 7.86
      }, {
        name: '2016',
        y: 3.85
      }, {
        name: '2017',
        y: 4.71
      }, {
        name: '2018',
        y: 7.86
      }, {
        name: '2019',
        y: 3.85
      }, {
        name: '2020F',
        y: 4.71
      }
    ];
    var configWide = {
      container: 'chart-gistogram-divider-sales',
      colors: {
        bar: '#f1a94e',
        text: '#888e95',
        barBg: '#ecf0f7',
        gridLines: '#c3cad6',
        leftBorder: '#cfd5de',
        rightBorder: '#f9ddb8'
      },
      dividerPosition: 3,
      maxRate: 10,
      leftLabel: 'Historical',
      rightLabel: 'Forecast'
    }
    var configWide2 = {
      colors: {
        bar: '#e45641',
        text: '#888e95',
        barBg: '#ecf0f7',
        gridLines: '#c3cad6',
        leftBorder: '#cfd5de',
        rightBorder: '#f4bbb3'
      },
      container: 'chart-gistogram-divider-volume',
      dividerPosition: 4,
      maxRate: 10,
      leftLabel: 'Historical',
      rightLabel: 'Forecast'
    }
    var configWide3 = {
      colors: {
        bar: '#44b3c2',
        text: '#888e95',
        barBg: '#ecf0f7',
        gridLines: '#c3cad6',
        leftBorder: '#cfd5de',
        rightBorder: '#b4e1e6'
      },
      container: 'chart-gistogram-divider-price',
      dividerPosition: 2,
      maxRate: 10,
      leftLabel: 'Historical',
      rightLabel: 'Forecast'
    }
  
//  divider grawth
    var chartDataWideGrowth = [
      {
        name: '2013',
        y: 5
      }, {
        name: '2014',
        y: 5
      }, {
        name: '2015',
        y: 7
      }, {
        name: '2016',
        y: -5
      }, {
        name: '2017',
        y: -10
      }, {
        name: '2018',
        y: -3
      }, {
        name: '2019',
        y: 6
      }, {
        name: '2020F',
        y: 4
      }
    ];
    var configWideArrowed = {
      colors: {
        bar: '#f1a94e',
        text: '#888e95',
        barBg: '#ecf0f7',
        gridLines: '#c3cad6',
        leftBorder: '#cfd5de',
        rightBorder: '#f9ddb8'
      },
      container: 'chart-gistogram-divider-growth-sales',
      dividerPosition: 2,
      maxRate: 25,
      leftLabel: 'Historical',
      rightLabel: 'Forecast'
    }
    var configWideArrowed2 = {
      colors: {
        bar: '#e45641',
        text: '#888e95',
        barBg: '#ecf0f7',
        gridLines: '#c3cad6',
        leftBorder: '#cfd5de',
        rightBorder: '#f4bbb3'
      },
      container: 'chart-gistogram-divider-growth-volume',
      dividerPosition: 3,
      maxRate: 25,
      leftLabel: 'Historical',
      rightLabel: 'Forecast'
    }
    var configWideArrowed3 = {
      colors: {
        bar: '#44b3c2',
        text: '#888e95',
        barBg: '#ecf0f7',
        gridLines: '#c3cad6',
        leftBorder: '#cfd5de',
        rightBorder: '#b4e1e6'
      },
      container: 'chart-gistogram-divider-growth-price',
      dividerPosition: 2,
      maxRate: 25,
      leftLabel: 'Historical',
      rightLabel: 'Forecast'
    }
  
    //details
    var chartDataDetails = [
      {
        name: '2013',
        y: 0.6
      }, {
        name: '2014',
        y: 0.7
      }, {
        name: '2015',
        y: 0.8
      }, {
        name: '2016',
        y: 0.9
      }, {
        name: '2017F',
        y: 1.12
      }, {
        name: '2018F',
        y: 1.25
      }
    ];
    var configDetails = {
      colors: {
        bar: '#44b3c2',
        barBg: '#ecf0f7',
        text: '#888e95',
        gridLines: '#aaa'
      },
      container: 'chart-gistogram-details',
      maxRate: 2,
      background: false
    }
    var configDetails2 = {
      colors: {
        bar: '#44b3c2',
        barBg: '#ecf0f7',
        text: '#888e95',
        gridLines: '#aaa'
      },
      container: 'chart-gistogram-details-absolute',
      maxRate: 2,
      background: false
    }

    //
    // chart preloader
    function clearContainer(container) {
      var elementName = '#' + container;
      $(elementName).empty();
      $(elementName).append('<img class="h-test-img" src="../assets/img/test/ic-high-charts.svg">');
    }

    $( "a[href='#graph-all']" ).click(function() {
      clearContainer(config.container);
      clearContainer(config2.container);
      clearContainer(config3.container);
      clearContainer(config4.container);
      clearContainer(config5.container);
      clearContainer(config6.container);
      setTimeout(function() {
        CHARTS.renderGistogram(chartData, config);
        CHARTS.renderGistogram(chartData, config2);
        CHARTS.renderGistogram(chartData, config3);
        CHARTS.renderGistogramGrowthrate(chartDataGrowth, config4);
        CHARTS.renderGistogramGrowthrate(chartDataGrowth, config5);
        CHARTS.renderGistogramGrowthrate(chartDataGrowth, config6);
      }, 10);
    });

    $( "a[href='#graph-sales']" ).click(function() {
      clearContainer(configWide.container);
      clearContainer(configWideArrowed.container);
      setTimeout(function() {
        CHARTS.renderGistogramDivider(chartDataWide, configWide);
        CHARTS.renderGistogramDividerGrowthrate(chartDataWideGrowth, configWideArrowed);

      }, 10);
    });

    $( "a[href='#graph-volume']" ).click(function() {
      clearContainer(configWide2.container);
      clearContainer(configWideArrowed2.container);
      setTimeout(function() {
        CHARTS.renderGistogramDivider(chartDataWide, configWide2);
        CHARTS.renderGistogramDividerGrowthrate(chartDataWideGrowth, configWideArrowed2);

      }, 10);
    });

    $( "a[href='#graph-price']" ).click(function() {
      clearContainer(configWide3.container);
      clearContainer(configWideArrowed3.container);
      setTimeout(function() {
        CHARTS.renderGistogramDivider(chartDataWide, configWide3);
        CHARTS.renderGistogramDividerGrowthrate(chartDataWideGrowth, configWideArrowed3);
      }, 10);
    });

    $('a[target="#chartABS"]').click(function() {
      clearContainer(config.container);
      clearContainer(config2.container);
      clearContainer(config3.container);
      clearContainer(configWide.container);
      clearContainer(configWide2.container);
      clearContainer(configWide3.container);
      setTimeout(function() {
        CHARTS.renderGistogram(chartData, config);
        CHARTS.renderGistogram(chartData, config2);
        CHARTS.renderGistogram(chartData, config3);
        CHARTS.renderGistogramDivider(chartDataWide, configWide);
        CHARTS.renderGistogramDivider(chartDataWide, configWide2);
        CHARTS.renderGistogramDivider(chartDataWide, configWide3);
      }, 10);
    });

    $('a[target="#chartGrowth"]').click(function() {
      clearContainer(config4.container);
      clearContainer(config5.container);
      clearContainer(config6.container);
      clearContainer(configWideArrowed.container);
      clearContainer(configWideArrowed2.container);
      clearContainer(configWideArrowed3.container);
      setTimeout(function() {
        CHARTS.renderGistogramGrowthrate(chartDataGrowth, config4);
        CHARTS.renderGistogramGrowthrate(chartDataGrowth, config5);
        CHARTS.renderGistogramGrowthrate(chartDataGrowth, config6);
        CHARTS.renderGistogramDividerGrowthrate(chartDataWideGrowth, configWideArrowed);
        CHARTS.renderGistogramDividerGrowthrate(chartDataWideGrowth, configWideArrowed2);
        CHARTS.renderGistogramDividerGrowthrate(chartDataWideGrowth, configWideArrowed3);
      }, 40);
    });

    //
    //  should divide this huge calling
    $("#forecastExpand").click(function() {
    });

    $("#forecastExpand").click(function() {
      var btn = $("#forecastExpand");
      if (btn.hasClass('c-button--collapse')) {
        clearContainer(config.container);
        clearContainer(config2.container);
        clearContainer(config3.container);
        clearContainer(config4.container);
        clearContainer(config5.container);
        clearContainer(config6.container);
        setTimeout(function() {
          CHARTS.renderGistogram(chartData, config);
          CHARTS.renderGistogram(chartData, config2);
          CHARTS.renderGistogram(chartData, config3);
          CHARTS.renderGistogramGrowthrate(chartDataGrowth, config4);
          CHARTS.renderGistogramGrowthrate(chartDataGrowth, config5);
          CHARTS.renderGistogramGrowthrate(chartDataGrowth, config6);
        }, 10);
      } else {
        clearContainer(configWide.container);
        clearContainer(configWide2.container);
        clearContainer(configWide3.container);
        clearContainer(configWideArrowed.container);
        clearContainer(configWideArrowed2.container);
        clearContainer(configWideArrowed3.container);
        setTimeout(function() {
          CHARTS.renderGistogramDivider(chartDataWide, configWide);
          CHARTS.renderGistogramDivider(chartDataWide, configWide2);
          CHARTS.renderGistogramDivider(chartDataWide, configWide3);
          CHARTS.renderGistogramDividerGrowthrate(chartDataWideGrowth, configWideArrowed);
          CHARTS.renderGistogramDividerGrowthrate(chartDataWideGrowth, configWideArrowed2);
          CHARTS.renderGistogramDividerGrowthrate(chartDataWideGrowth, configWideArrowed3);
        }, 10);
      }
    });


    $('a[target="#graph-dashbord-waterfall-sales"]').click(function() {
      clearContainer(configW5.container);
      setTimeout(function() {
        CHARTS.renderWaterfall(chartDataWaterfall, configW5);
      }, 10);
    });
    $('a[target="#graph-dashbord-waterfall-volume"]').click(function() {
      clearContainer(configW6.container);
      setTimeout(function() {
        var gg = CHARTS.renderWaterfall(chartDataWaterfall2, configW6);
      }, 10);
    });
    $('a[target="#graph-dashbord-waterfall-price"]').click(function() {
      clearContainer(configW7.container);
      setTimeout(function() {
        var gg = CHARTS.renderWaterfall(chartDataWaterfall3, configW7);
      }, 10);
    });

    $('li[target="moduleSummary"]').click(function() {
      clearContainer(configW2.container);
      setTimeout(function() {
        CHARTS.renderWaterfall(chartDataWaterfall, configW2);
      }, 10);
    });

    $('a[target="#graph-summary-waterfall-sales"]').click(function() {
      clearContainer(configW2.container);
      setTimeout(function() {
        CHARTS.renderWaterfall(chartDataWaterfall, configW2);
      }, 10);
    });
    $('a[target="#graph-summary-waterfall-volume"]').click(function() {
      clearContainer(configW3.container);
      setTimeout(function() {
        CHARTS.renderWaterfall(chartDataWaterfall2, configW3);
      }, 10);
    });
    $('a[target="#graph-summary-waterfall-price"]').click(function() {
      clearContainer(configW4.container);
      setTimeout(function() {
        CHARTS.renderWaterfall(chartDataWaterfall3, configW4);
      }, 10);
    });

    $('li[target="moduleDetails"]').click(function() {
      clearContainer(configDetails.container);
      clearContainer(configDetails2.container);
      setTimeout(function() {
          CHARTS.renderGistogram(chartDataDetails, configDetails);
          CHARTS.renderGistogram(chartDataDetails, configDetails2);
      }, 10);
    });

    $('#detailsCollapse').click(function() {
      clearContainer(configW2.container);
      setTimeout(function() {
        CHARTS.renderWaterfall(chartDataWaterfall, configW2);
      }, 10);
    });

    $('#dashDecompCollapse').click(function() {
      clearContainer(configW2.container);
      setTimeout(function() {
        CHARTS.renderWaterfall(chartDataWaterfall, configW2);
      }, 10);
    });

    CHARTS.renderWaterfall(chartDataWaterfall, configW5);
    CHARTS.renderGistogram(chartData, config);
    CHARTS.renderGistogram(chartData, config2);
    CHARTS.renderGistogram(chartData, config3);

    $('a[target="#chartGrowth"]').click(function() {
      clearContainer(configDetails.container);
      setTimeout(function() {
        CHARTS.renderGistogramGrowthrate(chartDataGrowth, config4);
        CHARTS.renderGistogramGrowthrate(chartDataGrowth, config5);
        CHARTS.renderGistogramGrowthrate(chartDataGrowth, config6);
      }, 10);
    });

/*    $("#forecastExpand").click(function() {
      setTimeout(function() {
        CHARTS.renderGistogram(chartData, config);
        CHARTS.renderGistogram(chartData, config2);
        CHARTS.renderGistogram(chartData, config3);
        CHARTS.renderGistogramGrowthrate(chartDataGrowth, config4);
        CHARTS.renderGistogramGrowthrate(chartDataGrowth, config5);
        CHARTS.renderGistogramGrowthrate(chartDataGrowth, config6);
        CHARTS.renderGistogramDivider(chartDataWide, configWide);
        CHARTS.renderGistogramDivider(chartDataWide, configWide2);
        CHARTS.renderGistogramDivider(chartDataWide, configWide3);
        CHARTS.renderGistogramDividerGrowthrate(chartDataWideGrowth, configWideArrowed);
        CHARTS.renderGistogramDividerGrowthrate(chartDataWideGrowth, configWideArrowed2);
        CHARTS.renderGistogramDividerGrowthrate(chartDataWideGrowth, configWideArrowed3);
      }, 10);
    });*/
  });
}());
