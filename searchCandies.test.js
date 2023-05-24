const { priceFilter, nameFilter, searchCandies } = require("./searchCandies.js")

describe("priceFilter", () => {
  it("returns candies bellow or equal to price", () => {
    expect(priceFilter(1.49)).toEqual(["Mars", "Skittles"]);
  });
});

describe("nameFilter", () => {
  it("returns candies that start with the same letters", () => {
    expect(nameFilter("Ma")).toEqual(["Mars", "Maltesers"]);
  });
});

describe("searchCandies", () => {
  it("Ma, 10", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
  it("Ma, 2", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });
  it("S, 10", () => {
    expect(searchCandies("S", 10)).toEqual(["Skitties", "Skittles", "Starburst"]);
  });
  it("S, 10", () => {
    expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });
  it("ma, 10", () => {
    expect(searchCandies("ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
});