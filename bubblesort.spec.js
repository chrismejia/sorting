describe("Bubble Sort", function() {
  beforeEach(() => {
    // default values
    // spyOn(context object, 'function')
    spyOn(window, "swap").and.callThrough();
  });

  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("does swap once", function() {
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
    expect(window.swap).toHaveBeenCalled();
  });
});
