define(['models/todo.js'], function(Todo) {
  describe('Todo', function() {
    it('should be a backbone model', function() {
     expect(Todo).to.be.a(Object);
    });

    it('should not be done by default', function() {
      var todo = new Todo();

      expect(todo.get('done')).to.be(false);
    });
  });
});