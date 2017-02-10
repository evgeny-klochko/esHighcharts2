(function (H) {
  var d = false;

  H.wrap(H.Navigator.prototype, 'init', function (proceed) {
    proceed.apply(this, Array.prototype.slice.call(arguments, 1));
  });

  H.wrap(H.Navigator.prototype, 'addEvents', function (proceed) {
    proceed.apply(this, Array.prototype.slice.call(arguments, 1));
    console.log('event');
  });

  H.wrap(H.Navigator.prototype, 'drawHandle', function (proceed) {
    proceed.apply(this, Array.prototype.slice.call(arguments, 1));

    H.each(this.handles, function (handle, index) {
      var element = handle.element;

      if (handle.translateX !== undefined && handle.translateY !== undefined) {
        if (index == 0) {
          element.innerHTML = '';
          $(element).attr('fill', '#44B3C2');
          $(element).attr('stroke-width', '0');
          $(element).attr('d', 'M7.5,0.3c-2.8,0-5.2,1.6-6.4,4C0.3,5.9,0.4,7.8,0.8,9.5l6.7,16.2l6.6-16.1c0.6-2.1,0.4-4.5-0.8-6.3C12,1.5,9.9,0.3,7.5,0.3L7.5,0.3z');
          $(element).attr({transform: 'translate(' + (handle.translateX - 6) + ',' + (handle.translateY - 29) + ') scale(0.9)'});
        }
        else {
          element.innerHTML = '';
          $(element).attr('fill', '#44B3C2');
          $(element).attr('stroke-width', '0');
          $(element).attr('d', 'M7.5,0.3c-2.8,0-5.2,1.6-6.4,4C0.3,5.9,0.4,7.8,0.8,9.5l6.7,16.2l6.6-16.1c0.6-2.1,0.4-4.5-0.8-6.3C12,1.5,9.9,0.3,7.5,0.3L7.5,0.3z');
          $(element).attr({transform: 'translate(' + (handle.translateX - 6) + ',' + (handle.translateY - 29) + ') scale(0.9)'});
        }
      }
    })
  });

  function parseSVG(s) {
    var div = document.createElementNS('http://www.w3.org/1999/xhtml', 'div'),
      frag = document.createDocumentFragment();

    div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + s + '</svg>;';

    while (div.firstChild.firstChild) {
      frag.appendChild(div.firstChild.firstChild);
    }
    return frag;
  }
}(Highcharts));