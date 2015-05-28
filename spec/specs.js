describe('wordOrder', function() {

  it("it will count the number of words in a string", function() {
    expect(wordOrder("dog eat eat eat dog cat", 1)).to.eq("dog 2")
  });
});
