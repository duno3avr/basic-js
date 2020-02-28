module.exports = function countCats(backyard) {
  let count = 0;
  let cats = backyard.reduce((acc,currValue) => acc.concat(currValue),[])
  cats.forEach(element => {
    if(element === '^^') {
      count ++;
    }
  });
  return count;
};
