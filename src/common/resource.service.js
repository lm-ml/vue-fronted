export default {
  resources: {
    lucene: {
      flight: {
        airports: '/lucene/flight/airports/:id/:type',
        airlineRoutes: '/lucene/flight/airlineRoutes/:id/:type',
        route: '/lucene/flight/route/:id/:type',
        routeJson: '/lucene/flight/routeJson/:id/:type',
        routeForm: '/lucene/flight/routeForm/:id/:type'
      }
    }
  },
  getResource(resource, parameter, callback) {
    const httpUrl = _getUrl(resource, parameter);
    callback && callback.call(callback, httpUrl);
  }
}

function _getUrl(resource, parameter) {
  if (resource) {
    let proxy = '';
    const parts = resource.split('/');
    const finalParts = [];
    parts.forEach(function (part) {
      if (part.indexOf(':') > -1 || part.indexOf(location.host) > -1) {
        const key = part.substr(part.indexOf(':') + 1, part.length);
        if (parameter[key]) {
          part = parameter[key];
          finalParts.push(part);
        }
      } else {
        finalParts.push(part);
      }
    });
    return proxy + finalParts.join('/');
  } else {
    return undefined;
  }
}