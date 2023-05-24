const candies = [
    { name: "Aero", price: 1.99 },
    { name: "Skitties", price: 2.99 },
    { name: "Mars", price: 1.49 },
    { name: "Maltesers", price: 3.49 },
    { name: "Skittles", price: 1.49 },
    { name: "Starburst", price: 5.99 },
    { name: "Ricola", price: 1.99 },
    { name: "Polkagris", price: 5.99 },
    { name: "Pastila", price: 4.99 },
    { name: "Mentos", price: 8.99 },
    { name: "Raffaello", price: 7.99 },
    { name: "Gummi bears", price: 10.99 },
    { name: "Fraise Tagada", price: 5.99 },
  ];
  
  const priceFilter = (price) => {
    let array = [];
    candies.filter((object) => {
      if (object.price <= price) {
        array.push(object.name);
      }
    });
    return array;
  };
  
  const nameFilter = (chars) => {
    let array = [];
    candies.filter((object) => {
      if (object.name.toLowerCase().startsWith(chars.toLowerCase())) {
        array.push(object.name);
      }
    });
    return array;
  };
  
  const searchCandies = (chars, price) => {
    const result = nameFilter(chars).filter((element) => priceFilter(price).includes(element));
    return result;
  };

  module.exports = { 
    priceFilter, 
    nameFilter,
    searchCandies 
  };
