import {
  getAverage,
  filterList,
  findOutlier,
  longest,
  sortArray,
  flattenChildren,
} from "./";

describe("Technical rapid tests", () => {
  it("Return the average of the given array rounded down to its nearest integer.", () => {
    expect(getAverage([2, 2, 2, 2])).toEqual(2);
    expect(getAverage([1, 2, 3, 4, 5])).toEqual(3);
    expect(getAverage([1, 1, 1, 1, 1, 1, 1, 2])).toEqual(1);
  });

  it("Return a new list with the strings filtered out", () => {
    expect(filterList([1, 2, "a", "b"])).toMatchObject([1, 2]);
    expect(filterList([1, "a", "b", 0, 15])).toMatchObject([1, 0, 15]);
    expect(filterList([1, 2, "aasf", "1", "123", 123])).toMatchObject([
      1,
      2,
      123,
    ]);
  });

  it("Return the outlier from an array of numbers", () => {
    expect(findOutlier([0, 1, 2])).toEqual(1);
    expect(findOutlier([1, 2, 3])).toEqual(2);
    expect(findOutlier([2, 6, 8, 10, 3])).toEqual(3);
    expect(findOutlier([0, 0, 3, 0, 0])).toEqual(3);
    expect(findOutlier([1, 1, 0, 1, 1])).toEqual(0);
  });

  it("Return a new sorted string, the longest possible, containing distinct letters", () => {
    expect(longest("aretheyhere", "yestheyarehere")).toEqual("aehrsty");
    expect(
      longest("loopingisfunbutdangerous", "lessdangerousthancoding")
    ).toEqual("abcdefghilnoprstu");
    expect(longest("inmanylanguages", "theresapairoffunctions")).toEqual(
      "acefghilmnoprstuy"
    );
    expect(
      longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
    ).toEqual("abcdefghijklmnopqrstuvwxyz");
  });

  it("Return sorted array with the odd numbers in ascending order while leaving the even numbers at their original positions.", () => {
    expect(sortArray([5, 3, 2, 8, 1, 4])).toMatchObject([1, 3, 2, 8, 5, 4]);
    expect(sortArray([5, 3, 1, 8, 0])).toMatchObject([1, 3, 5, 8, 0]);
    expect(sortArray([7, 1])).toMatchObject([1, 7]);
    expect(sortArray([5, 8, 6, 3, 4])).toMatchObject([3, 8, 6, 5, 4]);
    expect(sortArray([])).toMatchObject([]);
  });

  it("Return an object with a flattened array of children nodes", () => {
    const nodeWithChildren = {
      id: 1,
      name: "a",
      children: [
        {
          id: 2,
          name: "b",
          children: [
            {
              id: 4,
              name: "d",
              children: [
                {
                  id: 5,
                  name: "e",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          name: "c",
          children: [],
        },
      ],
    };

    const nodeWithFlattenedChildren = flattenChildren(nodeWithChildren);
    expect(nodeWithChildren.id).toEqual(1);
    expect(nodeWithChildren.name).toEqual("a");
    expect(nodeWithChildren.children.length).toEqual(4);
    expect(
      nodeWithFlattenedChildren.children.map((c) => c.id).sort()
    ).toMatchObject([2, 3, 4, 5]);
  });
});
