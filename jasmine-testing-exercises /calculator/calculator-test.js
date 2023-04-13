
it('should calculate the monthly rate correctly'), function () {
  expect(calculateMonthlyPayment(10000, .05, 10).toBeCLoseTo(1295.05))
  }
  ;


it("should return a result with 2 decimal places"), function() {
  expect(calculateMonthlyPayment(10000, .05, 10).toEqual(1295.05))
};

/// etc
