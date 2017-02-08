(function () {
  'use strict';

  //waterfall
  var chartDataWaterfall = [
    {
      name: '2015',
      y: 2000
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
  var configW = {
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
    container: 'waterfall-chart',
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
    container: 'chart-waterfall-summary',
    maxRate: 5000
  }

  //grouped
  var chartData = [
    {
      name: '2013',
      y: 3.85
    }, {
      name: '2015',
      y: 5.71
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
    maxRate: 10,
    type: 'sales',
    headerText: 'Sales, $ MM'
  }
  var config2 = {
    colors: {
      bar: '#e45641',
      barBg: '#fff',
      text: '#888e95',
      gridLines: '#aaa'
    },
    container: 'chart-gistogram-volume',
    maxRate: 10,
    type: 'volume',
    headerText: 'Volume - EQ, Thousands'
  }
  var config3 = {
    colors: {
      bar: '#44b3c2',
      barBg: '#fff',
      text: '#888e95',
      gridLines: '#aaa'
    },
    container: 'chart-gistogram-price',
    maxRate: 10,
    type: 'price',
    headerText: 'Price - per EQ, $'
  }

  //growth
  var chartDataGrowth = [
    {
      name: '12/14',
      y: 22
    }, {
      name: '12/17',
      y: 50
    }
  ];
  var config4 = {
    colors: {
      bar: '#f1a94e',
      text: '#888e95',
      gridLines: '#c3cad6'
    },
    maxRate: 100,
    container: 'chart-gistogram-growth-sales',
    type: 'sales',
    headerText: 'Sales, $ MM'
  }
  var config5 = {
    colors: {
      bar: '#e45641',
      text: '#888e95',
      gridLines: '#c3cad6'
    },
    maxRate: 100,
    container: 'chart-gistogram-growth-volume',
    type: 'volume',
    headerText: 'Volume - EQ, Thousands'
  }
  var config6 = {
    container: 'chart-gistogram-growth-price',
    colors: {
      bar: '#44b3c2',
      text: '#888e95',
      gridLines: '#c3cad6'
    },
    maxRate: 100,
    type: 'price',
    headerText: 'Price - per EQ, $'
  }

//divider
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

//divider grawth
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
    rightLabel: 'Forecastt'
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
    rightLabel: 'Forecastt'
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
    rightLabel: 'Forecastt'
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
    background: false,
    type: 'price',
    headerText: 'Price - per EQ, $'
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
    background: false,
    type: 'price',
    headerText: 'Price - per EQ, $'
  }



  var chartData = [
    {
      name: '2013',
      y: 30.85
    }, {
      name: '2015',
      y: 20.71
    }, {
      name: '2020F',
      y: 91
    }
  ];

  var chartData = [
    {
      name: '2013',
      y: 1
    }, {
      name: '2015',
      y: 2
    }, {
      name: '2020F',
      y: 3
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
    maxRate: 120,
  }

  var config2 = {
    colors: {
      bar: '#f1a94e',
      barBg: '#fff',
      text: '#888e95',
      gridLines: '#aaa'
    },
    container: 'chart-gistogram',
    background: false,
    maxRate: 120,
  }

  var configDouble = {
    colors: {
      line: '#f1a94e',
      line2: '#e45641',
      text: '#888e95',
      gridLines: '#aaa'
    },
    lineName: 'simulation',
    lineName2: 'Baseline scenario',
    container: 'chart1',
    navigator: true,
    handles: true,
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
    container: 'chart1',
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
    maxRate: 70,
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
      name: '2015',

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

  var dataDouble = [
    [1486023706268, 150],
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
    [1486023706268 + 604800000 / 2 * 14, 350],
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
  var dataDouble2 = [
    [1486023706268, 120],
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


  //  CHARTS.renderLine(dataDouble, dataDouble2, configDouble);
  //  CHARTS.renderLine(dataDouble, dataDouble2, configDouble2);
  //  CHARTS.renderGistogramDividerCompare(dataCompare_1, dataCompare_2, configCompare);
    CHARTS.renderLine(dataDouble, dataDouble2, configDouble);


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
