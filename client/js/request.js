/**
 * Request object that will help client send and get requests
 */
var Request = function() {
  
  /**
   * send a request to a url
   * @param options {Object} options object contains url, method, etc.
   * @param callback {Function} 
   * @return {[type]}            [description]
   */
  this.send = function (options, callback) {
    var request = new XMLHttpRequest();
    
    request.open(options.method, options.url, true);
    // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        callback(null, JSON.parse(this.response));
      } else {
        callback('We reached our target server, but it returned an error', null);
      }
    };

    request.onerror = function() {
      callback('There was a connection error of some sort', null);
    };

    request.send(JSON.stringify(options.data));
  };

  return this;
};
