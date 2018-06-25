// db = require('./mySQLdb.js');
const faker = require('faker');
const fs = require('fs');

const randomNumber = (min, max) => Math.floor(Math.random() * Math.floor(max)) + min;
const sizeList = [2, 4, 6, 8, 10, 12];
const colorList = ['Cyan', 'Aqua', 'AliceBlue', 'Bisque', 'Black', 'Brown', 'Chartreuse', 'BlueViolet', 'DarkGrey', 'DarkGreen', 'LemonChiffon', 'LightSlateGray', 'Orange', 'Red'];
const randomColors = () => {
  let numberOfColors = randomNumber(1, 3);
  const availableColors = [];
  while (numberOfColors > 0) {
    availableColors.push(colorList[randomNumber(0, colorList.length - 1)]);
    numberOfColors -= 1;
  }
  return availableColors;
};

const randomSizes = () => {
  const boundOne = randomNumber(1, 5);
  const boundTwo = randomNumber(boundOne + 1, 5);
  return sizeList.slice(boundOne, boundTwo);
};

const seed = () => {
  let record = 0;
  while (record < 10000000) {
    let data = '';
    let everyHunThou = 0;
    while (everyHunThou < 100000) {
      data += `${record}\t`;
      data += `${faker.commerce.productName()}\t`;
      data += `${faker.commerce.price()}\t`;
      data += `${faker.lorem.paragraph()}\t`;
      data += `{${randomColors()}}\t`;
      data += `{${randomSizes()}}\t`;
      data += `${faker.commerce.productMaterial()}\t`;
      data += `${faker.commerce.productAdjective()}\t`;
      data += `${faker.lorem.sentence()}`;
      data += '\n';
      record += 1;
      everyHunThou += 1;
    }
    fs.appendFileSync('./bigData.tsv', data);
  }
  console.log(record);
};
//I COMMENTED OUT THE SEED FUNCTION INVOCATION, PLEASE UNCOMMENT IT IF YOU WANT TO RESEED THE TSV OKAY?
// seed();
// const item = {};
// item.title = faker.commerce.productName();
// item.price = faker.commerce.price();
// item.description = faker.lorem.paragraph();
// item.color = randomColors();
// item.size = randomSizes();
// item.fabric = faker.commerce.productMaterial();
// item.care = faker.commerce.productAdjective();
// item.features = faker.lorem.sentence();
// record += 1;


// const test = () => {
//   let thing = 0;
//   while (thing < 10) {
//     console.log(faker.commerce.productMaterial(), faker.commerce.productAdjective(), faker.lorem.sentence());
//     thing += 1;
//   }
// }
// test();