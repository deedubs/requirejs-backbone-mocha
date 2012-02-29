require.config({
  paths: {
      underscore: '/js/lib/underscore'
    , backbone: '/js/lib/backbone'
  }
});

require(["app"], function(Application) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        Application.initalize();
    });
});
