module.exports = function(router) {
  router.post('/redirectAuth', function (req, res) {
    console.log("Auth has been successfully redirected");
  });
};