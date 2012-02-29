define(['/js/models/expense.js'], function(Expense) {
  describe('Expense', function() {
    it('should be a backbone model', function() {
     expect(Expense).to.be.a(Object);
    });

    it('should have a default amount', function() {
      var expense = new Expense();

      expect(expense.get('amount')).to.be(0.0);
    });
  });
});