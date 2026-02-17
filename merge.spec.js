import { mergeSort } from "./merge";

describe("mergeSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    expect(mergeSort([5, 3, 8, 1, 2])).toEqual([1, 2, 3, 5, 8]);
    expect(mergeSort([10, -1, 0, 5])).toEqual([-1, 0, 5, 10]);
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([2, 1])).toEqual([1, 2]);
  });

    it("should handle arrays with duplicate values", () => {
      expect(mergeSort([3, 1, 2, 3])).toEqual([1, 2, 3, 3]);
      expect(mergeSort([5, 5, 5])).toEqual([5, 5, 5]);
    });

    it("should handle arrays with negative numbers", () => {
      expect(mergeSort([-3, -1, -2])).toEqual([-3, -2, -1]);
      expect(mergeSort([-5, 0, 5])).toEqual([-5, 0, 5]);
    });

    it("should handle arrays with a mix of positive and negative numbers", () => {
      expect(mergeSort([3, -1, 2, -3])).toEqual([-3, -1, 2, 3]);
      expect(mergeSort([5, -5, 0])).toEqual([-5, 0, 5]);
    });

    it("empty array should return empty array", () => {
      expect(mergeSort([])).toEqual([]);
    });

    it("should handle arrays with all identical values", () => {
      expect(mergeSort([1, 1, 1])).toEqual([1, 1, 1]);
      expect(mergeSort([0, 0, 0])).toEqual([0, 0, 0]);
    });

    it("should handle arrays with a single element", () => {
      expect(mergeSort([1])).toEqual([1]);
      expect(mergeSort([-1])).toEqual([-1]);
    });
});

    