import getUniqId from "utils/getUniqId";

test("Test function return value", () => {
  expect(getUniqId(20)).toHaveLength(20);
  expect(getUniqId(20)).not.toHaveLength(10);
  expect(getUniqId()).toHaveLength(15);
  expect(typeof getUniqId(10)).toBe("string");
});
