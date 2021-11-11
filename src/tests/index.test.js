import { squeak, squeakOnce } from "../index";

describe("fn tests", () => {
  test("canary", () => {
    expect(true).toBe(true);
  });
  test("squeak", () => {
    const actual = squeak("Mouse");
    const expected = "Mouse squeak";
    expect(actual).toBe(expected);
  });

  test("squeakOnce", () => {
    console.log(squeakOnce("Mouse"));
  });
});
