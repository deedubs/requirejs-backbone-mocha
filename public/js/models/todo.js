define(['backbone'],function() {
  var Todo = Backbone.Model.extend({
      defaults: {
        "done": false
      }
  });

  return Todo;
});