(function (window, ctx) {
  var INIT_API = '_init';
  var PERF_API = '_perf';

  ctx[ctx[INIT_API] = 0] = function (data) {
    return data.user || data || 'anonymouse'
  };

  ctx[ctx[PERF_API] = 1] = function () {
    try {
      return {
        userAgent: 'navigator' in window && navigator.userAgent,
        timing: 'performance' in window && performance.timing,
        navigation: 'performance' in window && performance.navigation,
        chrome: 'chrome' in window && chrome.loadTimes(),
        serviceWorker: 'serviceWorker' in navigator,
      };
    } catch (e) {
      return {};
    };
  };

  var send = function (data) {
    var xhr = new window.XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/collector');
    xhr.send(JSON.stringify(data));
  }

  var id = 0;
  var data = [];

  if (window._gq) {
    id = window._gq.id || id;
    data = window._gq.data || data;
  }

  var requestIdleCallback = window.requestIdleCallback || function (callback) {
    return setTimeout(callback, 0);
  };

  let taskHandle = null;

  var process = function () {
    var messages = [];

    while (data.length) {
      var args = data.shift();
      messages.push([ctx[args[0]], ctx[ctx[args[0]]](args[1]), args[2], args[3]]);
    };

    taskHandle = null;

    var message = {
      version: "1.0.0",
      userAgent: navigator.userAgent,
      screen: window.screen,
      devicePixelRatio: window.devicePixelRatio,
      messages: messages,
    };

    return send(message);
  };

  var push = function (event) {
    data.push([event[0], event[1], id++, new Date()]);
    if (!taskHandle) {
      taskHandle = requestIdleCallback(process, { timeout: 1000 });
    }
  };

  taskHandle = requestIdleCallback(process, { timeout: 1000 });

})(window, {});
