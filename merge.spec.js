import { mergeSort } from "./merge";

describe("mergeSort", () => {
  it.skip("should sort an array of numbers in ascending order", () => {
    expect(mergeSort([5, 3, 8, 1, 2])).toEqual([1, 2, 3, 5, 8]);
    expect(mergeSort([10, -1, 0, 5])).toEqual([-1, 0, 5, 10]);
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([2, 1])).toEqual([1, 2]);
  });

    it.skip("should handle arrays with duplicate values", () => {
      expect(mergeSort([3, 1, 2, 3])).toEqual([1, 2, 3, 3]);
      expect(mergeSort([5, 5, 5])).toEqual([5, 5, 5]);
    });
});

    