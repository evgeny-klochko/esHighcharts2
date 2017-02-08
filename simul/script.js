(function () {
  'use strict';

  //waterfall
  var chartDataWaterfall = [
    {
      name: '2015',
      y: 3000
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
    }, {
      name: 'Shake Snacking',
      y: 240
    }, {
      name: 'Remainder',
      y: 362
    }, {
      name: '2020F',
      isSum: true
    }
  ];
  var configW = {
    colors: {
      barUp: '#55c398',
      barDown: '#e45641',
      barOutside: '#44b3c2',
      barBg: '#ecf0f7',
      gridLines: '#c3cad6',
      textUp: '#55c398',
      textDown: '#e45641',
      textOutside: '#888e95'
    },
    container: 'chart-waterfall-simulation',
    maxRate: 5000
  }
  var configW2 = {
    // colors [growing, falling, first/last, barBg, gridLines, first/last-text]
    colors: {
      barUp: '#55c398',
      barDown: '#e45641',
      barOutside: '#44b3c2',
      barBg: '#ecf0f7',
      gridLines: '#c3cad6',
      textUp: '#55c398',
      textDown: '#e45641',
      textOutside: '#888e95'
    },
    container: 'chart-waterfall-baseline',
    maxRate: 5000
  }

  var configLineSimulation = {
    colors: {
      line: '#f1a94e',
      line2: '#e45641',
      text: '#888e95',
      gridLines: '#aaa'
    },
    lineName: 'simulation',
    lineName2: 'Baseline scenario',
    container: 'chart-line-simulation',
    navigator: true,
    handles: true,
    legend: true,
    axis: true
  }

var configLineSimulation_details = {
  colors: {
    line: '#f1a94e',
    line2: '#e45641',
    text: '#888e95',
    gridLines: '#aaa'
  },
  lineName: 'simulation',
  lineName2: 'Baseline scenario',
  container: 'chart-line-details',
  navigator: true,
  handles: false,
  legend: true,
  axis: true
}

var configLineSimulation_sidebar_details = {
  colors: {
    line: '#f1a94e',
    line2: '#e45641',
    text: '#888e95',
    gridLines: '#aaa'
  },
  lineName: 'simulation',
  lineName2: 'Baseline scenario',
  container: 'chart-line-sidebar-summary',
  navigator: true,
  handles: false,
  legend: true,
  axis: true
}

  var configDouble2 = {
    colors: {
      line: '#f1a94e',
      line2: '#e45641',
      text: '#888e95',
      gridLines: '#aaa'
    },
    lineName: 'simulation',
    lineName2: 'Baseline scenario',
    container: 'chart-doubleline2',
    navigator: false,
    handles: false,
    legend: false,
    axis: false
  }

  var configCompare = {
    container: 'chart-compare-annual',
    colors: {
      bar: '#f1a94e',
      bar2: '#e45641',
      text: '#888e95',
      barBg: '#ecf0f7',
      gridLines: '#c3cad6',
      leftBorder: '#cfd5de',
      rightBorder: '#f9ddb8'
    },
    barName: 'simulation',
    barName2: 'Baseline scenario',
    maxRate: 90,
    leftLabel: 'Historical',
    rightLabel: 'Forecast'
  }

  var dataCompare_1 = [
    {
      name: '2015',
      y: 30.2
    }, {
      name: '2016',
      y: 32.2
    }, {
      name: '2017',
      y: 33.4
    }, {
      name: '2018',
      y: 25.4
    }
  ];

  var dataCompare_2 = [
    {
      name: '2015'
    }, {
      name: '2016',
      y: 46.3
    }, {
      name: '2017',
      y: 20.6
    }, {
      name: '2018',
      y: 39.9
    }
  ];

  var dataLine = [
    [1486023706268, 250],
    [1486023706268 + 604800000 / 2, 210],
    [1486023706268 + 604800000 / 2 * 2, 230],
    [1486023706268 + 604800000 / 2 * 3, 234],
    [1486023706268 + 604800000 / 2 * 4, 245],
    [1486023706268 + 604800000 / 2 * 5, 260],
    [1486023706268 + 604800000 / 2 * 6, 265],
    [1486023706268 + 604800000 / 2 * 7, 263],
    [1486023706268 + 604800000 / 2 * 8, 260],
    [1486023706268 + 604800000 / 2 * 9, 269],
    [1486023706268 + 604800000 / 2 * 10, 270],
    [1486023706268 + 604800000 / 2 * 11, 272],
    [1486023706268 + 604800000 / 2 * 12, 230],
    [1486023706268 + 604800000 / 2 * 13, 220],
    [1486023706268 + 604800000 / 2 * 14, 250],
    [1486023706268 + 604800000 / 2 * 15, 263],
    [1486023706268 + 604800000 / 2 * 16, 295],
    [1486023706268 + 604800000 / 2 * 17, 272],
    [1486023706268 + 604800000 / 2 * 18, 265],
    [1486023706268 + 604800000 / 2 * 19, 263],
    [1486023706268 + 604800000 / 2 * 20, 262],
    [1486023706268 + 604800000 / 2 * 21, 210],
    [1486023706268 + 604800000 / 2 * 22, 230],
    [1486023706268 + 604800000 / 2 * 23, 250],
    [1486023706268 + 604800000 / 2 * 24, 270],
    [1486023706268 + 604800000 / 2 * 25, 272],
    [1486023706268 + 604800000 / 2 * 26, 230],
    [1486023706268 + 604800000 / 2 * 27, 220],
    [1486023706268 + 604800000 / 2 * 28, 250],
    [1486023706268 + 604800000 / 2 * 29, 263]
  ];
  var dataLine2 = [
    [1486023706268, 200],
    [1486023706268 + 604800000 / 2, 220],
    [1486023706268 + 604800000 / 2 * 2, 220],
    [1486023706268 + 604800000 / 2 * 3, 254],
    [1486023706268 + 604800000 / 2 * 4, 247],
    [1486023706268 + 604800000 / 2 * 5, 270],
    [1486023706268 + 604800000 / 2 * 6, 280],
    [1486023706268 + 604800000 / 2 * 7, 290],
    [1486023706268 + 604800000 / 2 * 8, 260],
    [1486023706268 + 604800000 / 2 * 9, 269],
    [1486023706268 + 604800000 / 2 * 10, 243],
    [1486023706268 + 604800000 / 2 * 11, 252],
    [1486023706268 + 604800000 / 2 * 12, 230],
    [1486023706268 + 604800000 / 2 * 13, 220],
    [1486023706268 + 604800000 / 2 * 14, 250],
    [1486023706268 + 604800000 / 2 * 15, 263],
    [1486023706268 + 604800000 / 2 * 16, 295],
    [1486023706268 + 604800000 / 2 * 17, 252],
    [1486023706268 + 604800000 / 2 * 18, 268],
    [1486023706268 + 604800000 / 2 * 19, 263],
    [1486023706268 + 604800000 / 2 * 20, 266],
    [1486023706268 + 604800000 / 2 * 21, 220],
    [1486023706268 + 604800000 / 2 * 22, 240],
    [1486023706268 + 604800000 / 2 * 23, 250],
    [1486023706268 + 604800000 / 2 * 24, 270],
    [1486023706268 + 604800000 / 2 * 25, 275],
    [1486023706268 + 604800000 / 2 * 26, 240],
    [1486023706268 + 604800000 / 2 * 27, 250],
    [1486023706268 + 604800000 / 2 * 28, 260],
    [1486023706268 + 604800000 / 2 * 29, 273],
  ];

  var configSmall = {
    colors: {
      line: '#f1a94e',
      line2: '#e45641',
    }
  };
  var containerSmallArray = [
    'chart-line-small-0',
    'chart-line-small-1',
    'chart-line-small-2',
    'chart-line-small-3',
    'chart-line-small-4',
    'chart-line-small-5',
    'chart-line-small-6',
    'chart-line-small-7',
    'chart-line-small-8',
    'chart-line-small-9',
    'chart-line-small-10',
    'chart-line-small-11',
    'chart-line-small-12',
  ];

  //
  // chart preloader
  function clearContainer(container) {
    var elementName = '#' + container;
    $(elementName).empty();
    $(elementName).append('<img class="h-test-img" src="../assets/img/test/ic-high-charts.svg">');
  }

  $('.c-sim__collapse').click(function() {
    clearContainer(configLineSimulation.container);
    clearContainer(configCompare.container);
    setTimeout(function() {
      CHARTS.renderLine(dataLine, dataLine2, configLineSimulation);
      CHARTS.renderGistogramDividerCompare(dataCompare_1, dataCompare_2, configCompare);
    }, 10);
  });

  $('li[target="moduleSimSummary"]').click(function() {
    clearContainer(configLineSimulation_details.container);
    clearContainer(configLineSimulation_sidebar_details.container);
    setTimeout(function() {
      CHARTS.renderLine(dataLine, dataLine2, configLineSimulation_sidebar_details);
    }, 10);
  });

  $('li[target="moduleSimDetails"]').click(function() {
    clearContainer(configLineSimulation_details.container);
    clearContainer(configLineSimulation_sidebar_details.container);
    setTimeout(function() {
      CHARTS.renderLine(dataLine, dataLine2, configLineSimulation_sidebar_details);
      CHARTS.renderLine(dataLine, dataLine2, configLineSimulation_details);
    }, 10);
  });

  $('.c-table-button').click(function() {
    console.log('ff');
    clearContainer(containerSmallArray[0]);
    setTimeout(function() {
      CHARTS.renderSmallLine(dataLine, dataLine2, configSmall, containerSmallArray[0]);
    }, 100);
  });

  setTimeout(function() {
    CHARTS.renderWaterfall(chartDataWaterfall, configW);
    CHARTS.renderWaterfall(chartDataWaterfall, configW2);
  }, 20);
  //  CHARTS.renderLine(dataDouble, dataDouble2, configDouble2);
  //  CHARTS.renderGistogramDividerCompare(dataCompare_1, dataCompare_2, configCompare);


    //CHARTS.renderWaterfall(chartDataWaterfall, configW);
    //CHARTS.renderWaterfall(chartDataWaterfall, configW2);
    //CHARTS.renderGistogram(chartData, config);
    //CHARTS.renderGistogram(chartData, config2);
    //CHARTS.renderGistogram(chartData, config2);
    //CHARTS.renderGistogram(chartData, config3);
    //CHARTS.renderGistogramGrowthrate(chartDataGrowth, config4);
    //CHARTS.renderGistogramGrowthrate(chartDataGrowth, config5);
    //CHARTS.renderGistogramGrowthrate(chartDataGrowth, config6);
    //CHARTS.renderGistogramDivider(chartDataWide, configWide);
    //CHARTS.renderGistogramDivider(chartDataWide, configWide2);
    //CHARTS.renderGistogramDivider(chartDataWide, configWide3);
    //CHARTS.renderGistogramDividerGrowthrate(chartDataWideGrowth, configWideArrowed);
    //CHARTS.renderGistogramDividerGrowthrate(chartDataWideGrowth, configWideArrowed2);
    //CHARTS.renderGistogramDividerGrowthrate(chartDataWideGrowth, configWideArrowed3);
    //CHARTS.renderGistogram(chartDataDetails, configDetails);
    //CHARTS.renderGistogram(chartDataDetails, configDetails2);



}());
